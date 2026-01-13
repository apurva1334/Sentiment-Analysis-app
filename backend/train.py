import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# ---------------------------
# 1. Load dataset
# ---------------------------
print("📥 Loading dataset...")
df = pd.read_csv("data.csv")

# ---------------------------
# 2. Split text and labels
# ---------------------------
X = df["review"]
y = df["sentiment"]

# ---------------------------
# 3. Convert text to numbers (TF-IDF)
# ---------------------------
print("🔄 Vectorizing text...")
tfidf = TfidfVectorizer(
    stop_words="english",
    max_features=5000,
    ngram_range=(1, 2)
)

X_vec = tfidf.fit_transform(X)

# ---------------------------
# 4. Train / test split
# ---------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X_vec, y,
    test_size=0.2,
    random_state=42
)

# ---------------------------
# 5. Train Logistic Regression
# ---------------------------
print("🧠 Training model...")
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# ---------------------------
# 6. Evaluate accuracy
# ---------------------------
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"✅ Model accuracy: {accuracy:.4f}")

# ---------------------------
# 7. Save model & vectorizer
# ---------------------------
joblib.dump(model, "model/sentiment_model.pkl")
joblib.dump(tfidf, "model/tfidf.pkl")

print("💾 Model and TF-IDF saved successfully!")
