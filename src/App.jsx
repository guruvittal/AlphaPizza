import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";

import { STORES_NETWORK, INITIAL_INVENTORY } from "./data/inventoryData";
import { INITIAL_POPULATION } from "./data/heuristicsPopulation";
import { computeEngineComparison } from "./engine/evaluator";
import { runEvolutionStep } from "./engine/evolutionLoop";

import { Header } from "./components/Header";
import { StoreSelector } from "./components/StoreSelector";
import { CandidateOfferRanking } from "./components/CandidateOfferRanking";
import { GuidedWalkthrough } from "./components/GuidedWalkthrough";
import { CartBuilder } from "./components/CartBuilder";
import { EngineComparison } from "./components/EngineComparison";
import { OffersCatalog } from "./components/OffersCatalog";
import { MenuCatalogData } from "./components/MenuCatalogData";
import { InventoryImpact } from "./components/InventoryImpact";
import { MathSemantics } from "./components/MathSemantics";
import { BusinessCalculator } from "./components/BusinessCalculator";
import { ThinkingLog } from "./components/ThinkingLog";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function App() {
  // Store Selection State (5 Store Network)
  const [activeStoreId, setActiveStoreId] = useState("STORE_101");
  const activeStore = useMemo(() => {
    return STORES_NETWORK.find((s) => s.storeId === activeStoreId) || STORES_NETWORK[0];
  }, [activeStoreId]);

  // Cart Items State (Family Pizza Night Archetype: 2 Large Pizzas)
  const [cartItems, setCartItems] = useState([
    { itemId: "PIZZA_EPIC_STUFFED", quantity: 1 },
    { itemId: "PIZZA_THE_WORKS", quantity: 1 }
  ]);

  const [storeInventory, setStoreInventory] = useState(activeStore.inventory);
  const [heuristicsPopulation, setHeuristicsPopulation] = useState(INITIAL_POPULATION);
  
  // Active heuristic defaults to Gen 42 (Pareto Optimal Master)
  const [activeHeuristic, setActiveHeuristic] = useState(INITIAL_POPULATION[3]);

  // Main UI Tabs
  const [activeTab, setActiveTab] = useState("simulator");
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [isOfferApplied, setIsOfferApplied] = useState(false);

  const [isEvolving, setIsEvolving] = useState(false);
  const [evolutionLogs, setEvolutionLogs] = useState([]);
  const [lastEvolvedNotification, setLastEvolvedNotification] = useState(null);

  // Multi-Objective Weights
  const [weights] = useState({ w1: 0.35, w2: 0.45, w3: 0.20 });

  // Handle Store Switching
  const handleSelectStore = (storeId) => {
    setActiveStoreId(storeId);
    const targetStore = STORES_NETWORK.find((s) => s.storeId === storeId);
    if (targetStore) {
      setStoreInventory(targetStore.inventory);
      setIsOfferApplied(false);
    }
  };

  // Live Deal Calculation
  const comparisonData = useMemo(() => {
    return computeEngineComparison(cartItems, storeInventory, activeHeuristic, weights);
  }, [cartItems, storeInventory, activeHeuristic, weights]);

  // Cart Handlers
  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.itemId !== itemId));
    } else {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.itemId === itemId);
        if (existing) {
          return prev.map((item) => (item.itemId === itemId ? { ...item, quantity } : item));
        } else {
          return [...prev, { itemId, quantity }];
        }
      });
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    setIsOfferApplied(false);
  };

  const handleLoadPreset = (preset) => {
    setCartItems(preset.items);
    setIsOfferApplied(false);
  };

  // Accept AlphaEvolve Smart Deal into Live Basket
  const handleAcceptDeal = () => {
    const attachedSku = comparisonData?.alphaEvolve?.attachedItemSku;
    if (attachedSku) {
      setCartItems((prev) => {
        const existing = prev.find((i) => i.itemId === attachedSku);
        if (existing) {
          return prev.map((i) => i.itemId === attachedSku ? { ...i, isAttachedDealItem: true } : i);
        } else {
          return [...prev, { itemId: attachedSku, quantity: 1, isAttachedDealItem: true }];
        }
      });
      setIsOfferApplied(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Remove AlphaEvolve Deal from Live Basket
  const handleRemoveDeal = () => {
    const attachedSku = comparisonData?.alphaEvolve?.attachedItemSku;
    if (attachedSku) {
      setCartItems((prev) => prev.filter((i) => i.itemId !== attachedSku));
      setIsOfferApplied(false);
    }
  };

  // Surplus Inventory Toggle
  const handleToggleSurplus = () => {
    const currentStatus = storeInventory.SIDE_PAPA_BITES?.status;
    const newStatus = currentStatus === "HIGH_SURPLUS" ? "NORMAL" : "HIGH_SURPLUS";
    setStoreInventory((prev) => ({
      ...prev,
      SIDE_PAPA_BITES: {
        ...prev.SIDE_PAPA_BITES,
        status: newStatus
      }
    }));
  };

  // Toggle specific SKU status
  const handleToggleStatus = (sku, newStatus) => {
    setStoreInventory((prev) => ({
      ...prev,
      [sku]: {
        ...prev[sku],
        status: newStatus
      }
    }));
  };

  const handleResetInventory = () => setStoreInventory(activeStore.inventory);

  // Live Evolution Trigger
  const handleEvolveLive = async () => {
    setIsEvolving(true);
    const newLogs = [];

    try {
      const currentGen = activeHeuristic ? activeHeuristic.generation : 42;

      const newCandidate = await runEvolutionStep({
        currentGeneration: currentGen,
        activeCart: cartItems,
        storeInventory,
        weights,
        onStepProgress: (step) => {
          const logEntry = {
            timestamp: new Date().toLocaleTimeString(),
            type: step.phase,
            agent: step.title.split(":")[0],
            message: step.detail
          };
          newLogs.push(logEntry);
          setEvolutionLogs([...newLogs]);
        }
      });

      setHeuristicsPopulation((prev) => [...prev, newCandidate]);
      setActiveHeuristic(newCandidate);
      setLastEvolvedNotification(newCandidate);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error("Evolution Error:", err);
    } finally {
      setIsEvolving(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-app)', color: 'var(--text-dark)' }}>
      
      {/* Streamlined Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onEvolveLive={handleEvolveLive}
        isEvolving={isEvolving}
        showTechDetails={showTechDetails}
        setShowTechDetails={setShowTechDetails}
      />

      <main className="main-container">

        {/* Live Evolved Strategy Notification Banner */}
        {lastEvolvedNotification && (
          <div style={{ background: '#ECFDF5', border: '2px solid #059669', padding: '14px 20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles style={{ width: '22px', height: '22px', color: '#059669', fill: '#059669' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: '900', color: '#065F46' }}>
                  🎉 New Evolved Strategy Deployed Live: Gen {lastEvolvedNotification.generation}!
                </div>
                <div style={{ fontSize: '12px', color: '#047857', fontWeight: '700' }}>
                  Total Population: <strong>{heuristicsPopulation.length} Candidates</strong> • Fitness Score $F(H)$: <strong>{lastEvolvedNotification.fitness}</strong> • Execution Latency: <strong>3.4ms</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => setLastEvolvedNotification(null)}
              style={{ background: '#D1FAE5', border: '1px solid #34D399', color: '#065F46', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '900', cursor: 'pointer' }}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* TAB 1: REAL-WORLD LIVE DEAL SIMULATOR & 5-STORE NETWORK */}
        {activeTab === "simulator" && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* 5-Store Network Location Switcher */}
            <StoreSelector
              activeStoreId={activeStoreId}
              onSelectStore={handleSelectStore}
            />

            <div className="simulator-grid">
              
              {/* Left Column: Dynamic Real-World Basket Builder */}
              <div>
                <CartBuilder
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onClearCart={handleClearCart}
                  onLoadPreset={handleLoadPreset}
                  cartTotals={comparisonData.cartSummary}
                  comparisonData={comparisonData}
                  surplusItemSku={storeInventory.SIDE_PAPA_BITES?.status}
                  onToggleSurplus={handleToggleSurplus}
                  isOfferApplied={isOfferApplied}
                  onAcceptDeal={handleAcceptDeal}
                  onRemoveDeal={handleRemoveDeal}
                />
              </div>

              {/* Right Column: Side-by-Side Deal Comparison & Candidate Offer Margin Ranking */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <EngineComparison
                  comparisonData={comparisonData}
                  showTechDetails={showTechDetails}
                  isOfferApplied={isOfferApplied}
                  onAcceptDeal={handleAcceptDeal}
                  onRemoveDeal={handleRemoveDeal}
                />

                {/* Candidate Offer Margin Ranking Table */}
                <CandidateOfferRanking
                  rankedCandidates={comparisonData.alphaEvolve.rankedCandidates}
                  selectedOfferId={comparisonData.alphaEvolve.promoId}
                />

                {/* Developer Logs Drawer if Tech Mode is ON */}
                {showTechDetails && (
                  <div style={{ marginTop: '10px', paddingTop: '16px', borderTop: '2px solid #CBD5E1' }}>
                    <div style={{ fontSize: '13px', fontWeight: '900', color: '#059669', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Developer Mode: Live Agent Thinking Logs
                    </div>
                    <ThinkingLog logs={evolutionLogs} />
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: GUIDED STORY WALKTHROUGH */}
        {activeTab === "walkthrough" && (
          <GuidedWalkthrough />
        )}

        {/* TAB 3: OFFERS & BUNDLES CATALOG */}
        {activeTab === "offers" && (
          <OffersCatalog
            heuristicsPopulation={heuristicsPopulation}
            activeHeuristic={activeHeuristic}
            setActiveHeuristic={setActiveHeuristic}
          />
        )}

        {/* TAB 4: MENU ITEMS & COGS MASTER DATA */}
        {activeTab === "menu_data" && (
          <MenuCatalogData />
        )}

        {/* TAB 5: STORE INVENTORY & SURPLUS IMPACT */}
        {activeTab === "inventory" && (
          <InventoryImpact
            storeInventory={storeInventory}
            onToggleStatus={handleToggleStatus}
            onResetInventory={handleResetInventory}
          />
        )}

        {/* TAB 6: MATH & CALCULATION SEMANTICS */}
        {activeTab === "math" && (
          <MathSemantics />
        )}

        {/* TAB 7: BUSINESS ROI CALCULATOR */}
        {activeTab === "business" && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <BusinessCalculator
              marginDeltaPerCart={comparisonData?.comparison?.marginDeltaDollars || 2.20}
            />
          </div>
        )}

      </main>

    </div>
  );
}

export default App;
