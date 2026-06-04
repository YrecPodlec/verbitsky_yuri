"use client"
import React from 'react';
import styles from './waveBlock.module.scss';
import {Title} from "@/app/[locale]/shared";
import {useTranslations} from "next-intl";
import { motion } from "motion/react";

const WaveBlock = () => {
    const t = useTranslations('navbar')
    const text = useTranslations('aboutText')

    return (
        <motion.section className={styles.section} id="about"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: false,
                            amount: 0.2,
                            margin: "-10% 0% -10% 0%"
                        }}
        >
            {/*<div className={styles.imageAbout}>*/}
            {/*    <Image src={'/backAbout.gif'} alt={''} fill/>*/}
            {/*</div>*/}
            <div className={styles.box}>
                <Title title={t('about')}/>
                <div className={styles.content}>
                    <p>
                        {text('first')}
                        {<br/>}
                        {<br/>}
                        {<br/>}
                        {text('second')}
                    </p>
                    <span>
                            {text('third')}
                </span>
                </div>
            </div>
        </motion.section>
    );
};

export default WaveBlock;