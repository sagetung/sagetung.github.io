/**
 * 詠敘 / Operatic - 交互腳本
 * 夏桐笙個人網站專用
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化導覽系統
    initNavigation();
});

// ==========================================
// 導覽控制系統 (Navigation Control)
// ==========================================

function toggleMenu() {
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('menuOverlay');
    
    if (sideNav && overlay) {
        sideNav.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

function toggleSubMenu(element) {
    element.parentElement.classList.toggle('active');
}

function initNavigation() {
    // 確保點擊遮罩時關閉選單
    const overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.onclick = toggleMenu;
    }
}

// ==========================================
// 音樂劇卡牌系統 (Musical Card System)
// ==========================================

/**
 * 隨機抽取 (Draw Card)
 * 邏輯：隱藏其他卡牌，僅保留一張，並自動翻轉
 */
function drawCard() {
    const allCards = document.querySelectorAll('.musical-card');
    
    if (allCards.length === 0) return;

    // 先重置所有卡牌狀態，避免疊加行為
    allCards.forEach(c => {
        c.classList.remove('selected', 'is-flipped', 'hidden');
    });

    // 隨機選取索引
    const randomIdx = Math.floor(Math.random() * allCards.length);
    const selectedCard = allCards[randomIdx];

    // 執行視覺過場
    allCards.forEach((card, index) => {
        if (index !== randomIdx) {
            // 隱藏非選中的卡牌
            card.classList.add('hidden');
        } else {
            // 標記選中的卡牌
            card.classList.add('selected');
            
            // 短暫延遲後觸發 3D 翻轉效果 (配合 CSS transition)
            setTimeout(() => {
                card.classList.add('is-flipped');
            }, 300);
        }
    });
}

/**
 * 圖鑑還原 (Reset Gallery)
 * 邏輯：顯示所有卡牌，取消選中狀態與翻面
 */
function resetGallery() {
    const allCards = document.querySelectorAll('.musical-card');
    
    allCards.forEach(card => {
        // 移除所有特殊類別
        card.classList.remove('hidden');
        card.classList.remove('selected');
        card.classList.remove('is-flipped');
        
        // 強制重新觸發 CSS 動畫渲染（可選）
        card.style.display = ''; 
    });
}

/**
 * 手動翻牌控制
 * 即使不點擊抽取按鈕，點擊卡牌本身也能切換正反面
 */
// 這部分邏輯通常已寫在 HTML 的 onclick="this.classList.toggle('is-flipped')" 中
// 若要透過 JS 統一管理，可使用下方邏輯：
/*
const cards = document.querySelectorAll('.musical-card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        if (!this.classList.contains('hidden')) {
            this.classList.toggle('is-flipped');
        }
    });
});
*/

// ==========================================
// 工具函式
// ==========================================

// 預留：未來若有動態載入 JSON 資料的需求，可於此擴充
async function loadMusicalData() {
    // console.log("未來可串接外部資料庫...");
}