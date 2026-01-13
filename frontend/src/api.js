export async function analyzeSentiment(text) {
  const response = await fetch("http://localhost:8000/predict-sentiment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  return response.json();
}
