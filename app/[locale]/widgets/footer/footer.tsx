import React from 'react';
import styles from './footer.module.scss'
import {useTranslations} from "next-intl";
import {Logo} from "@/app/[locale]/shared";
import Link from "next/link";
const Footer = () => {
    const t = useTranslations('contacts');
    const translateBtns = useTranslations('navbar')
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.blockText}>
                    <div className={styles.yuri}>
                        Yuri Verbitsky 2025
                    </div>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <div className={styles.footerDown}>
                        <div>
                            <p>Developer: Yuri Verbitsky</p>
                            <p>Design: Yuri Verbitsky</p>
                        </div>
                        <div>
                            <Link href={'#about'}><button>{translateBtns('about')}</button></Link>
                            <Link href={'#projects'}><button>{translateBtns('projects')}</button></Link>
                            <Link href={'#skills'}><button>{translateBtns('skills')}</button></Link>
                            <Link href={'#contacts'}><button>{translateBtns('contacts')}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;