export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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", // 🔁 Replace this
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [{ role: "user", content: prompt }]
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices?.[0]?.message?.content ?? "⚠️ No response" });
}
