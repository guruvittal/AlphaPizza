import React from "react";
import { STORES_NETWORK } from "../data/inventoryData";
import { Store } from "lucide-react";

export function StoreSelector({ activeStoreId, onSelectStore }) {
  const activeStore = STORES_NETWORK.find((s) => s.storeId === activeStoreId) || STORES_NETWORK[0];

  return (
    <div className="card-panel" style={{ border: '2px solid #CBD5E1', background: '#FFFFFF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Store style={{ width: '22px', height: '22px', color: '#C8102E' }} />
          <div>
            <span style={{ fontSize: '14px', fontWeight: '900', color: '#000000' }}>Active Store Network Location</span>
            <span style={{ fontSize: '11px', color: '#475569', display: 'block', fontWeight: '600' }}>
              Switch store locations to see distinct stock matrices and real-time offer ranking!
            </span>
          </div>
        </div>

        <span className="pill-badge pill-badge-gold">
          🔥 Surplus Target: {activeStore.primarySurplusName}
        </span>
      </div>

      {/* 5-Store Switcher Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        {STORES_NETWORK.map((store) => {
          const isSelected = store.storeId === activeStoreId;

          return (
            <button
              key={store.storeId}
              onClick={() => onSelectStore(store.storeId)}
              style={{
                padding: '12px',
                borderRadius: '10px',
                textAlign: 'left',
                border: isSelected ? '2px solid #C8102E' : '1px solid #CBD5E1',
                background: isSelected ? '#FEE2E2' : '#F8FAFC',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '900', color: isSelected ? '#C8102E' : '#000000' }}>
                {store.storeName}
              </div>
              <div style={{ fontSize: '10px', color: '#475569', fontWeight: '700', marginTop: '2px' }}>
                📍 {store.region}
              </div>
              <div style={{ fontSize: '10px', color: '#D97706', fontWeight: '800', marginTop: '4px' }}>
                Overstocked: {store.primarySurplusName}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
