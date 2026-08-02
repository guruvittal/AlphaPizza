import React from "react";
import { Calculator } from "lucide-react";

export function MathSemantics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header */}
      <div className="card-panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator style={{ width: '22px', height: '22px', color: '#059669' }} />
            <span className="panel-title" style={{ fontSize: '16px' }}>Calculation Semantics & Profit Math Specification</span>
          </div>
          <span className="pill-badge pill-badge-green">Mathematical Proof</span>
        </div>

        <p style={{ fontSize: '12px', color: '#475569', fontWeight: '600' }}>
          Exact step-by-step mathematical definitions used by both the Legacy Coupon Engine and the AI Multi-Objective Solver.
        </p>
      </div>

      {/* Formula 1: Customer Price Math */}
      <div className="card-panel">
        <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>
          1. Customer Out-of-Pocket Final Price Formula
        </div>
        <div style={{ background: '#F8FAFC', border: '2px solid #CBD5E1', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '800', color: '#000000' }}>
          Customer Price = (Retail Subtotal + Attached Item Price) - Discount Applied
        </div>
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.6' }}>
          • <strong>Retail Subtotal:</strong> Sum of standard catalog retail list prices for items added by the customer.<br />
          • <strong>Attached Item Price:</strong> Promoted price point for attached side/dessert (e.g. $1.50 for Jalapeño Bites, Reg. $8.99).<br />
          • <strong>Discount Applied:</strong> Price reduction granted by the promo rule.
        </div>
      </div>

      {/* Formula 2: Total Value Saved Math */}
      <div className="card-panel">
        <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>
          2. Customer Total Value Saved Formula
        </div>
        <div style={{ background: '#F8FAFC', border: '2px solid #CBD5E1', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '800', color: '#059669' }}>
          Total Value Saved = Total Food Retail Value - Customer Out-of-Pocket Price
        </div>
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.6' }}>
          • <strong>Total Food Retail Value:</strong> Combined regular list prices of all pizzas AND attached side/dessert items received by the customer.<br />
          • <strong>Perceived Discount %:</strong> (Total Value Saved / Total Food Retail Value) × 100%.
        </div>
      </div>

      {/* Formula 3: Store Net Profit Math */}
      <div className="card-panel">
        <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>
          3. Store Net Profit Formula
        </div>
        <div style={{ background: '#ECFDF5', border: '2px solid #059669', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '800', color: '#065F46' }}>
          Store Net Profit ($) = Customer Out-of-Pocket Price - Total Food Recipe COGS
        </div>
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.6' }}>
          • <strong>Total Food COGS:</strong> Sum of recipe raw ingredient costs for pizzas + recipe COGS for attached surplus side/dessert ($1.10 for Jalapeño Bites).<br />
          • <strong>Net Profit Margin %:</strong> (Store Net Profit / Customer Out-of-Pocket Price) × 100%.
        </div>
      </div>

      {/* Formula 4: Multi-Objective Fitness Function F(H) */}
      <div className="card-panel">
        <div style={{ fontSize: '14px', fontWeight: '900', color: '#000000', marginBottom: '8px' }}>
          4. AI Engine Multi-Objective Fitness Function F(H)
        </div>
        <div style={{ background: '#FEF3C7', border: '2px solid #F59E0B', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '800', color: '#B45309' }}>
          F(H) = w1 × SavingsScore + w2 * NetProfitScore + w3 * SurplusAttachScore - Penalty
        </div>
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.6' }}>
          • <strong>w1 (Customer Savings Weight):</strong> 0.35 (Target: Maximize perceived customer value & meal fit).<br />
          • <strong>w2 (Store Margin Weight):</strong> 0.45 (Target: Protect and grow net profit dollars per checkout order).<br />
          • <strong>w3 (Surplus Inventory Weight):</strong> 0.20 (Target: Award bonus score when rule moves HIGH_SURPLUS store inventory).<br />
          • <strong>Penalty:</strong> Deduction applied for code execution latency over 15ms or negative cart margins.
        </div>
      </div>

    </div>
  );
}
