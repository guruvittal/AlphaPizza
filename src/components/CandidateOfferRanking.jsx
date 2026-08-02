import React, { useState } from "react";
import { Sliders, CheckCircle2, XCircle, Sparkles, ChevronUp, ChevronDown, BarChart2, Calculator } from "lucide-react";

export function CandidateOfferRanking({ rankedCandidates, selectedOfferId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCandidateIndex, setSelectedCandidateIndex] = useState(0);

  if (!rankedCandidates || rankedCandidates.length === 0) return null;

  const activeCandidate = rankedCandidates[selectedCandidateIndex] || rankedCandidates[0];

  return (
    <div className="card-panel" style={{ border: '2px solid #059669', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#ECFDF5', border: '1px solid #34D399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BarChart2 style={{ width: '20px', height: '20px', color: '#059669' }} />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Multi-Objective Pareto Candidate Evaluation Matrix</span>
              <span className="pill-badge pill-badge-green" style={{ fontSize: '10px' }}>Live Evaluation</span>
            </div>
            <span style={{ fontSize: '11px', color: '#475569', display: 'block', fontWeight: '600' }}>
              Benchmarking competing heuristic candidates against Customer Savings, Store Margin ($), and Inventory Surplus!
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="pill-badge pill-badge-green">
            {rankedCandidates.length} Candidates Evaluated
          </span>
          {isOpen ? <ChevronUp style={{ width: '18px', height: '18px' }} /> : <ChevronDown style={{ width: '18px', height: '18px' }} />}
        </div>
      </div>

      {isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px', borderTop: '2px solid #E2E8F0' }}>
          
          {/* Main Candidates Comparison Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                  <th style={{ padding: '8px 12px', fontWeight: '800' }}>Rank</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800' }}>Candidate Heuristic Strategy</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800' }}>Cust. Price</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>Store Profit ($)</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#059669' }}>Profit Gain ($)</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800', color: '#B45309' }}>Fitness F(H)</th>
                  <th style={{ padding: '8px 12px', fontWeight: '800' }}>Pareto Status</th>
                </tr>
              </thead>
              <tbody>
                {rankedCandidates.map((cand, idx) => {
                  const isSelected = idx === selectedCandidateIndex;
                  const isWinner = idx === 0;

                  return (
                    <tr
                      key={cand.promoId || idx}
                      onClick={() => setSelectedCandidateIndex(idx)}
                      style={{
                        background: isSelected ? '#ECFDF5' : cand.filteredReason ? '#FEF2F2' : '#FFFFFF',
                        borderBottom: '1px solid #E2E8F0',
                        cursor: 'pointer',
                        fontWeight: isSelected ? '900' : 'normal'
                      }}
                    >
                      <td style={{ padding: '8px 12px' }}>
                        {isWinner ? (
                          <span style={{ color: '#059669', fontWeight: '900' }}>🏆 #1</span>
                        ) : (
                          <span style={{ color: '#64748B' }}>#{idx + 1}</span>
                        )}
                      </td>

                      <td style={{ padding: '8px 12px' }}>
                        <div style={{ fontWeight: '800', color: isWinner ? '#065F46' : '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>{cand.promoName}</span>
                          {cand.surplusCleared && <span style={{ fontSize: '10px', color: '#B45309' }}>🔥 Surplus Cleared</span>}
                        </div>
                        {cand.attachedItemName && (
                          <div style={{ fontSize: '10px', color: '#B45309' }}>
                            Attached Item: {cand.attachedItemName} (${cand.attachedPrice?.toFixed(2)})
                          </div>
                        )}
                      </td>

                      <td style={{ padding: '8px 12px', fontWeight: '800' }}>
                        ${cand.customerFinalPrice?.toFixed(2)}
                      </td>

                      <td style={{ padding: '8px 12px', fontWeight: '900', color: '#059669' }}>
                        ${cand.storeNetMarginDollars?.toFixed(2)}
                      </td>

                      <td style={{ padding: '8px 12px', fontWeight: '900', color: cand.profitGain >= 0 ? '#059669' : '#DC2626' }}>
                        {cand.profitGain >= 0 ? `+$${cand.profitGain?.toFixed(2)}` : `-$${Math.abs(cand.profitGain)?.toFixed(2)}`}
                      </td>

                      <td style={{ padding: '8px 12px', fontWeight: '800', color: '#B45309' }}>
                        {cand.fitnessScore || 85} / 100
                      </td>

                      <td style={{ padding: '8px 12px', fontSize: '11px' }}>
                        {isWinner ? (
                          <span style={{ color: '#059669', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <CheckCircle2 style={{ width: '14px', height: '14px' }} />
                            <span>PARETO WINNER</span>
                          </span>
                        ) : (
                          <span style={{ color: '#DC2626', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <XCircle style={{ width: '14px', height: '14px' }} />
                            <span>{cand.filteredReason || "Lower Profit Gain"}</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Detailed Mathematical Scoring Inspection Panel */}
          {activeCandidate && (
            <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '10px', border: '1px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator style={{ width: '16px', height: '16px', color: '#059669' }} />
                  <span>Evaluation Breakdown for: {activeCandidate.promoName}</span>
                </div>
                <span className="pill-badge pill-badge-gold">
                  Score: {activeCandidate.fitnessScore || 85} / 100
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontSize: '11px' }}>
                <div style={{ background: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <span style={{ color: '#475569', display: 'block', fontWeight: '700' }}>w1: Customer Value Score (35%)</span>
                  <strong style={{ fontSize: '13px', color: '#059669' }}>
                    ${activeCandidate.customerSavings?.toFixed(2)} Saved
                  </strong>
                </div>

                <div style={{ background: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <span style={{ color: '#475569', display: 'block', fontWeight: '700' }}>w2: Store Profit Gain Score (45%)</span>
                  <strong style={{ fontSize: '13px', color: activeCandidate.profitGain >= 0 ? '#059669' : '#DC2626' }}>
                    {activeCandidate.profitGain >= 0 ? `+$${activeCandidate.profitGain?.toFixed(2)} Profit` : `-$${Math.abs(activeCandidate.profitGain)?.toFixed(2)} Loss`}
                  </strong>
                </div>

                <div style={{ background: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <span style={{ color: '#475569', display: 'block', fontWeight: '700' }}>w3: Surplus Inventory Attach Score (20%)</span>
                  <strong style={{ fontSize: '13px', color: activeCandidate.surplusCleared ? '#B45309' : '#64748B' }}>
                    {activeCandidate.surplusCleared ? "🔥 High Surplus Cleared (+Bonus)" : "0 Surplus Cleared"}
                  </strong>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
