import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Sparkles, ChevronDown, ChevronUp, Calculator, ShoppingBag } from "lucide-react";

export function EngineComparison({
  comparisonData,
  showTechDetails,
  isOfferApplied,
  onAcceptDeal,
  onRemoveDeal
}) {
  const [showMathAudit, setShowMathAudit] = useState(true);

  if (!comparisonData) return null;

  const { cartSummary, legacy, alphaEvolve, comparison } = comparisonData;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Main Winner Callout Banner */}
      <div className="winner-banner-card">
        <div className="winner-banner-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#D1FAE5', border: '2px solid #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>
              🏆
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="pill-badge pill-badge-green">AI Generated Win-Win</span>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#047857', fontWeight: '800' }}>
                  Sub-15ms Latency: {alphaEvolve.executionTimeMs}ms
                </span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: '900', color: '#000000' }}>
                AI Generated Engine created a deal that yields <span style={{ color: '#059669' }}>+${comparison.marginDeltaDollars.toFixed(2)} higher store net profit</span>!
              </div>
            </div>
          </div>

          <div className="margin-stat-pill">
            <span style={{ fontSize: '11px', color: '#475569', textTransform: 'uppercase', fontWeight: '900', display: 'block' }}>Store Profit Gain</span>
            <span style={{ fontSize: '22px', fontWeight: '900', color: '#059669' }}>+${comparison.marginDeltaDollars.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* 2. Side-by-Side Comparison Cards */}
      <div className="comparison-grid">
        
        {/* OLD WAY: Standard 20% Off Coupon */}
        <div className="deal-card legacy-deal-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '2px solid #CBD5E1' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '900', color: '#64748B' }}>Traditional Method</span>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>Standard 20% Off Coupon</div>
            </div>
            <span style={{ background: '#E2E8F0', color: '#334155', fontSize: '11px', fontWeight: '900', padding: '4px 8px', borderRadius: '6px' }}>
              Static Rule
            </span>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="metric-box">
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#475569', display: 'block' }}>Basket Subtotal:</span>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#000000' }}>${cartSummary.retailSubtotal.toFixed(2)}</span>
            </div>

            <div className="metric-box">
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#475569', display: 'block' }}>Discount Amount:</span>
              <span style={{ fontSize: '14px', fontWeight: '900', color: '#DC2626' }}>-${legacy.discountAmount.toFixed(2)} (20% OFF)</span>
            </div>

            <div className="metric-box" style={{ background: '#FEF2F2', borderColor: '#FCA5A5' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#991B1B', display: 'block' }}>Customer Final Price:</span>
              <span style={{ fontSize: '18px', fontWeight: '900', color: '#000000' }}>${legacy.customerFinalPrice.toFixed(2)}</span>
            </div>

            <div className="metric-box">
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#475569', display: 'block' }}>Store Net Profit:</span>
              <span style={{ fontSize: '16px', fontWeight: '900', color: '#1E293B' }}>${legacy.storeNetMarginDollars.toFixed(2)}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700', color: '#475569' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertCircle style={{ width: '16px', height: '16px', color: '#DC2626' }} />
              <span>Cuts price flatly without adding side items</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertCircle style={{ width: '16px', height: '16px', color: '#DC2626' }} />
              <span>Ignores overstocked store inventory</span>
            </div>
          </div>
        </div>


        {/* NEW WAY: AI Generated Dynamic Deal Proposition */}
        <div className="deal-card alphaevolve-deal-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '2px solid #059669' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '900', color: '#B45309', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles style={{ width: '14px', height: '14px', fill: '#B45309' }} />
                AI Generated Dynamic Proposition
              </span>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>{alphaEvolve.promoName}</div>
            </div>
            <span className="pill-badge pill-badge-green">
              Smart Winner
            </span>
          </div>

          {/* Proposition Action Card */}
          <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '2px solid #059669', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#065F46' }}>
              💡 Customized Offer for Your Active Basket:
            </div>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000' }}>
              {alphaEvolve.attachedItemName ? `Add ${alphaEvolve.attachedItemName} for just $${alphaEvolve.attachedPrice.toFixed(2)} (Reg. $${alphaEvolve.attachedRetailPrice.toFixed(2)})!` : "Smart Percentage Savings"}
            </div>

            {/* Interactive Accept / Apply Button */}
            {!isOfferApplied ? (
              <button
                onClick={onAcceptDeal}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  color: '#FFFFFF',
                  fontWeight: '900',
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
                }}
              >
                <ShoppingBag style={{ width: '16px', height: '16px' }} />
                <span>Accept Smart Deal & Update Basket ➔</span>
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ background: '#D1FAE5', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '900', color: '#065F46', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: '#059669' }} />
                  <span>Deal Applied & Item Added to Your Basket!</span>
                </div>
                <button
                  onClick={onRemoveDeal}
                  style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: '11px', fontWeight: '800', cursor: 'pointer', textAlign: 'center' }}
                >
                  Remove AI Generated Deal
                </button>
              </div>
            )}
          </div>

          {/* Pricing Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="metric-box" style={{ background: '#FEF3C7', borderColor: '#FDE68A' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#92400E', display: 'block' }}>Total Food Retail Value:</span>
              <span style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>${alphaEvolve.totalRetailValue.toFixed(2)}</span>
            </div>

            <div className="metric-box" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#1E40AF', display: 'block' }}>Customer Final Price:</span>
              <span style={{ fontSize: '18px', fontWeight: '900', color: '#000000' }}>${alphaEvolve.customerFinalPrice.toFixed(2)}</span>
            </div>

            <div className="metric-box" style={{ background: '#D1FAE5', borderColor: '#34D399' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: '#065F46', display: 'block' }}>Store Net Profit:</span>
              <span style={{ fontSize: '18px', fontWeight: '900', color: '#059669' }}>${alphaEvolve.storeNetMarginDollars.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Transparent Line-by-Line Math Verification Table */}
      <div className="card-panel">
        <div 
          onClick={() => setShowMathAudit(!showMathAudit)}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        >
          <div style={{ fontSize: '13px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator style={{ width: '18px', height: '18px', color: '#059669' }} />
            <span>Line-by-Line Arithmetic Audit (Proof of Math)</span>
          </div>

          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569' }}>
            {showMathAudit ? <ChevronUp style={{ width: '18px', height: '18px' }} /> : <ChevronDown style={{ width: '18px', height: '18px' }} />}
          </button>
        </div>

        {showMathAudit && (
          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '2px solid #E2E8F0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                  <th style={{ padding: '8px 12px', fontWeight: '800' }}>Financial Metric</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#64748B' }}>Legacy 20% Coupon</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>AI Generated Smart Deal</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#000000' }}>Exact Delta ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>Items Included</td>
                  <td style={{ padding: '8px 12px', color: '#475569' }}>{cartSummary.totalItemCount} Items</td>
                  <td style={{ padding: '8px 12px', fontWeight: '700', color: '#000000' }}>
                    {alphaEvolve.attachedItemName ? `${cartSummary.totalItemCount + (isOfferApplied ? 0 : 1)} Items (Includes ${alphaEvolve.attachedItemName})` : `${cartSummary.totalItemCount} Items`}
                  </td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#B45309' }}>
                    {alphaEvolve.attachedItemName ? "+1 Side Item Attached" : "Same Items"}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>Total Food Retail Value</td>
                  <td style={{ padding: '8px 12px' }}>${cartSummary.retailSubtotal.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>${alphaEvolve.totalRetailValue.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>+${(alphaEvolve.totalRetailValue - cartSummary.retailSubtotal).toFixed(2)} Food Value</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>Customer Final Out-of-Pocket</td>
                  <td style={{ padding: '8px 12px' }}>${legacy.customerFinalPrice.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#1E40AF' }}>${alphaEvolve.customerFinalPrice.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#1E40AF' }}>+${comparison.priceDeltaDollars.toFixed(2)} Out-of-Pocket</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>Customer Total Value Saved</td>
                  <td style={{ padding: '8px 12px' }}>${legacy.customerSavings.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>${alphaEvolve.customerSavings.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>+${comparison.savingsDeltaDollars.toFixed(2)} Value Saved</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '8px 12px', fontWeight: '700' }}>Total Food COGS</td>
                  <td style={{ padding: '8px 12px' }}>${cartSummary.totalCogs.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px' }}>${alphaEvolve.effectiveCogs.toFixed(2)}</td>
                  <td style={{ padding: '8px 12px' }}>+${(alphaEvolve.effectiveCogs - cartSummary.totalCogs).toFixed(2)} COGS</td>
                </tr>
                <tr style={{ background: '#ECFDF5', fontWeight: '900' }}>
                  <td style={{ padding: '10px 12px', color: '#065F46' }}>Store Net Profit ($)</td>
                  <td style={{ padding: '10px 12px', color: '#1E293B' }}>${legacy.storeNetMarginDollars.toFixed(2)}</td>
                  <td style={{ padding: '10px 12px', color: '#059669' }}>${alphaEvolve.storeNetMarginDollars.toFixed(2)}</td>
                  <td style={{ padding: '10px 12px', color: '#059669', fontSize: '14px' }}>+${comparison.marginDeltaDollars.toFixed(2)} Net Profit!</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
