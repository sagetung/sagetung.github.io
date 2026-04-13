"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';

const dialogues = [
    "「……啊，你在啊。」",
    "「我通常不太主動說話……」",
    "「但你既然點進來了，大概是有點耐心的人？」",
    "「……」",
    "「剛才我在想一個問題——『為什麼要展示自己』。」",
    "「然後發現，答案好像被我擦掉了。」",
    "「……」",
    "「……」",
    "「……」",
    "「嗯……？你還在啊。」",
    "「我剛才在想，首頁放一隻貓會不會比較好。但後來覺得……」",
    "「算了，貓也不見得想被放在這裡。」",
    "「……」",
    "「有時候我會打開備忘錄，打了一行字，然後刪掉。重複好幾次，最後什麼也沒留。」",
    "「不是因為不想說。是因為……打出來之後，突然覺得也沒那麼想說了。」",
    "「……」",
    "「對話框要關掉了喔。」",
    "「……嗯。那就這樣吧。」"
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleDialogueClick = () => {
        if (currentIndex < dialogues.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsHidden(true);
        }
    };

    // Prevent hydration mismatch
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return <main className={styles['background-container']}></main>;

    return (
        <main className={styles['background-container']}>
            <div 
                className={`${styles['dialogue-overlay']} ${isHidden ? styles.hidden : ''}`} 
                onClick={isHidden ? undefined : handleDialogueClick}
            >
                <div className={styles['dialogue-box']}>
                    <div className={styles['dialogue-name']}>夏桐笙</div>
                    <div className={styles['dialogue-text']}>
                        {dialogues[currentIndex]}
                    </div>
                </div>
            </div>
        </main>
    );
}
