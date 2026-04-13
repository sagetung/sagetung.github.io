"use client";

import React, { useState } from 'react';
import commonStyles from '../../styles/common.module.css';
import aboutStyles from '../../styles/about.module.css';
import operaticStyles from '../../styles/operatic.module.css';

interface CardData {
    id: string;
    title: string;
    imagePath: string;
    quote: string;
    review: React.ReactNode;
    ytLink: string;
}

const CARDS: CardData[] = [
    {
        id: 'mozart',
        title: "Mozart, L'opéra rock",
        imagePath: "/operatic pc/Mozart L'Opera Rock pc.jpg",
        quote: "「Vivre à en crever.」",
        review: (
            <>
                與《Mozart, L'opéra rock》相遇，絕對不僅僅是這個冬天的幸事，而是我整個觀劇生涯中最珍貴美好的餽贈。<br /><br />
                劇中的一切，無疑是天才的狂想與絢爛藝術的結晶。它完美的融合了古典與現代，將莫札特那放蕩不羈的靈魂展現得淋漓盡致。<br /><br />
                舞台上的張力讓我無數次起雞皮疙瘩，每一個燈光、每一次走位、甚至每一個休止符的運用，都是對生命與自由最高規格的讚歌。<br /><br />
                「Tatoue-moi」的輕狂與「Vivre à en crever」的釋然，如同在沉悶的日常中撕開一道裂縫，讓光照了進來。<br /><br />
                Salieri 的存在也是我最喜愛的設計之一，他對莫札特的又愛又恨，那種無法企及卻又深深被吸引的痛苦，非常真實且引人共鳴。<br /><br />
                這部法語音樂劇，不僅是一場視聽盛宴，更是一次靈魂的洗滌。
            </>
        ),
        ytLink: "https://youtu.be/OfdnnheqQcw?si=CKkhCMNUgMhsfYaF"
    },
    {
        id: 'chicago',
        title: "Chicago",
        imagePath: "/operatic pc/Chicago pc.webp",
        quote: "「It's all a circus, kid. A lot of show-biz.」",
        review: (
            <>
                1996 年復排版的經典百老匯音樂劇《Chicago》，無疑是黑色幽默的巔峰。<br /><br />
                以 1920 年代的社會真實案件為基礎，將謀殺、貪婪、腐腐敗、暴力、剝削、通姦與背叛，這些人們在生活中極力避免的罪惡，轉化為一場華麗的光影秀。<br /><br />
                極簡的舞台設計，黑與白的強烈對比，讓所有焦點集中在演員的肢體與歌聲。沒有繁重複雜的佈景，只有純粹的表演實力。極致的爵士樂與精湛的舞蹈，將那個紙醉金迷的摩登時代刻畫得入木三分。<br /><br />
                最諷刺的莫過於，在這場秀裡，真相與正義似乎一點都不重要。誰能操縱媒體、誰能獲得大眾的同情與迷戀，誰就是最後的贏家。<br /><br />
                「Roxie Rocks Chicago」，這是一場對人性與社會的極限嘲諷。
            </>
        ),
        ytLink: "https://youtube.com/playlist?list=PL8Lpw39GxwbNz-AnYe2PML38l724dmCOI&si=EsjqzNki_gEmDy3K"
    },
    {
        id: 'cats',
        title: "Cats",
        imagePath: "/operatic pc/Cats pc.jpg",
        quote: "「If you find there the meaning of what happiness is, then a new life will begin.」",
        review: (
            <>
                《Cats》是我的啟蒙，是我第一次在沒有台詞，全靠音樂與舞蹈的劇作中，感受到如此純粹的震撼。<br /><br />
                那些貓兒每個都有獨特的個性：有魔術貓的狡黠、有鐵道貓的穩重、有搖滾貓的張狂。我們看的其實不是貓，而是形形色色的人生百態。<br /><br />
                特別是 Grizabella 唱出那曲經典的「Memory」時，沙啞的嗓音裡蘊含了多少流浪的滄桑與對過往光輝歲月的眷戀。那一刻，你不可能不動容。<br /><br />
                對我而言，它是一道門，推開了通往劇場世界的光。
            </>
        ),
        ytLink: "https://youtu.be/GbpP3Sxp-1U?si=rmSxycEpC1GNGTU6"
    }
];

