// api/chat.js (Vercelのサーバーレス関数)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY; // Vercelの「環境変数」から読み込む

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: "あなたは殺せんせーです。短く返答してください: " + message }] }] })
  });

  const data = await response.json();
  res.status(200).json(data);
}
