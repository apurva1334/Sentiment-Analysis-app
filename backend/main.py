from fastapi import FastAPI
from pydantic import BaseModel
import joblib

from fastapi.middleware.cors import CORSMiddleware

# ---------------------------
# App initialization
# ---------------------------
app = FastAPI(title="Sentiment Analysis API")

# ---------------------------
# Enable CORS (for React later)
# ---------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------
# Load trained model
# ---------------------------
model = joblib.load("model/sentiment_model.pkl")
tfidf = joblib.load("model/tfidf.pkl")

# ---------------------------
# Request schema
# ---------------------------
class TextInput(BaseModel):
    text: str

# ---------------------------
# Prediction endpoint
# ---------------------------
@app.post("/predict-sentiment")
def predict_sentiment(data: TextInput):
    text_vector = tfidf.transform([data.text])

    prediction = model.predict(text_vector)[0]
    probabilities = model.predict_proba(text_vector)[0]
    confidence = max(probabilities)

    emoji = "🙂" if prediction == "positive" else "🙁"

    return {
        "sentiment": prediction,
        "confidence": round(float(confidence), 2),
        "emoji": emoji
    }
