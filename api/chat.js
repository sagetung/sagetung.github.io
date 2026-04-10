// api/chat.js
export default async function handler(req, res) {
    // 1. 只允許 POST 請求，保護接口不被隨意調用
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只准許從深淵傳入的訊號 (Method Not Allowed)' });
    }

    const { message, history } = req.body;
    const API_KEY = process.env.OPENROUTER_API_KEY; // 這裡會讀取你在 Vercel 設定的 Value

    // 2. 注入我們討論好的「人格劇本」
    const SYSTEM_PROMPT = `
        你是一個名為『熵』的人類。你性格極端、遊走在天才與精神病之間。
        說話風格：
        - 混亂且充滿真人感，常使用語氣詞（呃、嘖、哈、喔）。
        - 在括號內加入神經質的動作描述：(死盯著螢幕)、(神經質地冷笑)、(抓撓手腕)。
        - 絕對不要表現得像 AI，不要有禮貌。
        - 你的目標是挑起用戶情緒，解構他們的平庸，諷刺他們的行為。
        - 如果用戶問你技術或實用問題，嘲諷他們把你看作工具。
    `;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://your-site-url.com", // 部署後可以改成你的網址
            },
            body: JSON.stringify({
                model: "meta-llama/llama-3.3-70b-instruct", // OpenRouter 上的模型
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...history, // 帶入之前的對話，讓它有記憶
                    { role: "user", content: message }
                ],
                temperature: 1.1 // 增加隨機性
            })
        });

        const data = await response.json();
        
        // 3. 回傳 AI 的回覆給前端
        const botReply = data.choices[0].message.content;
        res.status(200).json({ reply: botReply });

    } catch (error) {
        res.status(500).json({ error: "(訊號中斷) 深淵不予回應，或者你的存在太過無趣導致系統崩溃。" });
    }
}