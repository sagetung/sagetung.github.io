import React from 'react';
import commonStyles from '../../styles/common.module.css';
import aboutStyles from '../../styles/about.module.css';
import melodicStyles from '../../styles/melodic-line.module.css';

export default function MelodicLine() {
    return (
        <main className={aboutStyles['readme-content']}>
            <header className={melodicStyles['music-header']}>
                <h1 className={melodicStyles['page-title']}>旋律線 / Melodic Line</h1>
                <p className={melodicStyles['music-intro']}>
                    「空氣的震動，以及對寂靜的抵抗。我不試圖傳達什麼宏大的敘事，只想在嘈雜的世界中，勾勒出幾條屬於自己的、低頻的線條。」
                </p>
            </header>

            <div className={melodicStyles['music-grid']}>
                
                <div className={melodicStyles['music-card']}>
                    <div className={melodicStyles['music-cover']}>
                        <img src="/melodic-line pc/Escape from a Dream pc.jpg" alt="Song Cover 01" />
                    </div>
                    <div className={melodicStyles['music-detail']}>
                        <div className={melodicStyles['music-tags']}>
                            <span className={melodicStyles['m-tag']}>#Gothic</span>
                            <span className={melodicStyles['m-tag']}>#Dark Pop</span>
                        </div>
                        <h3 className={melodicStyles['music-name']}>Escape from a Dream</h3>
                        <p className={melodicStyles['lyrics-quote']}>
                            「The madman is also a beggar of love.<br />
                            You, placed on a pedestal,<br />
                            And my shattered faith.」
                        </p>
                        <div className={melodicStyles['player-wrapper']}>
                            <audio controls>
                                <source src="/melodic-line music/Escape from a Dream.mp3" type="audio/mpeg" />
                                您的瀏覽器不支援播放器。
                            </audio>
                        </div>
                    </div>
                </div>

                <div className={melodicStyles['music-card']}>
                    <div className={melodicStyles['music-cover']}>
                        <img src="/melodic-line pc/The Obsession with Death pc.webp" alt="Song Cover 02" />
                    </div>
                    <div className={melodicStyles['music-detail']}>
                        <div className={melodicStyles['music-tags']}>
                            <span className={melodicStyles['m-tag']}>#Alternative Rock</span>
                        </div>
                        <h3 className={melodicStyles['music-name']}>The Obsession with Death</h3>
                        <p className={melodicStyles['lyrics-quote']}>
                            「Bananas as the moon.<br />
                            Sacrificing anxiety and unrest.<br />
                            The sweet rain of freedom has never fallen.」
                        </p>
                        <div className={melodicStyles['player-wrapper']}>
                            <audio controls>
                                <source src="/melodic-line music/The Obsession with Death.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>

                <div className={melodicStyles['music-card']}>
                    <div className={melodicStyles['music-cover']}>
                        <img src="/melodic-line pc/孤独な響きpc.jpg" alt="Coming Soon" />
                    </div>
                    <div className={melodicStyles['music-detail']}>
                        <div className={melodicStyles['music-tags']}>
                            <span className={melodicStyles['m-tag']}>#Ballad</span>
                            <span className={melodicStyles['m-tag']}>#Soul</span>
                        </div>
                        <h3 className={melodicStyles['music-name']}>孤独な響き</h3>
                        <p className={melodicStyles['lyrics-quote']}>「透明な魂は水の中に消え、<br />
                            一滴の雨水は思い出と影を混ぜて舞い踊る。」</p>
                        <div className={melodicStyles['player-wrapper']}>
                            <audio controls>
                                <source src="/melodic-line music/孤独な響き.mp3" />
                            </audio>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
