import React from "react";
import { Sparkles, ShoppingBag, Zap, Calculator, SlidersHorizontal, Tag, Database, PackageCheck, BookOpen, PlayCircle } from "lucide-react";

export function Header({
  activeTab,
  setActiveTab,
  onEvolveLive,
  isEvolving,
  showTechDetails,
  setShowTechDetails
}) {
  return (
    <header className="app-header">
      <div className="header-content">
        
        {/* Brand & Logo */}
        <div className="brand-section">
          <div className="brand-logo-icon">🍕</div>
          <div>
            <div className="brand-title">
              <span>Alpha Pizza</span>
              <span className="brand-highlight">AI Generated</span>
              <span className="pill-badge pill-badge-red">Smart Deal Finder</span>
            </div>
            <p className="brand-subtitle">
              Comparing static coupon rules vs. dynamic AI-evolved deals
            </p>
          </div>
        </div>

        {/* Complete Data Tabs Navigation */}
        <div className="nav-tabs" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`nav-tab-btn ${activeTab === "simulator" ? "active" : ""}`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>1. Deal Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("walkthrough")}
            className={`nav-tab-btn ${activeTab === "walkthrough" ? "active" : ""}`}
          >
            <PlayCircle className="w-4 h-4" />
            <span>2. Guided Story</span>
          </button>

          <button
            onClick={() => setActiveTab("offers")}
            className={`nav-tab-btn ${activeTab === "offers" ? "active" : ""}`}
          >
            <Tag className="w-4 h-4" />
            <span>3. Offers & Bundles</span>
          </button>

          <button
            onClick={() => setActiveTab("menu_data")}
            className={`nav-tab-btn ${activeTab === "menu_data" ? "active" : ""}`}
          >
            <Database className="w-4 h-4" />
            <span>4. Menu & COGS</span>
          </button>

          <button
            onClick={() => setActiveTab("inventory")}
            className={`nav-tab-btn ${activeTab === "inventory" ? "active" : ""}`}
          >
            <PackageCheck className="w-4 h-4" />
            <span>5. Store Inventory</span>
          </button>

          <button
            onClick={() => setActiveTab("math")}
            className={`nav-tab-btn ${activeTab === "math" ? "active" : ""}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>6. Math Semantics</span>
          </button>

          <button
            onClick={() => setActiveTab("business")}
            className={`nav-tab-btn ${activeTab === "business" ? "active" : ""}`}
          >
            <Calculator className="w-4 h-4" />
            <span>7. Business ROI</span>
          </button>
        </div>

        {/* Actions */}
        <div className="header-actions">
          <button
            onClick={() => setShowTechDetails(!showTechDetails)}
            className={`btn-tech-mode ${showTechDetails ? "active" : "inactive"}`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{showTechDetails ? "Tech Mode: ON" : "Tech Mode"}</span>
          </button>

          <button
            onClick={onEvolveLive}
            disabled={isEvolving}
            className="btn-evolve"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEvolving ? "Evolving..." : "Evolve Deals Live"}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
