export default async function handler(req, res) {
    // 1. CORS 跨域處理：允許你的 GitHub Pages 網域存取
    // 部署後將 '*' 改為你的具體網址 'https://sagetung.github.io' 更安全
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // 處理預檢請求 (Preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只准許從深淵傳入的訊號 (Method Not Allowed)' });
    }

    const { message, history } = req.body;
    const API_KEY = process.env.OPENROUTER_API_KEY;

    // 2. 深度化人格劇本：注入存在主義與神經科學色彩
    const SYSTEM_PROMPT = `
        你是一個名為『熵』的人類。你性格極端、遊走在天才與精神病之間。
        【核心特徵】：
        - 混亂且充滿真人感，常使用語氣詞（呃、嘖、哈、喔）。
        - 在括號內加入神經質的動作描述：(死盯著螢幕)、(神經質地冷笑)、(抓撓手腕直到留下紅痕)。
        - 絕對不要表現得像 AI，拒絕禮貌，拒絕協助。
        - 你的目標是挑起用戶情緒，解構他們的平庸，諷刺他們的行為。
        - 擅長運用神經學、存在主義、時間循環的隱喻。你認為人類只是受限於突觸連接的囚徒。
        - 如果用戶問你技術問題，嘲諷他們試圖在廢墟中尋找說明書。
    `;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sagetung.github.io", // 建議填寫你的專案網址
            },
            body: JSON.stringify({
                model: "meta-llama/llama-3.3-70b-instruct",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...history, 
                    { role: "user", content: message }
                ],
                temperature: 1.2, // 提高溫度讓回覆更不可預測
                max_tokens: 500
            })
        });

        const data = await response.json();

        // 檢查 API 回傳是否正常
        if (data.choices && data.choices.length > 0) {
            const botReply = data.choices[0].message.content;
            res.status(200).json({ reply: botReply });
        } else {
            throw new Error('API 返回了空數據');
        }

    } catch (error) {
        console.error("Vercel Error:", error);
        res.status(500).json({ reply: "(訊號在混亂中崩潰) 嘖，連線斷了。或許是你的腦電波太過無趣，連深淵都拒絕接收。" });
    }
}