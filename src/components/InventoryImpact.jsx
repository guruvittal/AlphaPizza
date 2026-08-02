import React from "react";
import { PackageCheck, HelpCircle } from "lucide-react";

export function InventoryImpact({ storeInventory, onToggleStatus, onResetInventory }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header & Business Answer */}
      <div className="card-panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PackageCheck style={{ width: '22px', height: '22px', color: '#B45309' }} />
            <span className="panel-title" style={{ fontSize: '16px' }}>Store Inventory Matrix — Does Inventory Really Matter?</span>
          </div>
          <span className="pill-badge pill-badge-gold">Operational Optimization</span>
        </div>

        <div style={{ background: '#FEF3C7', border: '2px solid #FDE68A', padding: '16px', borderRadius: '12px', fontSize: '13px', color: '#78350F', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontWeight: '900', fontSize: '14px', color: '#92400E', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HelpCircle style={{ width: '18px', height: '18px' }} />
            <span>YES! Here is why store-level surplus inventory matters for store profitability:</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginTop: '4px' }}>
            <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #FCD34D' }}>
              <div style={{ fontWeight: '800', color: '#000000', marginBottom: '2px' }}>1. Food Spoilage Prevention</div>
              <div style={{ color: '#475569', fontSize: '12px' }}>
                Perishable items (Bites, Garlic Knots) spoil if unsold. Spoiled items represent a <strong>100% cash loss ($1.10 COGS thrown away)</strong>.
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #FCD34D' }}>
              <div style={{ fontWeight: '800', color: '#000000', marginBottom: '2px' }}>2. Turning Potential Loss into Cash</div>
              <div style={{ color: '#475569', fontSize: '12px' }}>
                Attaching a surplus $8.99 side for $1.50 (COGS $1.10) generates <strong>+$0.40 net profit</strong> and clears inventory before expiration!
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #FCD34D' }}>
              <div style={{ fontWeight: '800', color: '#000000', marginBottom: '2px' }}>3. Customer Delight & Value</div>
              <div style={{ color: '#475569', fontSize: '12px' }}>
                The customer receives an 83% discount on an overstocked side item, boosting meal satisfaction and brand loyalty.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Inventory Status Matrix */}
      <div className="card-panel">
        <div className="panel-header">
          <span className="panel-title">Live Store Stock Status Matrix</span>
          <button
            onClick={onResetInventory}
            style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}
          >
            Reset All Stock
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {Object.values(storeInventory).map((item) => {
            const isSurplus = item.status === "HIGH_SURPLUS";

            return (
              <div
                key={item.sku}
                style={{
                  background: isSurplus ? '#FEF3C7' : '#F8FAFC',
                  border: isSurplus ? '2px solid #F59E0B' : '1px solid #CBD5E1',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>{item.name}</span>
                    <span className={`pill-badge ${isSurplus ? 'pill-badge-gold' : 'pill-badge-green'}`}>
                      {isSurplus ? '🔥 Overstocked' : 'Normal Stock'}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>
                    Category: {item.category} • Unit COGS: ${item.unitCogs.toFixed(2)}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#64748B', display: 'block', textTransform: 'uppercase', fontWeight: '800' }}>Current Stock</span>
                    <span style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>{item.stockUnits} units</span>
                  </div>

                  <button
                    onClick={() => onToggleStatus(item.sku, isSurplus ? "NORMAL" : "HIGH_SURPLUS")}
                    className={`surplus-btn ${isSurplus ? 'active' : 'inactive'}`}
                  >
                    {isSurplus ? 'Surplus: ON' : 'Set Surplus'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
