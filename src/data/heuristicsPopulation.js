export const INITIAL_POPULATION = [
  {
    id: "AE_GEN00",
    generation: 0,
    name: "Baseline Static 20% Discount",
    code: `def evaluate_deal(cart, inventory):\n    # Gen 0 Seed: Standard 20% Off\n    subtotal = cart.retail_subtotal\n    return {'discount': subtotal * 0.20, 'attached_sku': None}`,
    fitnessScore: 48.2,
    customerSavingsPct: 20.0,
    storeNetMarginDollars: 26.98,
    inventoryAttachScore: 0,
    latencyMs: 1.1,
    status: "Baseline Seed"
  },
  {
    id: "AE_GEN10",
    generation: 10,
    name: "Volume Tiered $10 Off",
    code: `def evaluate_deal(cart, inventory):\n    # Gen 10: Multi-Pizza Volume Tiering\n    if cart.pizza_count >= 2:\n        return {'discount': 10.00, 'attached_sku': None}\n    return {'discount': cart.retail_subtotal * 0.15, 'attached_sku': None}`,
    fitnessScore: 64.5,
    customerSavingsPct: 22.2,
    storeNetMarginDollars: 25.98,
    inventoryAttachScore: 0,
    latencyMs: 2.4,
    status: "Evolved Tier"
  },
  {
    id: "AE_GEN25",
    generation: 25,
    name: "Surplus Side Cross-Sell ($1.99 Attach)",
    code: `def evaluate_deal(cart, inventory):\n    # Gen 25: Inventory-Aware Side Cross-Sell\n    if inventory.get('SIDE_PAPA_BITES') == 'HIGH_SURPLUS' and cart.pizza_count >= 1:\n        return {'discount': cart.retail_subtotal * 0.20, 'attached_sku': 'SIDE_PAPA_BITES', 'attached_price': 1.99}\n    return {'discount': cart.retail_subtotal * 0.20, 'attached_sku': None}`,
    fitnessScore: 81.0,
    customerSavingsPct: 30.5,
    storeNetMarginDollars: 28.18,
    inventoryAttachScore: 80,
    latencyMs: 3.1,
    status: "Surplus Attacher"
  },
  {
    id: "AE_GEN42",
    generation: 42,
    name: "Family Feast Pareto Master (Current Champion)",
    code: `def evaluate_deal(cart, inventory):\n    # Gen 42: Pareto Optimal Multi-Objective Champion\n    bites_surplus = (inventory.get('SIDE_PAPA_BITES') == 'HIGH_SURPLUS')\n    has_no_side = not any(item.category == 'side' for item in cart.items)\n    \n    if bites_surplus and cart.pizza_count >= 2 and has_no_side:\n        return {\n            'discount_pct': 0.20,\n            'attached_sku': 'SIDE_PAPA_BITES',\n            'attached_price': 1.50,\n            'reason': 'High Surplus Attachment + Pizza Volume'\n        }\n    return {'discount_pct': 0.20, 'attached_sku': None}`,
    fitnessScore: 94.8,
    customerSavingsPct: 33.1,
    storeNetMarginDollars: 29.18,
    inventoryAttachScore: 100,
    latencyMs: 3.8,
    status: "Pareto Champion"
  }
];
