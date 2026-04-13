import React from 'react';
import commonStyles from '../../styles/common.module.css';
import aboutStyles from '../../styles/about.module.css';
import meditationStyles from '../../styles/meditation.module.css';

export default function Meditation() {
    return (
        <div className={aboutStyles['readme-content']}>
            <div className={meditationStyles['main-content-block']}>
                
                <div className={meditationStyles['operatic-header']}>
                    <div className={meditationStyles['header-text-group']}>
                        <h1 className={aboutStyles['page-title']}>修身養性 / Cultivation</h1>
                        <p className={meditationStyles['music-intro']}>
                            這裡沒有鏡子，只有你對面那面反射靈魂的牆。<br />
                            在混亂的熵增中，尋找片刻窒息的平靜。
                        </p>
                    </div>
                </div>

                <div className={meditationStyles.divider}></div>

                <div className={meditationStyles['chat-ui-container']}>
                    <div id="status-bar" className={meditationStyles['status-bar']}></div>
                    
                    <div id="chat-window" className={meditationStyles['chat-window']}>
                        <div className={`${meditationStyles.message} ${meditationStyles['bot-msg']}`}>
                            熵：(死死地盯著螢幕上的光標) 歡迎來到這片廢墟。別以為在這裡能修什麼身、養什麼性... 告訴我，今天你又帶著什麼樣的虛偽面具來找我？
                        </div>
                    </div>

                    <div className={meditationStyles['input-wrapper']}>
                        <input 
                            type="text" 
                            id="user-input" 
                            className={meditationStyles['user-input']}
                            placeholder="向深淵投擲你的言語..." 
                            autoComplete="off" 
                            disabled
                        />
                        <button id="send-btn" className={meditationStyles['send-btn']} disabled>發送</button>
                    </div>
                    <p style={{marginTop: '10px', fontSize: '0.8rem', color: '#666', textAlign: 'center'}}>
                        (AI 聊天模組目前處於靜默狀態)
                    </p>
                </div>

            </div>
        </div>
    );
}
