// キーは直接書かず、Vercelの環境変数から読み込む
const API_KEY = process.env.GEMINI_API_KEY; 

async function askGemini(imageData) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    // 以下、通信処理...
}
