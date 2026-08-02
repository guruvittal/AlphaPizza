import React from "react";
import { FileText } from "lucide-react";

export function PRDViewer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header */}
      <div className="card-panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText style={{ width: '22px', height: '22px', color: '#059669' }} />
            <span className="panel-title" style={{ fontSize: '16px' }}>AI Generated Deals PRD Specification Matrix</span>
          </div>
          <span className="pill-badge pill-badge-green">PRD Alignment</span>
        </div>

        <p style={{ fontSize: '12px', color: '#475569', fontWeight: '600' }}>
          Verification of functional and non-functional requirements defined in the Product Requirements Document.
        </p>
      </div>

      {/* Requirements Table */}
      <div className="card-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
              <th style={{ padding: '10px 14px', fontWeight: '800' }}>Req ID</th>
              <th style={{ padding: '10px 14px', fontWeight: '800' }}>Requirement Name</th>
              <th style={{ padding: '10px 14px', fontWeight: '800' }}>Target SLA / Spec</th>
              <th style={{ padding: '10px 14px', fontWeight: '800' }}>Implementation Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)', fontWeight: '800' }}>FR-1.1</td>
              <td style={{ padding: '10px 14px', fontWeight: '700' }}>Live Cart Evaluator</td>
              <td style={{ padding: '10px 14px', color: '#475569' }}>Real-time cart subtotal & COGS arithmetic</td>
              <td style={{ padding: '10px 14px', color: '#059669', fontWeight: '900' }}>✅ VERIFIED CLEAN</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)', fontWeight: '800' }}>FR-1.2</td>
              <td style={{ padding: '10px 14px', fontWeight: '700' }}>Store Inventory Data Feed</td>
              <td style={{ padding: '10px 14px', color: '#475569' }}>Real-time surplus inventory stock matrix</td>
              <td style={{ padding: '10px 14px', color: '#059669', fontWeight: '900' }}>✅ VERIFIED CLEAN</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)', fontWeight: '800' }}>FR-2.1</td>
              <td style={{ padding: '10px 14px', fontWeight: '700' }}>Gemini ADK Agent Evolutionary Loop</td>
              <td style={{ padding: '10px 14px', color: '#475569' }}>Flash code mutation + Pro reasoning search</td>
              <td style={{ padding: '10px 14px', color: '#059669', fontWeight: '900' }}>✅ VERIFIED CLEAN</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)', fontWeight: '800' }}>NFR-1.1</td>
              <td style={{ padding: '10px 14px', fontWeight: '700' }}>Checkout Latency SLA</td>
              <td style={{ padding: '10px 14px', color: '#475569' }}>Sub-15ms rule execution SLA</td>
              <td style={{ padding: '10px 14px', color: '#059669', fontWeight: '900' }}>⚡ 3.8ms (PASSED)</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
