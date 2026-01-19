export async function analyzeSentiment(text) {
  const response = await fetch(
    "https://sentiment-api-lige.onrender.com/predict-sentiment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    }
  );

  return response.json();
}
