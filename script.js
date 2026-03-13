// Gemini APIへ映像と質問を送る関数
async function askGemini(imageData) {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [
                    { text: "あなたは殺せんせーです。カメラ映像を見て、今の状況について生徒にアドバイスしてください。口調は『〜ですねぇ』でお願いします。" },
                    { inline_data: { mime_type: "image/jpeg", data: imageData } }
                ]
            }]
        })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}
