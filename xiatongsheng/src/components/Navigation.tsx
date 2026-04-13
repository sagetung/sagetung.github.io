"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/common.module.css';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSubMenu = (menuName: string) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    return (
        <>
            <header className={styles['top-bar']}>
                <div className={styles['left-group']}>
                    <div className={styles['menu-btn']} onClick={toggleMenu}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                    <Link href="/" className={styles['site-name']}>夏桐笙</Link>
                </div>
            </header>

            <nav className={`${styles['side-nav']} ${isMenuOpen ? styles.active : ''}`}>
                <ul>
                    <li><Link href="/">首頁 / Home</Link></li>
                    <li><Link href="/about">個人使用說明書 / Manual</Link></li>
                    <li><Link href="/meditation">修身養性 / Cultivation</Link></li>
                    
                    <li className={`${styles['nav-item']} ${expandedMenu === 'artifacts' ? styles.active : ''}`}>
                        <div className={styles['nav-category-title']} onClick={() => toggleSubMenu('artifacts')}>
                            人造物 / Artifacts
                        </div>
                        <ul className={styles['sub-menu']}>
                            <li><Link href="#">文本 / Text</Link></li>
                            <li><Link href="#">碎語 / Fragments</Link></li>
                            <li><Link href="/melodic-line">旋律線 / Melodic Line</Link></li>
                            <li><Link href="#">交互 / Interaction</Link></li>
                            <li><Link href="#">顯像 / Visualization</Link></li>
                        </ul>
                    </li>
                    
                    <li className={`${styles['nav-item']} ${expandedMenu === 'external' ? styles.active : ''}`}>
                        <div className={styles['nav-category-title']} onClick={() => toggleSubMenu('external')}>
                            外部攝入 / External Intake
                        </div>
                        <ul className={styles['sub-menu']}>
                            <li><Link href="#">墨跡 / Script</Link></li>
                            <li><Link href="#">顯影 / Cine</Link></li>
                            <li><Link href="#">聲波 / Acoustic</Link></li>
                            <li><Link href="#">擬境 / Ludic</Link></li>
                            <li><Link href="#">逸象 / Manga</Link></li>
                            <li><Link href="/operatic">詠敘 / Operatic</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div 
                className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`} 
                onClick={toggleMenu}
            ></div>
        </>
    );
}
