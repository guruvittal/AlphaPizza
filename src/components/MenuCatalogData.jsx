import React, { useState } from "react";
import { MENU_ITEMS } from "../data/menuCatalog";
import { Database } from "lucide-react";

export function MenuCatalogData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header Panel */}
      <div className="card-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Database style={{ width: '22px', height: '22px', color: '#C8102E' }} />
              <span>Menu Catalog & Recipe COGS Master Data</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', fontWeight: '600', marginTop: '4px' }}>
              Complete item list with Retail Price, Estimated Recipe Food COGS, Gross Profit Dollars, and Margin %.
            </div>
          </div>

          <div style={{ display: 'flex', items: 'center', gap: '10px' }}>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '2px solid #CBD5E1', fontSize: '12px', fontWeight: '700', outline: 'none', width: '200px' }}
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '2px solid #CBD5E1', fontSize: '12px', fontWeight: '700', outline: 'none', background: '#FFFFFF', cursor: 'pointer' }}
            >
              <option value="all">All Categories</option>
              <option value="pizza">Pizzas 🍕</option>
              <option value="side">Sides 🧆</option>
              <option value="dessert">Desserts 🍪</option>
              <option value="beverage">Beverages 🥤</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Data Table */}
      <div className="card-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', fontFamily: 'var(--font-sans)' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                <th style={{ padding: '12px 16px', fontWeight: '900' }}>Item Name</th>
                <th style={{ padding: '12px 16px', fontWeight: '900' }}>Category</th>
                <th style={{ padding: '12px 16px', fontWeight: '900' }}>Retail List Price</th>
                <th style={{ padding: '12px 16px', fontWeight: '900' }}>Recipe COGS</th>
                <th style={{ padding: '12px 16px', fontWeight: '900', color: '#059669' }}>Gross Profit ($)</th>
                <th style={{ padding: '12px 16px', fontWeight: '900', color: '#059669' }}>Gross Margin %</th>
                <th style={{ padding: '12px 16px', fontWeight: '900' }}>SKU Tag</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const grossProfit = item.retailPrice - item.cogs;
                const marginPct = ((grossProfit / item.retailPrice) * 100).toFixed(1);

                return (
                  <tr key={item.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '800', color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '18px' }}>{item.icon}</span>
                      <span>{item.name}</span>
                    </td>
                    <td style={{ padding: '12px 16px', textTransform: 'capitalize', fontWeight: '700', color: '#475569' }}>
                      {item.category}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: '800', color: '#000000' }}>
                      ${item.retailPrice.toFixed(2)}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: '700', color: '#DC2626' }}>
                      ${item.cogs.toFixed(2)}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: '800', color: '#059669' }}>
                      ${grossProfit.toFixed(2)}
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: '900', color: '#059669' }}>
                      {marginPct}%
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748B' }}>
                      {item.sku || item.id}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
