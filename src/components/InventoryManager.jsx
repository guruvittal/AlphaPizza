import React from "react";
import { STATUS_CONFIG } from "../data/inventoryData";
import { Database, AlertTriangle, RefreshCw, Layers } from "lucide-react";

export function InventoryManager({ storeInventory, onToggleStatus, onResetInventory }) {
  return (
    <div className="glass-panel p-5">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Store Inventory Matrix Context</span>
              <span className="badge badge-gold text-[10px]">MCP Data Store</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Simulates live store-level inventory flags (FR-1.2). AI heuristics adapt instantly to surplus flags!
            </p>
          </div>
        </div>

        <button
          onClick={onResetInventory}
          className="text-xs text-[var(--text-muted)] hover:text-white flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 hover:border-white/20 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Stock
        </button>
      </div>

      {/* Inventory Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {Object.values(storeInventory).map((item) => {
          const config = STATUS_CONFIG[item.status];

          return (
            <div
              key={item.sku}
              className="p-3.5 rounded-xl border transition-all relative overflow-hidden"
              style={{
                backgroundColor: config.bg,
                borderColor: config.border
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <span className="text-[11px] text-[var(--text-muted)]">{item.category} • SKU: {item.sku}</span>
                </div>
                <span
                  className="badge text-[10px] font-extrabold"
                  style={{
                    backgroundColor: config.bg,
                    color: config.color,
                    borderColor: config.border
                  }}
                >
                  {config.badge}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3 text-xs">
                <div>
                  <span className="text-[var(--text-subtle)] block text-[10px]">Stock Units</span>
                  <span className="font-extrabold text-white text-sm">{item.stockUnits} units</span>
                </div>

                {/* Status Toggle Buttons */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => onToggleStatus(item.sku, "NORMAL")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      item.status === "NORMAL" ? "bg-emerald-500 text-black" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => onToggleStatus(item.sku, "HIGH_SURPLUS")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      item.status === "HIGH_SURPLUS" ? "bg-amber-500 text-black shadow-lg" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Surplus 🔥
                  </button>
                </div>
              </div>

              {item.status === "HIGH_SURPLUS" && (
                <div className="mt-2 pt-2 border-t border-amber-500/20 text-[10px] text-amber-300 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 shrink-0 text-amber-400" />
                  <span>High inventory trigger active for AI Generated attacher!</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
