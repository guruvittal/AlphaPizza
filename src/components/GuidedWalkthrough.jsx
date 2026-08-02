import React, { useState } from "react";
import { Sparkles, ShoppingBag, Search, PackageCheck, Zap, RefreshCw } from "lucide-react";

export function GuidedWalkthrough() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Step Indicator Header */}
      <div className="card-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap style={{ width: '22px', height: '22px', color: '#C8102E' }} />
              <span>Step-by-Step AI Generated Deals Walkthrough</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', fontWeight: '600', marginTop: '2px' }}>
              Follow the guided 4-step story showing how AI Generated Deals transform a standard checkout.
            </div>
          </div>

          <button
            onClick={() => setStep(1)}
            style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <RefreshCw style={{ width: '14px', height: '14px' }} />
            Reset Story
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          <div 
            onClick={() => setStep(1)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: step === 1 ? '#FEE2E2' : '#F8FAFC',
              border: step === 1 ? '2px solid #C8102E' : '1px solid #E2E8F0',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '900', color: step === 1 ? '#C8102E' : '#64748B' }}>1. Standard Checkout</div>
            <div style={{ fontSize: '10px', color: '#475569' }}>20% Off Coupon</div>
          </div>

          <div 
            onClick={() => setStep(2)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: step === 2 ? '#FEF3C7' : '#F8FAFC',
              border: step === 2 ? '2px solid #D97706' : '1px solid #E2E8F0',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '900', color: step === 2 ? '#D97706' : '#64748B' }}>2. AI Basket Analysis</div>
            <div style={{ fontSize: '10px', color: '#475569' }}>Cart & Surplus Check</div>
          </div>

          <div 
            onClick={() => setStep(3)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: step === 3 ? '#EFF6FF' : '#F8FAFC',
              border: step === 3 ? '2px solid #2563EB' : '1px solid #E2E8F0',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '900', color: step === 3 ? '#2563EB' : '#64748B' }}>3. Proposition Offered</div>
            <div style={{ fontSize: '10px', color: '#475569' }}>AI Generated Custom Deal</div>
          </div>

          <div 
            onClick={() => setStep(4)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: step === 4 ? '#D1FAE5' : '#F8FAFC',
              border: step === 4 ? '2px solid #059669' : '1px solid #E2E8F0',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '900', color: step === 4 ? '#059669' : '#64748B' }}>4. Basket Updated</div>
            <div style={{ fontSize: '10px', color: '#475569' }}>Items, Costs & Savings</div>
          </div>
        </div>
      </div>

      {/* STEP 1: STANDARD CHECKOUT (LEGACY ENGINE) */}
      {step === 1 && (
        <div className="card-panel" style={{ border: '2px solid #CBD5E1' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
            STEP 1: Standard Checkout Experience (Legacy 20% Coupon)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '14px 0' }}>
            {/* Cart Box */}
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
              <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000', marginBottom: '10px' }}>🛒 Current Customer Basket</div>
              <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>• Pepperoni Epic Stuffed Crust Pizza ($22.99)</div>
                <div>• The Works - Large Pizza ($21.99)</div>
                <div style={{ fontStyle: 'italic', color: '#64748B' }}>• Side Items: None</div>
              </div>
            </div>

            {/* Price Box */}
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
              <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000', marginBottom: '10px' }}>🏷️ Standard Coupon Applied (PROMO20)</div>
              <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>Retail Subtotal: <strong>$44.98</strong></div>
                <div>Standard 20% Discount: <strong style={{ color: '#DC2626' }}>-$9.00</strong></div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#000000', marginTop: '6px', paddingTop: '6px', borderTop: '1px solid #CBD5E1' }}>
                  Customer Pays: $35.98
                </div>
                <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>Store Net Profit: $26.98</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '12px', borderRadius: '8px', fontSize: '12px', color: '#92400E', marginBottom: '16px' }}>
            ⚠️ <strong>Standard Limitation:</strong> The 20% coupon cuts price flatly without offering any side items, leaving overstocked Jalapeño Bites unsold in store inventory.
          </div>

          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #C8102E 0%, #D97706 100%)',
              color: '#FFFFFF',
              fontWeight: '900',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(200, 16, 46, 0.3)'
            }}
          >
            <Sparkles style={{ width: '18px', height: '18px' }} />
            <span>{isAnalyzing ? "AI Engine Analyzing Basket & Store Stock..." : "Step 2: Click to See What AI Engine Can Do ➔"}</span>
          </button>
        </div>
      )}

      {/* STEP 2: AI ENGINE BASKET & INVENTORY ANALYSIS */}
      {step === 2 && (
        <div className="card-panel" style={{ border: '2px solid #D97706', background: '#FEF3C7' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', color: '#B45309', textTransform: 'uppercase', marginBottom: '8px' }}>
            STEP 2: AI Engine Analyzes Customer Basket & Store Inventory
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', margin: '14px 0' }}>
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #FDE68A' }}>
              <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Search style={{ width: '16px', height: '16px', color: '#D97706' }} />
                <span>1. Basket Pattern Analysis</span>
              </div>
              <p style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
                Detected <strong>2 Large Pizzas</strong> + <strong>0 Side Items</strong> in cart. High volume pizza order ready for side item attachment!
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #FDE68A' }}>
              <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PackageCheck style={{ width: '16px', height: '16px', color: '#D97706' }} />
                <span>2. Store Stock Lookup</span>
              </div>
              <p style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
                Store #101 has <strong>142 units of Jalapeño Bites</strong> flagged as <strong style={{ color: '#D97706' }}>HIGH_SURPLUS</strong>.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #FDE68A' }}>
              <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap style={{ width: '16px', height: '16px', color: '#D97706' }} />
                <span>3. Sandbox Code Mutation</span>
              </div>
              <p style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
                Gemini Flash generated rule Gen 42 attaching Jalapeño Bites for $1.50 in <strong>3.8 ms sandbox execution time</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              background: '#D97706',
              color: '#FFFFFF',
              fontWeight: '900',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>Step 3: Present AI Generated Custom Offer ➔</span>
          </button>
        </div>
      )}

      {/* STEP 3: PROPOSITION OFFERED */}
      {step === 3 && (
        <div className="card-panel" style={{ border: '2px solid #2563EB', background: '#EFF6FF' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', color: '#1E40AF', textTransform: 'uppercase', marginBottom: '8px' }}>
            STEP 3: AI Engine Presents Compelling Custom Proposition Card
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '2px solid #3B82F6', margin: '14px 0', textAlign: 'center' }}>
            <span className="pill-badge pill-badge-gold">🔥 AI Generated Exclusive Deal</span>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#000000', marginTop: '8px' }}>
              "Family Feast: Add 8pc Jalapeño Bites for just $1.50!"
            </div>
            <p style={{ fontSize: '13px', color: '#475569', marginTop: '6px' }}>
              Regular price $8.99 $\rightarrow$ <strong>You pay only $1.50 for the side item!</strong>
            </p>
            <div style={{ fontSize: '12px', color: '#059669', fontWeight: '800', marginTop: '8px' }}>
              Total Food Value Included: $53.97 worth of delicious food!
            </div>
          </div>

          <button
            onClick={() => setStep(4)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              background: '#2563EB',
              color: '#FFFFFF',
              fontWeight: '900',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
            }}
          >
            <ShoppingBag style={{ width: '18px', height: '18px' }} />
            <span>Step 4: Customer Accepts Offer & Updates Basket ➔</span>
          </button>
        </div>
      )}

      {/* STEP 4: BASKET UPDATED & FINANCIAL DELTA IDENTIFIED */}
      {step === 4 && (
        <div className="card-panel" style={{ border: '3px solid #059669', background: '#ECFDF5' }}>
          <div style={{ fontSize: '12px', fontWeight: '900', color: '#065F46', textTransform: 'uppercase', marginBottom: '8px' }}>
            STEP 4: Customer Basket Updated — Financial Delta Identified!
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '14px 0' }}>
            {/* Updated Basket */}
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #A7F3D0' }}>
              <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>🛒 Updated Customer Basket</div>
              <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>• Pepperoni Epic Stuffed Crust ($22.99)</div>
                <div>• The Works - Large ($21.99)</div>
                <div style={{ fontWeight: '900', color: '#059669', background: '#D1FAE5', padding: '4px 8px', borderRadius: '6px' }}>
                  ➕ ADDED: Jalapeño Bites (8 pcs) for $1.50 (Reg. $8.99)
                </div>
              </div>
            </div>

            {/* Updated Receipt & Delta */}
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #A7F3D0' }}>
              <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>🧾 Updated Receipt Breakdown</div>
              <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>Total Food Retail Value: <strong>$53.97</strong></div>
                <div>AI Generated Discount: <strong style={{ color: '#059669' }}>-$14.69 Saved!</strong></div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#000000', paddingTop: '4px', borderTop: '1px solid #E2E8F0' }}>
                  Customer Final Price: $39.28
                </div>
                <div style={{ fontSize: '13px', fontWeight: '900', color: '#059669', marginTop: '4px', background: '#D1FAE5', padding: '4px 8px', borderRadius: '6px' }}>
                  Store Net Profit: $29.18 (+$2.20 Profit Gain!)
                </div>
              </div>
            </div>
          </div>

          {/* Identified Changes Summary Box */}
          <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #34D399', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#065F46', marginBottom: '8px' }}>
              🔍 Identified Changes in Basket & Costs:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontSize: '12px' }}>
              <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <strong>Basket Change:</strong> +1 Side Item Added (Jalapeño Bites)
              </div>
              <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <strong>Customer Benefit:</strong> +$5.69 More Total Food Value Saved ($14.69 vs $9.00)!
              </div>
              <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <strong>Store Net Profit:</strong> +$2.20 Higher Cash Profit ($29.18 vs $26.98)!
              </div>
              <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <strong>Inventory Impact:</strong> Cleared 1 unit of overstocked surplus inventory!
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep(1)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              background: '#F1F5F9',
              border: '2px solid #CBD5E1',
              color: '#000000',
              fontWeight: '900',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            🔄 Restart Walkthrough Story
          </button>
        </div>
      )}

    </div>
  );
}
