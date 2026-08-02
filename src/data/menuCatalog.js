export const MENU_ITEMS = [
  // Pizzas
  {
    id: "PIZZA_EPIC_STUFFED",
    name: "Epic Stuffed Crust Pizza",
    category: "pizza",
    retailPrice: 22.99,
    cogs: 5.20,
    icon: "🍕",
    description: "Cheese-stuffed crust pizza topped with premium pepperoni.",
    sku: "PIZZA_EPIC_STUFFED"
  },
  {
    id: "PIZZA_THE_WORKS",
    name: "The Works - Large Pizza",
    category: "pizza",
    retailPrice: 21.99,
    cogs: 4.80,
    icon: "🍕",
    description: "Pepperoni, Italian sausage, ham, green peppers, mushrooms, onions.",
    sku: "PIZZA_THE_WORKS"
  },
  {
    id: "PIZZA_GARDEN_SPECIAL",
    name: "Garden Special - Large Pizza",
    category: "pizza",
    retailPrice: 19.99,
    cogs: 4.10,
    icon: "🍕",
    description: "Green peppers, onions, mushrooms, black olives, ripe tomatoes.",
    sku: "PIZZA_GARDEN_SPECIAL"
  },
  {
    id: "PIZZA_PAPADIA_ITALIAN",
    name: "Italian Flatbread Papadia",
    category: "pizza",
    retailPrice: 9.99,
    cogs: 2.10,
    icon: "🥪",
    description: "Flatbread sandwich stuffed with salami, pepperoni, and cheese.",
    sku: "PIZZA_PAPADIA_ITALIAN"
  },
  {
    id: "PIZZA_CYO_3_TOPPING",
    name: "Create Your Own 3-Topping Large Pizza",
    category: "pizza",
    retailPrice: 18.99,
    cogs: 3.50,
    icon: "🍕",
    description: "Custom hand-tossed pizza with any 3 chosen toppings.",
    sku: "PIZZA_CYO_3_TOPPING"
  },

  // Sides
  {
    id: "SIDE_PAPA_BITES",
    name: "Jalapeño Bites (8 pcs)",
    category: "side",
    retailPrice: 8.99,
    cogs: 1.10,
    icon: "🧆",
    description: "Fresh dough stuffed with jalapeños and melted cheese.",
    sku: "SIDE_PAPA_BITES"
  },
  {
    id: "SIDE_GARLIC_KNOTS",
    name: "Garlic Knots (8 pcs)",
    category: "side",
    retailPrice: 7.99,
    cogs: 0.90,
    icon: "🥖",
    description: "Fresh dough knots brushed with garlic parmesan sauce.",
    sku: "SIDE_GARLIC_KNOTS"
  },
  {
    id: "SIDE_CHEESESTICKS",
    name: "Cheesesticks (10 inch)",
    category: "side",
    retailPrice: 9.49,
    cogs: 1.30,
    icon: "🧀",
    description: "Baked dough topped with special garlic sauce and melted cheese.",
    sku: "SIDE_CHEESESTICKS"
  },
  {
    id: "SIDE_WINGS_8PC",
    name: "Buffalo Wings (8 pcs)",
    category: "side",
    retailPrice: 11.99,
    cogs: 3.20,
    icon: "🍗",
    description: "Oven-baked chicken wings tossed in spicy buffalo sauce.",
    sku: "SIDE_WINGS_8PC"
  },

  // Desserts
  {
    id: "SIDE_CHOCO_CHIP_COOKIE",
    name: "Double Chocolate Chip Cookie",
    category: "dessert",
    retailPrice: 8.99,
    cogs: 1.40,
    icon: "🍪",
    description: "Warm 8-inch chocolate chip cookie cut into 8 slices.",
    sku: "SIDE_CHOCO_CHIP_COOKIE"
  },
  {
    id: "DESSERT_CINNAMON_PULLAPARTS",
    name: "Cinnamon Pull-Aparts",
    category: "dessert",
    retailPrice: 8.99,
    cogs: 1.20,
    icon: "🥮",
    description: "Bite-sized dough rolls covered in cinnamon and sweet icing.",
    sku: "DESSERT_CINNAMON_PULLAPARTS"
  },

  // Beverages
  {
    id: "BEV_PEPSI",
    name: "2-Liter Pepsi",
    category: "beverage",
    retailPrice: 4.29,
    cogs: 0.80,
    icon: "🥤",
    description: "Chilled 2-liter bottle of Pepsi soft drink.",
    sku: "BEV_PEPSI"
  }
];

export const CART_ARCHETYPES = [
  {
    id: "ARCH_FAMILY",
    title: "Family Pizza Night",
    subtitle: "2 Large Pizzas (High Volume)",
    icon: "👨‍👩‍👧‍👦",
    items: [
      { itemId: "PIZZA_EPIC_STUFFED", quantity: 1 },
      { itemId: "PIZZA_THE_WORKS", quantity: 1 }
    ]
  },
  {
    id: "ARCH_SOLO",
    title: "Solo Lunch / Dinner",
    subtitle: "1 Papadia + 1 Beverage",
    icon: "🧑",
    items: [
      { itemId: "PIZZA_PAPADIA_ITALIAN", quantity: 1 },
      { itemId: "BEV_PEPSI", quantity: 1 }
    ]
  },
  {
    id: "ARCH_GAMEDAY",
    title: "Game Day Party",
    subtitle: "3 Pizzas + Wings + Cheesesticks",
    icon: "🏈",
    items: [
      { itemId: "PIZZA_EPIC_STUFFED", quantity: 1 },
      { itemId: "PIZZA_THE_WORKS", quantity: 1 },
      { itemId: "PIZZA_GARDEN_SPECIAL", quantity: 1 },
      { itemId: "SIDE_WINGS_8PC", quantity: 1 },
      { itemId: "SIDE_CHEESESTICKS", quantity: 1 }
    ]
  },
  {
    id: "ARCH_SIDES_ONLY",
    title: "Side Lovers Feast",
    subtitle: "3 Gourmet Sides (No Pizza)",
    icon: "🧆",
    items: [
      { itemId: "SIDE_PAPA_BITES", quantity: 1 },
      { itemId: "SIDE_GARLIC_KNOTS", quantity: 1 },
      { itemId: "SIDE_CHEESESTICKS", quantity: 1 }
    ]
  }
];
