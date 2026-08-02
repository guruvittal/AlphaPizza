import React, { useState } from "react";
import { LEGACY_OFFERS, ALPHAEVOLVE_HEURISTICS } from "../data/offersData";
import { Tag, CheckCircle2, History, Sparkles, Code, Play } from "lucide-react";

export function OffersCatalog({ heuristicsPopulation = [], activeHeuristic, setActiveHeuristic }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const generationMilestones = [
    { gen: "Gen 0-9", name: "Seed Rule Baseline", desc: "Flat percentage coupons (20% off whole cart). High margin erosion, 0 inventory awareness.", status: "Superseded" },
    { gen: "Gen 10-24", name: "Volume Tier Mutations", desc: "Introduced multi-pizza volume threshold triggers ($10 off 2+ pizzas). Improved average ticket size.", status: "Superseded" },
    { gen: "Gen 25-41", name: "Surplus Stock Attachers", desc: "Connected store inventory feeds. Added single-item overstock attachments ($1.99 Jalapeño Bites).", status: "Superseded" },
    { gen: "Gen 42+", name: "Pareto Champion Master", desc: "Consolidated all winning heuristics into active Pareto-Optimal strategies that optimize savings, profit $, and surplus clearing simultaneously!", status: "Active Champion" }
  ];

  // Combine static catalog heuristics with dynamic live population (Gen 43, Gen 44...)
  const dynamicPopulation = heuristicsPopulation.length > 0 ? heuristicsPopulation : ALPHAEVOLVE_HEURISTICS;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header Banner */}
      <div className="card-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tag style={{ width: '22px', height: '22px', color: '#059669' }} />
              <span>Offers & Bundles Master Catalog</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', fontWeight: '600', marginTop: '2px' }}>
              Catalog of static legacy coupons vs. live AI-generated evolutionary strategies (Gen 0 through Gen 42+)
            </div>
          </div>

          {/* Filter Pills */}
          <div className="nav-tabs" style={{ margin: '0' }}>
            <button
              onClick={() => setActiveFilter("all")}
              className={`nav-tab-btn ${activeFilter === "all" ? "active" : ""}`}
            >
              All Strategies ({LEGACY_OFFERS.length + dynamicPopulation.length})
            </button>
            <button
              onClick={() => setActiveFilter("legacy")}
              className={`nav-tab-btn ${activeFilter === "legacy" ? "active" : ""}`}
            >
              Legacy Static
            </button>
            <button
              onClick={() => setActiveFilter("alphaevolve")}
              className={`nav-tab-btn ${activeFilter === "alphaevolve" ? "active" : ""}`}
            >
              AI Generated Evolved
            </button>
          </div>
        </div>
      </div>

      {/* 42-GENERATION EVOLUTIONARY TIMELINE CARD */}
      <div className="card-panel" style={{ border: '2px solid #D97706', background: '#FEF3C7' }}>
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <History style={{ width: '20px', height: '20px', color: '#B45309' }} />
            <span className="panel-title" style={{ color: '#92400E' }}>
              Why Gen 42+ Master Strategy Has Active Pareto Offers
            </span>
          </div>
          <span className="pill-badge pill-badge-gold">42+ Evolutionary Cycles</span>
        </div>

        <p style={{ fontSize: '12px', color: '#78350F', fontWeight: '600', marginBottom: '14px', lineHeight: '1.5' }}>
          <strong>Gen 42+</strong> is the active evolutionary champion lineage. Over prior mutation cycles, the AI Engine tested hundreds of candidate code variations and consolidated the winning logic into <strong>Pareto-Optimal active strategies</strong> tailored to different cart patterns.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
          {generationMilestones.map((m) => (
            <div key={m.gen} style={{ background: '#FFFFFF', padding: '12px', borderRadius: '8px', border: m.status === 'Active Champion' ? '2px solid #059669' : '1px solid #FCD34D' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', fontWeight: '900', color: m.status === 'Active Champion' ? '#059669' : '#B45309' }}>
                  {m.gen}
                </span>
                <span style={{ fontSize: '9px', fontWeight: '900', background: m.status === 'Active Champion' ? '#D1FAE5' : '#FEF3C7', color: m.status === 'Active Champion' ? '#065F46' : '#92400E', padding: '2px 6px', borderRadius: '4px' }}>
                  {m.status}
                </span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000' }}>{m.name}</div>
              <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LEGACY STATIC COUPONS */}
      {(activeFilter === "all" || activeFilter === "legacy") && (
        <div className="card-panel">
          <div className="panel-header">
            <span className="panel-title" style={{ color: '#DC2626' }}>
              1. Legacy Static Coupons (Old Way)
            </span>
            <span className="pill-badge pill-badge-red">Static Discount Rules</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {LEGACY_OFFERS.map((offer) => (
              <div key={offer.id} className="deal-card legacy-deal-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="pill-badge pill-badge-red">{offer.type}</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#DC2626' }}>{offer.code}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>{offer.name}</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', fontWeight: '600' }}>{offer.description}</div>
                </div>

                <div style={{ background: '#FFF5F5', padding: '10px', borderRadius: '8px', border: '1px solid #FECDD3', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div><strong>Trigger:</strong> {offer.triggerCondition}</div>
                  <div><strong>Discount:</strong> {offer.discountLogic}</div>
                  <div style={{ color: '#DC2626', fontWeight: '700' }}>⚠️ {offer.cons}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI GENERATED EVOLVED HEURISTICS (DYNAMIC POPULATION INCLUDING GEN 43+) */}
      {(activeFilter === "all" || activeFilter === "alphaevolve") && (
        <div className="card-panel">
          <div className="panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ width: '20px', height: '20px', color: '#059669' }} />
              <span className="panel-title" style={{ color: '#059669' }}>
                2. AI Generated Active Strategies ({dynamicPopulation.length} Strategies)
              </span>
            </div>
            <span className="pill-badge pill-badge-green">AI Live Evolved Strategies</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {dynamicPopulation.map((heur) => {
              const isSelected = activeHeuristic && (activeHeuristic.generation === heur.generation || activeHeuristic.id === heur.id);
              const isLiveLLM = heur.generation > 42 || heur.isLiveLlmResponse;

              return (
                <div
                  key={heur.id || `gen_${heur.generation}`}
                  className="deal-card alphaevolve-deal-card"
                  style={{
                    border: isSelected ? '3px solid #059669' : (isLiveLLM ? '2px solid #3B82F6' : '2px solid #34D399'),
                    background: isSelected ? '#ECFDF5' : (isLiveLLM ? '#EFF6FF' : '#FFFFFF')
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span className={`pill-badge ${isLiveLLM ? 'pill-badge-blue' : 'pill-badge-gold'}`}>
                          Gen {heur.generation} {isLiveLLM ? "🔥 Gemini Live" : ""}
                        </span>
                        {isSelected && (
                          <span className="pill-badge pill-badge-green" style={{ fontSize: '10px' }}>
                            Active Strategy
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '900', color: '#059669' }}>
                        Fitness F(H): {heur.fitnessScore || heur.fitness} / 100
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>{heur.name || heur.promoName}</div>
                    <div style={{ fontSize: '11px', color: '#2563EB', fontWeight: '800', marginTop: '2px' }}>
                      Author: {heur.authorAgent || heur.engine || "Gemini 2.5 Flash"}
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', fontWeight: '600' }}>{heur.description || heur.reasoningSummary}</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div><strong>Attached Item:</strong> <span style={{ color: '#B45309', fontWeight: '800' }}>{heur.attachedItemName || heur.attachedItemSku || "None"}</span></div>
                    {heur.attachedPrice && <div><strong>Attached Promo Price:</strong> ${Number(heur.attachedPrice).toFixed(2)}</div>}
                    {heur.discountAmount && <div><strong>Customer Savings:</strong> ${Number(heur.discountAmount).toFixed(2)}</div>}
                  </div>

                  {heur.code && (
                    <div style={{ background: '#0F172A', color: '#38BDF8', padding: '8px 12px', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '10px', overflowX: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94A3B8', fontSize: '9px', marginBottom: '4px' }}>
                        <Code style={{ width: '12px', height: '14px' }} />
                        <span>Generated Python Rule:</span>
                      </div>
                      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{heur.code}</pre>
                    </div>
                  )}

                  {setActiveHeuristic && !isSelected && (
                    <button
                      onClick={() => setActiveHeuristic(heur)}
                      style={{
                        background: '#059669',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '900',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginTop: '6px'
                      }}
                    >
                      <Play style={{ width: '12px', height: '12px', fill: '#FFFFFF' }} />
                      <span>Set as Active Strategy in Simulator ➔</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
