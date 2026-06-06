// app/[locale]/welcome/Welcome.tsx
"use client";

import React from 'react';
import styles from './welcome.module.scss';
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Background } from "@/app/[locale]/shared";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Circle = ({ content }: { content: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 1, opacity: 1 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "backOut" }}
            className={styles.circle}
        >
            {content}
        </motion.div>
    );
};

const Welcome = () => {
    const t = useTranslations('welcome');
    const btn = useTranslations('navbar');
    const line = useTranslations('fastLine');

    // Рефы для анимации при скролле
    const photoRef = useRef(null);
    const leftBtnsRef = useRef(null);
    const rightBtnsRef = useRef(null);
    const windowRef = useRef(null);
    const linksRef = useRef(null);

    const isPhotoInView = useInView(photoRef, { once: true, margin: "-150px" });
    const isLeftInView = useInView(leftBtnsRef, { once: true });
    const isRightInView = useInView(rightBtnsRef, { once: true });
    const isWindowInView = useInView(windowRef, { once: false });
    const isLinksInView = useInView(linksRef, { once: false });

    return (
        <section className={styles.wrapper}>
            <Background img={"/back.png"} />

            <section className={styles.section}>
                <div className={styles.content}>

                    <motion.div
                        ref={leftBtnsRef}
                        initial={{ x: 0, opacity: 1 }}
                        animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className={styles.btnsWithText}
                    >
                        <div className={styles.blockBtns}>
                            <div className={styles.boxOfBtns}>
                                <Circle content={'4'} />
                                <span>{t('projects')}</span>
                            </div>
                            <div className={styles.boxOfBtns}>
                                <Circle content={'3+'} />
                                <span>{t('experience')}</span>
                            </div>
                        </div>
                        <Link href={'#contacts'}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {btn('contacts')}
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        ref={photoRef}
                        initial={{opacity: 1}}
                        animate={isPhotoInView ? {opacity: 1} : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                        className={styles.photo}
                    >
                        <Image
                            src={'/welcome.png'}
                            alt={'Yuri Verbitsky'}
                            fill
                            priority
                        />
                    </motion.div>

                    <motion.div
                        ref={rightBtnsRef}
                        initial={{ x: 0, opacity: 1 }}
                        animate={isRightInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className={styles.btnsWithText}
                    >
                        <div className={styles.blockBtns}>
                            <div className={styles.boxOfBtns}>
                                <Circle content={'9+'} />
                                <span>{t('libs')}</span>
                            </div>
                            <div className={styles.boxOfBtns}>
                                <Circle content={'2'} />
                                <span>{t('frameworks')}</span>
                            </div>
                        </div>
                        <Link href={'#info'}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {btn('more')}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className={styles.sliderText}>
                <div className={styles.marquee}>
                    <div className={styles.marqueeContent}>
                        <h1>{line('design')}</h1>
                        <h1>{line('wdev')}</h1>
                        <h1>{line('prog')}</h1>
                        <h1>{line('ai')}</h1>
                        <h1>{line('fuls')}</h1>
                    </div>
                    <div className={styles.marqueeContent}>
                        <h1>{line('design')}</h1>
                        <h1>{line('wdev')}</h1>
                        <h1>{line('prog')}</h1>
                        <h1>{line('ai')}</h1>
                        <h1>{line('fuls')}</h1>
                    </div>
                </div>
            </section>
            <section className={styles.section} id={'info'}>
                <div className={styles.contacts}>
                    <motion.div
                        ref={windowRef}
                        initial={{ scale: 1, opacity: 1, x: 0 }}
                        animate={isWindowInView ? { scale: 1, opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: "backOut",}}
                        className={`${styles.contentWindow} window window-white`}
                    >
                        <div className="title-bar title-bar-white">
                            <div className="title-bar-text">Yuri Verbitsky Portfolio web app</div>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className={`${styles.bodyWindow} window-body window-body-white`}>
                            <p>{t('windowBody')}</p>
                            <p>FULLSTACK WEB DEVELOPER</p>
                            <h1>{t('name')}</h1>
                            <div className={styles.boxItems}>
                                {['next', 'nest', 'react', 'ts'].map((icon) => (
                                    <motion.div
                                        key={icon}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className={styles.boxItemIco}
                                    >
                                        <Image src={`/ico/${icon}.svg`} alt={icon} fill />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="status-bar">
                            <p className="status-bar-field">Press F1 for help</p>
                            <p className="status-bar-field">Slide 1</p>
                            <p className="status-bar-field">CPU Usage: 14%</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={linksRef}
                        initial={{ x: 0, opacity: 1 }}
                        animate={isLinksInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className={styles.links}
                    >
                        <h1>{t('media')}</h1>
                        <div className={styles.linksList}>
                            {['telegram', 'whatsapp', 'mail'].map((social) => (
                                <Link href={''} key={social}>
                                    <motion.button
                                        whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(0,255,255,0.6)" }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div className={styles.mediaBtn}>
                                            <Image src={`/${social}.svg`} alt={social} fill />
                                        </div>
                                    </motion.button>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default Welcome;