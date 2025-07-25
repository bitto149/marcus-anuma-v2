
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    })
  });

  const json = await completion.json();
  const reply = json.choices?.[0]?.message?.content || "Non ho capito.";

  // Sintesi vocale (Google TTS simulata)
  const audioUrl = `https://dummy.url/audio/${encodeURIComponent(reply)}.mp3`; // Simulazione

  res.status(200).json({ reply, audioUrl });
}
