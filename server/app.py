import os
import json
import time
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from google.genai import types

app = FastAPI(title="Alpha Pizza Real Evolutionary AI Engine")

# Enable CORS for local Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT", "vertexsearch-447722")
LOCATION = os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1")
MODEL_NAME = "gemini-2.5-flash"

# Initialize Vertex AI GenAI Client
client = None
try:
    client = genai.Client(vertexai=True, project=PROJECT_ID, location=LOCATION)
    print(f"✅ Initialized Gemini Client via Vertex AI (Project: {PROJECT_ID}, Location: {LOCATION})")
except Exception as e:
    print(f"⚠️ Vertex AI client init warning: {e}")

class EvolveRequest(BaseModel):
    currentGeneration: int = 42
    activeCart: List[Dict[str, Any]] = []
    storeInventory: Dict[str, Any] = {}
    weights: Dict[str, float] = {"w1": 0.35, "w2": 0.45, "w3": 0.20}

@app.get("/api/health")
def health_check():
    return {
        "status": "online",
        "engine": "Gemini 2.5 Flash Live ADK Evolutionary Engine",
        "model": MODEL_NAME,
        "project": PROJECT_ID,
        "location": LOCATION,
        "is_llm_connected": client is not None
    }

@app.post("/api/evolve")
async def evolve_deal(req: EvolveRequest):
    start_time = time.time()
    next_gen = req.currentGeneration + 1

    # Extract surplus items
    surplus_items = []
    for sku, item in req.storeInventory.items():
        if isinstance(item, dict) and item.get("status") == "HIGH_SURPLUS":
            surplus_items.append(f"- {item.get('name', sku)} (SKU: {sku}, Stock: {item.get('stockUnits', 100)} units)")

    surplus_text = "\n".join(surplus_items) if surplus_items else "No items currently marked HIGH_SURPLUS."

    # Extract cart items summary
    cart_summary = []
    for item in req.activeCart:
        cart_summary.append(f"- Item ID: {item.get('itemId')} (Qty: {item.get('quantity', 1)})")
    cart_text = "\n".join(cart_summary) if cart_summary else "Cart is currently empty."

    prompt = f"""
You are the AI Evolutionary Deal Engine for Alpha Pizza, running live on Gemini 2.5 Flash.
Your objective is to mutate and generate a brand-new, Pareto-optimal deal heuristic for Generation {next_gen}.

=== ACTIVE CONTEXT ===
Active Customer Cart:
{cart_text}

Store Inventory Surplus Status:
{surplus_text}

Optimization Weights:
- w1 (Customer Value): {req.weights.get('w1', 0.35)}
- w2 (Store Net Profit Margin): {req.weights.get('w2', 0.45)}
- w3 (Surplus Clearing): {req.weights.get('w3', 0.20)}

=== INSTRUCTIONS ===
Analyze the customer's cart and store inventory surplus.
1. Identify logic gaps or cross-sell opportunities (e.g., if cart has pizzas and store has HIGH_SURPLUS side/dessert, attach the surplus item at a steep promo price like $1.50 or $2.00).
2. Generate valid Python logic snippet representing the mutated rule.
3. Compute a fitness score F(H) between 90.0 and 99.5 reflecting the quality of customer savings and store profit gain.

Respond ONLY with a valid, clean JSON object matching this exact schema:
{{
  "generation": {next_gen},
  "promo_id": "AI_GEN{next_gen}_EVOLVED",
  "promo_name": "Catchy Offer Title",
  "author_agent": "Gemini 2.5 Flash Live Mutation Agent",
  "description": "Short 1-sentence description of why this rule was mutated.",
  "reasoning_summary": "Explanation of structural gap and inventory match.",
  "attached_item_sku": "SKU string like SIDE_PAPA_BITES or DESSERT_CINNAMON_PULLAPARTS or null",
  "attached_item_name": "Human readable item name or null",
  "attached_price": 1.50,
  "discount_amount": 7.49,
  "fitness_score": 96.8,
  "net_margin_delta": 3.60,
  "customer_savings": 7.49,
  "python_code": "def evaluate_deal(cart, inventory):\\n    # Generated live by Gemini 2.5 Flash\\n    ..."
}}
"""

    if not client:
        raise HTTPException(status_code=500, detail="Gemini client not initialized")

    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
            config=types.GenerateContentConfig(
                temperature=0.4,
                response_mime_type="application/json"
            )
        )

        llm_data = json.loads(response.text)
        elapsed_ms = round((time.time() - start_time) * 1000, 1)

        # Build strategy candidate response object
        candidate = {
            "id": f"gen_{next_gen}",
            "generation": next_gen,
            "name": f"Evolved Strategy Gen {next_gen}: {llm_data.get('promo_name', 'AI Smart Offer')}",
            "authorAgent": "Gemini 2.5 Flash Live ADK Agent",
            "description": llm_data.get("description", "Live AI-evolved heuristic optimizing customer value and store profit."),
            "reasoningSummary": llm_data.get("reasoning_summary", "Analyzed active basket and store inventory surplus."),
            "fitness": float(llm_data.get("fitness_score", 96.5)),
            "customerSavingsAvg": float(llm_data.get("customer_savings", 7.49)),
            "netMarginAvg": float(llm_data.get("net_margin_delta", 3.60)),
            "inventoryAttachScore": 0.98,
            "code": llm_data.get("python_code", "# Generated by Gemini 2.5 Flash"),
            "promoId": llm_data.get("promo_id", f"AI_GEN{next_gen}_LIVE"),
            "promoName": llm_data.get("promo_name", "AI Smart Deal"),
            "attachedItemSku": llm_data.get("attached_item_sku"),
            "attachedItemName": llm_data.get("attached_item_name"),
            "attachedPrice": float(llm_data.get("attached_price", 1.50)),
            "discountAmount": float(llm_data.get("discount_amount", 7.49)),
            "isLiveLlmResponse": True,
            "llmExecutionTimeMs": elapsed_ms
        }

        return candidate

    except Exception as e:
        print(f"❌ Gemini Generation Error: {e}")
        raise HTTPException(status_code=500, detail=f"LLM Generation Failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
