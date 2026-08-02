import React from "react";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ZAxis, Cell } from "recharts";
import { BarChart3 } from "lucide-react";

export function ParetoChart({ heuristicsPopulation, activeHeuristic }) {
  const chartData = heuristicsPopulation.map((heur) => ({
    x: heur.customerSavingsAvg || 12.5,
    y: heur.netMarginAvg || 26.5,
    z: heur.fitness || 80,
    name: heur.name,
    generation: heur.generation,
    id: heur.id,
    author: heur.authorAgent || "Gemini Flash"
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '12px', padding: '12px', color: '#FFFFFF', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p style={{ fontWeight: '900', color: '#F59E0B' }}>Gen {data.generation}: {data.name}</p>
          <p style={{ color: '#94A3B8' }}>Author: {data.author}</p>
          <div style={{ paddingTop: '6px', borderTop: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <p style={{ color: '#10B981', fontWeight: '800' }}>Store Net Margin: ${data.y.toFixed(2)}</p>
            <p style={{ color: '#38BDF8', fontWeight: '800' }}>Customer Savings: ${data.x.toFixed(2)}</p>
            <p style={{ color: '#F59E0B', fontWeight: '900' }}>Fitness Score F(H): {data.z}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card-panel">
      <div className="panel-header">
        <div>
          <h3 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 style={{ width: '20px', height: '20px', color: '#F59E0B' }} />
            <span>Multi-Objective Pareto Frontier</span>
          </h3>
          <p style={{ fontSize: '12px', color: '#475569', fontWeight: '600', marginTop: '2px' }}>
            2D evaluation space mapping Customer Savings ($) vs Store Net Margin ($). Top right curve represents the Pareto Frontier.
          </p>
        </div>

        <span className="pill-badge pill-badge-gold">Multi-Objective Solver</span>
      </div>

      <div style={{ height: '280px', width: '100%', paddingTop: '10px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
            <XAxis
              type="number"
              dataKey="x"
              name="Customer Savings ($)"
              unit="$"
              stroke="#64748B"
              fontSize={11}
              domain={[6, 18]}
              label={{ value: "Customer Savings ($)", position: "insideBottom", offset: -10, fill: "#64748B", fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Store Net Margin ($)"
              unit="$"
              stroke="#64748B"
              fontSize={11}
              domain={[8, 28]}
              label={{ value: "Store Net Margin ($)", angle: -90, position: "insideLeft", offset: 0, fill: "#64748B", fontSize: 11 }}
            />
            <ZAxis type="number" dataKey="z" range={[100, 400]} name="Fitness" />
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="Heuristic Candidates" data={chartData}>
              {chartData.map((entry, index) => {
                const isActive = entry.id === activeHeuristic?.id;
                const isPareto = entry.generation >= 25;
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={isActive ? "#F59E0B" : isPareto ? "#10B981" : "#DC2626"}
                    stroke={isActive ? "#000000" : "none"}
                    strokeWidth={isActive ? 2 : 0}
                  />
                );
              })}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center', fontSize: '11px', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ color: '#DC2626', fontWeight: '800' }}>● Gen 0-10 Baseline</div>
        <div style={{ color: '#10B981', fontWeight: '800' }}>● Gen 25+ Surplus Aware</div>
        <div style={{ color: '#D97706', fontWeight: '900' }}>● Active Heuristic</div>
      </div>
    </div>
  );
}
