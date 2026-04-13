import styles from '../styles/about.module.css';

export default function About() {
    return (
        <main className={styles['readme-content']}>
            <h1 className={styles['page-title']}>個人使用說明書</h1>

            <div className={styles['notion-block']}>
                <div className={`${styles['notion-label']} ${styles['color-blue']}`}>關於我 / IDENTITY</div>
                <div className={styles['profile-section']}>
                    <div className={styles['profile-image']}>
                        <img src="/character.jpg" alt="夏桐笙" />
                    </div>
                    <div className={styles['profile-text']}>
                        <h2 className={styles['char-name']}>夏桐笙</h2>
                        <span className={styles.motto}>願如風過竹林，自成清響。</span>
                        <div className={styles['text-content']}>
                            <p>該怎樣介紹自己呢？關於「我是誰」這個問題。</p>
                            <p>這個筆名用了十年之久，那麼十年前的我與如今的我，區別是從哪一天開始發生的？人生漫漫，我亦是我，亦非昨日之我。</p>
                            <p>再普通的靈魂，也是獨一無二的，不想用具體的詞彙去定義自己。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['notion-grid']}>
                <div className={styles['notion-block']}>
                    <div className={`${styles['notion-label']} ${styles['color-orange']}`}>精神狀態 / STATUS</div>
                    <div className={styles['text-content']}>
                        <p>在毀滅世界，與毀滅自己之間，選擇了窩囊地活著。</p>
                        <p>倘若生來不逢春，便駐紮在夏天，把一切模糊的衝動都托付它。這烏托邦式的幻想，如同 Peter Pan 的永恆夏日。</p>
                        <p>缺愛的話，就奔向夏天，它的熱愛，足以溶化一切。</p>
                    </div>
                </div>

                <div className={styles['notion-block']}>
                    <div className={`${styles['notion-label']} ${styles['color-gray']}`}>病歷 / MEDICAL RECORD</div>
                    <div className={styles['medical-report']}>
                        <div className={styles['report-item']}>
                            <span className={styles['report-key']}>臨床特徵：</span>與一切保持距離觀察。接觸世界的方式，是具象的世界和抽象的人。
                        </div>
                        <div className={styles['report-item']}>
                            <span className={styles['report-key']}>診斷紀錄：</span>在「渴望被理解」與「嫌解釋太累」之間，選擇了保持靜音。
                        </div>
                        <div className={styles['report-item']}>
                            <span className={styles['report-key']}>併發症：</span>若發現系統響應緩慢，通常是因為正在進行「意義搜尋」的後台更新，該過程極其耗能且通常無果。
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['notion-block']}>
                <div className={`${styles['notion-label']} ${styles['color-red']}`}>成就 / ACHIEVEMENTS</div>
                <div className={styles['achievement-list']}>
                    <div className={styles['ach-item']}>
                        <h4>【電子蟬鳴】</h4>
                        <p>成功在 24 小時內未點開任何社交媒體，達成了一種物理意義上的數位失聰。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【光合作用模擬】</h4>
                        <p>曾在窗邊發呆超過一小時，除了吸入陽光與二氧化碳，沒有產生任何對人類社會有貢獻的產出。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【凌晨四點的哲學家】</h4>
                        <p>在應該睡覺的時間，完成了一場關於「宇宙本源與明天早餐吃什麼」的深度辯證。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【退群預備役】</h4>
                        <p>在每一個想消失的瞬間，都成功克制了註銷帳號的衝動，選擇繼續潛水。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【內心法庭：大獲全勝】</h4>
                        <p>在腦內進行了一場針對自己的審判。最終因證據不足，或懶得判刑，而當庭無罪釋放。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【訊息防護罩】</h4>
                        <p>看著手機彈出的通知，冷靜地等待它從鎖屏消失。成功證明了：只要我不看，這件事就沒有發生。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【平庸之神】</h4>
                        <p>成功在一個展現卓越的場合，展示了極致的平庸，並對此感到平靜。</p>
                    </div>
                    <div className={styles['ach-item']}>
                        <h4>【醫囑】</h4>
                        <p>沒什麼大不了的。在溶化一切的夏天，能帶著併發症活下去，已經是最大的成就。</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