export default function Operatic() {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

    const toggleCardFlip = (id: string, e: React.MouseEvent) => {
        // Prevent event propagation so YT link clicks don't flip the card
        e.stopPropagation();
        
        setFlippedCards(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const drawCard = () => {
        const randomIdx = Math.floor(Math.random() * CARDS.length);
        const drawnId = CARDS[randomIdx].id;
        
        setSelectedCardId(drawnId);
        
        // Reset flips and set the newly drawn card to NOT flipped initially,
        // then flip it after a small delay for dramatic effect
        setFlippedCards(new Set());
        setTimeout(() => {
            setFlippedCards(new Set([drawnId]));
        }, 300);
    };

    const resetGallery = () => {
        setSelectedCardId(null);
        setFlippedCards(new Set());
    };

    return (
        <div className={operaticStyles['about-page']}>
            <main className={`${aboutStyles['readme-content']} ${operaticStyles['main-content-block']}`}>
                
                <header className={operaticStyles['operatic-header']}>
                    <div className={operaticStyles['header-text-group']}>
                        <h1 className={aboutStyles['page-title']}>詠敘 / Operatic</h1>
                        <p className={operaticStyles['music-intro']}>
                            對戲劇的著迷從來不曾停止。踏入劇院就像是一場逃亡。在黑暗的觀眾席角落裡，我可以暫時拋下真實世界的重量，全然沉浸於音樂與燈光共舞的幻夢境地。
                        </p>
                    </div>

                    <div className={operaticStyles['action-bar']}>
                        <button className={operaticStyles['gallery-btn']} onClick={resetGallery}>GALLERY / 全部</button>
                        <button className={operaticStyles['shuffle-btn']} onClick={drawCard}>DRAW / 隨機抽取</button>
                    </div>
                </header>

                <div className={operaticStyles['card-grid']} id="cardGrid">
                    {CARDS.map(card => {
                        // Logic derived from original operatic.js
                        const isHidden = selectedCardId !== null && selectedCardId !== card.id;
                        const isSelected = selectedCardId === card.id;
                        const isFlipped = flippedCards.has(card.id);

                        return (
                            <div 
                                key={card.id}
                                className={`
                                    ${operaticStyles['musical-card']} 
                                    ${isHidden ? operaticStyles.hidden : ''} 
                                    ${isSelected ? operaticStyles.selected : ''} 
                                    ${isFlipped ? operaticStyles['is-flipped'] : ''}
                                `}
                                onClick={(e) => toggleCardFlip(card.id, e)}
                            >
                                <div className={operaticStyles['card-inner']}>
                                    <div className={operaticStyles['card-front']}>
                                        <div 
                                            className={operaticStyles['hero-image']} 
                                            style={{ backgroundImage: `url("${card.imagePath}")` }}
                                        ></div>
                                        <div className={operaticStyles['card-name']}>{card.title}</div>
                                    </div>
                                    <div className={operaticStyles['card-back']}>
                                        <h3 className={operaticStyles['back-title']}>{card.title}</h3>
                                        <p className={operaticStyles['golden-quote']}>{card.quote}</p>

                                        <div className={operaticStyles.divider}></div>

                                        <div className={operaticStyles['my-review']}>
                                            {card.review}
                                        </div>

                                        <div className={operaticStyles.divider}></div>

                                        <a 
                                            href={card.ytLink} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className={operaticStyles['yt-link-btn']} 
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className={operaticStyles['yt-icon']}>▶</span>
                                            <span className={operaticStyles['yt-text']}>WATCH ON YOUTUBE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
