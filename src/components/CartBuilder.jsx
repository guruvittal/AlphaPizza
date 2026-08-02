import React from "react";
import { MENU_ITEMS, CART_ARCHETYPES } from "../data/menuCatalog";
import { Plus, Minus, Trash2, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";

export function CartBuilder({
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onLoadPreset,
  cartTotals,
  comparisonData,
  surplusItemSku,
  onToggleSurplus,
  isOfferApplied,
  onAcceptDeal,
  onRemoveDeal
}) {
  const alphaEvolve = comparisonData?.alphaEvolve;
  const legacy = comparisonData?.legacy;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Quick Presets */}
      <div className="card-panel">
        <div className="panel-header">
          <span className="panel-title">Step 1: Build Your Cart (Pick Preset or Add Items Below)</span>
        </div>

        <div className="preset-grid">
          {CART_ARCHETYPES.slice(0, 3).map((preset) => (
            <button
              key={preset.id}
              onClick={() => onLoadPreset(preset)}
              className="preset-card"
            >
              <div className="preset-icon">{preset.icon}</div>
              <div className="preset-name">{preset.title}</div>
              <div className="preset-desc">{preset.subtitle}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Active Dynamic Cart Construction */}
      <div className="card-panel">
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag style={{ width: '20px', height: '20px', color: '#C8102E' }} />
            <span className="panel-title">Step 2: Live Customer Basket ({cartTotals.totalItemCount} Items)</span>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={onClearCart}
              style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Trash2 style={{ width: '14px', height: '14px' }} />
              Clear All
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px', color: '#475569', fontSize: '13px', fontWeight: '700' }}>
            Basket is empty. Add menu items below or select a preset above.
          </div>
        ) : (
          <div className="cart-items-list">
            {cartTotals.itemDetails.map((item) => (
              <div key={item.id} className="cart-item-row" style={{ background: item.isAttachedDealItem ? '#ECFDF5' : '#F8FAFC', border: item.isAttachedDealItem ? '2px solid #059669' : '1px solid #CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  <div>
                    <div className="cart-item-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{item.name}</span>
                      {item.isAttachedDealItem && (
                        <span className="pill-badge pill-badge-green" style={{ fontSize: '9px' }}>
                          ⚡ AI Generated Deal Item ($1.50)
                        </span>
                      )}
                    </div>
                    <div className="cart-item-price">${item.retailPrice.toFixed(2)} each</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="qty-controls">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="qty-btn">
                      <Minus style={{ width: '12px', height: '12px' }} />
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="qty-btn">
                      <Plus style={{ width: '12px', height: '12px' }} />
                    </button>
                  </div>

                  <span style={{ fontSize: '14px', fontWeight: '900', color: '#000000', width: '60px', textAlign: 'right' }}>
                    ${item.lineRetail.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Cart Financial Subtotal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', marginTop: '12px', borderTop: '2px solid #E2E8F0' }}>
          <span style={{ fontSize: '12px', color: '#475569', fontWeight: '700' }}>Cart Retail Subtotal (Standard Price)</span>
          <span style={{ fontSize: '18px', fontWeight: '900', color: '#000000' }}>${cartTotals.retailSubtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* 3. Surplus Inventory Simulator Toggle */}
      <div className="surplus-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '28px' }}>📦</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#92400E' }}>
              Simulate Store Inventory Surplus
            </div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#78350F' }}>
              Toggle overstocked <strong>Jalapeño Papa Bites</strong> to see AI Generated Deals in action.
            </div>
          </div>
        </div>

        <button
          onClick={onToggleSurplus}
          className={`surplus-btn ${surplusItemSku === "HIGH_SURPLUS" ? "active" : "inactive"}`}
        >
          {surplusItemSku === "HIGH_SURPLUS" ? "🔥 Surplus: ON" : "Normal Stock"}
        </button>
      </div>

      {/* 4. Menu Catalog Items */}
      <div className="card-panel">
        <div className="panel-header">
          <span className="panel-title">Add / Customise Menu Items</span>
        </div>

        <div className="menu-grid">
          {MENU_ITEMS.map((item) => {
            const inCart = cartItems.find((ci) => ci.itemId === item.id);
            return (
              <div key={item.id} className="menu-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#C8102E', fontWeight: '800' }}>${item.retailPrice.toFixed(2)}</div>
                  </div>
                </div>

                <button
                  onClick={() => onUpdateQuantity(item.id, (inCart?.quantity || 0) + 1)}
                  className="add-btn"
                >
                  {inCart ? `+${inCart.quantity}` : "+ Add"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
