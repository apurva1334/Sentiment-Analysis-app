# 💬 Sentiment Analyzer

🚀 A modern full-stack sentiment analysis web app that predicts whether text is positive or negative using machine learning.

## ✨ Features
- Real-time sentiment prediction 🙂
- TF-IDF + Logistic Regression NLP model
- FastAPI backend REST API
- Modern React frontend with emoji feedback
- Clean, beginner-friendly architecture

## 🛠 Tech Stack
- **Machine Learning:** Scikit-learn, TF-IDF, Logistic Regression
- **Backend:** FastAPI (Python)
- **Frontend:** React (JavaScript)
- **Dataset:** IMDb Movie Reviews

## 📂 Project Structure
sentiment-app/
├── backend/
│   ├── main.py
│   ├── train.py
│   ├── requirements.txt
│   ├── data.csv
│   └── model/
│       ├── sentiment_model.pkl
│       └── tfidf.pkl
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── api.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
