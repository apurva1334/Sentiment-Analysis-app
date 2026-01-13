import { useState } from "react";
import { analyzeSentiment } from "./api";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const res = await analyzeSentiment(text);
    setResult(res);
    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

      
                <div style={styles.inputGroup}>
        <h1 style={styles.title}>💬 Sentiment Analyzer</h1>
        <p style={styles.subtitle}>
            Type something and see how it feels 🙂
        </p>

        <textarea
            style={styles.textarea}
            placeholder="I really loved this movie..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <button style={styles.button} onClick={handleAnalyze}>
            {loading ? "Analyzing..." : "Analyze"}
        </button>
        </div>


        {result && (
          <div style={styles.result}>
            <div style={styles.emoji}>{result.emoji}</div>
            <p style={styles.sentiment}>{result.sentiment.toUpperCase()}</p>
            <p style={styles.confidence}>
              Confidence: {result.confidence}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    width: "420px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  title: {
    marginBottom: "5px"
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px"
  },
  textarea: {
    width: "100%",
    height: "110px",
    padding: "12px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    resize: "none",
    alignItems:"center",
  },
  button: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  },
  result: {
    marginTop: "25px"
  },
  emoji: {
    fontSize: "64px"
  },
  sentiment: {
    fontWeight: "bold",
    marginTop: "10px"
  },
  confidence: {
    fontSize: "14px",
    color: "#555"
  },
  inputGroup: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
},

};

export default App;
