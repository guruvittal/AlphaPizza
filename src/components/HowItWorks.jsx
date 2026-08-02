import React from "react";
import { Sparkles, Database, Cpu, Zap, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="card-panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles style={{ width: '22px', height: '22px', color: '#D97706' }} />
            <span className="panel-title" style={{ fontSize: '16px' }}>How AI Evolves Deals in Real Time</span>
          </div>
          <span className="pill-badge pill-badge-gold">4-Step AI Pipeline</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '12px' }}>
          <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '14px', borderRadius: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', marginBottom: '4px' }}>
              1. Store Stock Lookup
            </div>
            <p style={{ fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>
              Queries store inventory stock feeds to identify overstocked perishable items.
            </p>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '14px', borderRadius: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', marginBottom: '4px' }}>
              2. Gemini Flash Mutation
            </div>
            <p style={{ fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>
              Mutates Python heuristic code to inject surplus side attachments and threshold triggers.
            </p>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '14px', borderRadius: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', marginBottom: '4px' }}>
              3. Sub-15ms Cloud Sandbox
            </div>
            <p style={{ fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>
              Executes candidate Python code in isolated cloud sandboxes to verify sub-15ms SLA.
            </p>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '14px', borderRadius: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', marginBottom: '4px' }}>
              4. Pareto Multi-Objective Evaluator
            </div>
            <p style={{ fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>
              Ranks candidate strategies using multi-objective fitness F(H) to pick win-win deals.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
