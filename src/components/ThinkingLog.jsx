import React from "react";
import { Terminal, Cpu, CheckCircle2 } from "lucide-react";

export function ThinkingLog({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <div style={{ background: '#0F172A', color: '#94A3B8', padding: '16px', borderRadius: '12px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
        💬 Click "Evolve Deals Live" to watch real-time Gemini ADK agent thinking logs and code mutation traces.
      </div>
    );
  }

  return (
    <div style={{ background: '#0F172A', color: '#F8FAFC', padding: '16px', borderRadius: '12px', fontSize: '11px', fontFamily: 'var(--font-mono)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontWeight: '900', borderBottom: '1px solid #1E293B', paddingBottom: '8px' }}>
        <Terminal style={{ width: '16px', height: '16px' }} />
        <span>Gemini ADK Agent Thinking & Mutation Trace</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '200px', overflowY: 'auto' }}>
        {logs.map((log, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: '#64748B' }}>[{log.timestamp}]</span>
            <span style={{ color: '#F59E0B', fontWeight: '800' }}>[{log.agent}]:</span>
            <span style={{ color: '#E2E8F0' }}>{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
