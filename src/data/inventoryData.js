export const STORES_NETWORK = [
  {
    storeId: "STORE_101",
    storeName: "Store #101 — Midtown Manhattan",
    region: "Urban High-Volume",
    primarySurplusSku: "SIDE_PAPA_BITES",
    primarySurplusName: "Jalapeño Bites",
    inventory: {
      SIDE_PAPA_BITES: { sku: "SIDE_PAPA_BITES", name: "Jalapeño Bites (8 pcs)", category: "side", stockUnits: 142, status: "HIGH_SURPLUS", unitCogs: 1.10 },
      SIDE_GARLIC_KNOTS: { sku: "SIDE_GARLIC_KNOTS", name: "Garlic Knots (8 pcs)", category: "side", stockUnits: 25, status: "NORMAL", unitCogs: 0.90 },
      SIDE_CHEESESTICKS: { sku: "SIDE_CHEESESTICKS", name: "Cheesesticks (10 inch)", category: "side", stockUnits: 30, status: "NORMAL", unitCogs: 1.30 },
      DESSERT_CINNAMON_PULLAPARTS: { sku: "DESSERT_CINNAMON_PULLAPARTS", name: "Cinnamon Pull-Aparts", category: "dessert", stockUnits: 18, status: "NORMAL", unitCogs: 1.20 },
      BEV_PEPSI: { sku: "BEV_PEPSI", name: "2-Liter Pepsi", category: "beverage", stockUnits: 40, status: "NORMAL", unitCogs: 0.80 }
    }
  },
  {
    storeId: "STORE_102",
    storeName: "Store #102 — Downtown Financial",
    region: "Commercial Business District",
    primarySurplusSku: "DESSERT_CINNAMON_PULLAPARTS",
    primarySurplusName: "Cinnamon Pull-Aparts",
    inventory: {
      SIDE_PAPA_BITES: { sku: "SIDE_PAPA_BITES", name: "Jalapeño Bites (8 pcs)", category: "side", stockUnits: 15, status: "NORMAL", unitCogs: 1.10 },
      SIDE_GARLIC_KNOTS: { sku: "SIDE_GARLIC_KNOTS", name: "Garlic Knots (8 pcs)", category: "side", stockUnits: 20, status: "NORMAL", unitCogs: 0.90 },
      SIDE_CHEESESTICKS: { sku: "SIDE_CHEESESTICKS", name: "Cheesesticks (10 inch)", category: "side", stockUnits: 12, status: "NORMAL", unitCogs: 1.30 },
      DESSERT_CINNAMON_PULLAPARTS: { sku: "DESSERT_CINNAMON_PULLAPARTS", name: "Cinnamon Pull-Aparts", category: "dessert", stockUnits: 118, status: "HIGH_SURPLUS", unitCogs: 1.20 },
      BEV_PEPSI: { sku: "BEV_PEPSI", name: "2-Liter Pepsi", category: "beverage", stockUnits: 35, status: "NORMAL", unitCogs: 0.80 }
    }
  },
  {
    storeId: "STORE_103",
    storeName: "Store #103 — Westside Suburbs",
    region: "Residential Family Zone",
    primarySurplusSku: "SIDE_GARLIC_KNOTS",
    primarySurplusName: "Garlic Knots",
    inventory: {
      SIDE_PAPA_BITES: { sku: "SIDE_PAPA_BITES", name: "Jalapeño Bites (8 pcs)", category: "side", stockUnits: 18, status: "NORMAL", unitCogs: 1.10 },
      SIDE_GARLIC_KNOTS: { sku: "SIDE_GARLIC_KNOTS", name: "Garlic Knots (8 pcs)", category: "side", stockUnits: 135, status: "HIGH_SURPLUS", unitCogs: 0.90 },
      SIDE_CHEESESTICKS: { sku: "SIDE_CHEESESTICKS", name: "Cheesesticks (10 inch)", category: "side", stockUnits: 22, status: "NORMAL", unitCogs: 1.30 },
      DESSERT_CINNAMON_PULLAPARTS: { sku: "DESSERT_CINNAMON_PULLAPARTS", name: "Cinnamon Pull-Aparts", category: "dessert", stockUnits: 15, status: "NORMAL", unitCogs: 1.20 },
      BEV_PEPSI: { sku: "BEV_PEPSI", name: "2-Liter Pepsi", category: "beverage", stockUnits: 50, status: "NORMAL", unitCogs: 0.80 }
    }
  },
  {
    storeId: "STORE_104",
    storeName: "Store #104 — Metro Airport Hub",
    region: "Transit & Travel Hub",
    primarySurplusSku: "BEV_PEPSI",
    primarySurplusName: "2-Liter Pepsi",
    inventory: {
      SIDE_PAPA_BITES: { sku: "SIDE_PAPA_BITES", name: "Jalapeño Bites (8 pcs)", category: "side", stockUnits: 10, status: "NORMAL", unitCogs: 1.10 },
      SIDE_GARLIC_KNOTS: { sku: "SIDE_GARLIC_KNOTS", name: "Garlic Knots (8 pcs)", category: "side", stockUnits: 14, status: "NORMAL", unitCogs: 0.90 },
      SIDE_CHEESESTICKS: { sku: "SIDE_CHEESESTICKS", name: "Cheesesticks (10 inch)", category: "side", stockUnits: 18, status: "NORMAL", unitCogs: 1.30 },
      DESSERT_CINNAMON_PULLAPARTS: { sku: "DESSERT_CINNAMON_PULLAPARTS", name: "Cinnamon Pull-Aparts", category: "dessert", stockUnits: 12, status: "NORMAL", unitCogs: 1.20 },
      BEV_PEPSI: { sku: "BEV_PEPSI", name: "2-Liter Pepsi", category: "beverage", stockUnits: 210, status: "HIGH_SURPLUS", unitCogs: 0.80 }
    }
  },
  {
    storeId: "STORE_105",
    storeName: "Store #105 — University Campus",
    region: "Student & Night-Owl District",
    primarySurplusSku: "SIDE_CHEESESTICKS",
    primarySurplusName: "Cheesesticks",
    inventory: {
      SIDE_PAPA_BITES: { sku: "SIDE_PAPA_BITES", name: "Jalapeño Bites (8 pcs)", category: "side", stockUnits: 12, status: "NORMAL", unitCogs: 1.10 },
      SIDE_GARLIC_KNOTS: { sku: "SIDE_GARLIC_KNOTS", name: "Garlic Knots (8 pcs)", category: "side", stockUnits: 16, status: "NORMAL", unitCogs: 0.90 },
      SIDE_CHEESESTICKS: { sku: "SIDE_CHEESESTICKS", name: "Cheesesticks (10 inch)", category: "side", stockUnits: 165, status: "HIGH_SURPLUS", unitCogs: 1.30 },
      DESSERT_CINNAMON_PULLAPARTS: { sku: "DESSERT_CINNAMON_PULLAPARTS", name: "Cinnamon Pull-Aparts", category: "dessert", stockUnits: 20, status: "NORMAL", unitCogs: 1.20 },
      BEV_PEPSI: { sku: "BEV_PEPSI", name: "2-Liter Pepsi", category: "beverage", stockUnits: 45, status: "NORMAL", unitCogs: 0.80 }
    }
  }
];

export const INITIAL_INVENTORY = STORES_NETWORK[0].inventory;

export const STATUS_CONFIG = {
  NORMAL: {
    label: "Normal Stock",
    color: "#059669",
    bgColor: "#D1FAE5",
    borderColor: "#34D399"
  },
  HIGH_SURPLUS: {
    label: "High Surplus Stock",
    color: "#B45309",
    bgColor: "#FEF3C7",
    borderColor: "#F59E0B"
  }
};
