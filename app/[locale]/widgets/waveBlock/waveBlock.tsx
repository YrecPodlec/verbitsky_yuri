import React from 'react';
import styles from './waveBlock.module.scss';
import {Title} from "@/app/[locale]/shared";
import {useTranslations} from "next-intl";

const WaveBlock = () => {
    const t = useTranslations('navbar')
    const text = useTranslations('aboutText')
    return (
        <>
            <section className={styles.section}>
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
            </section>
        </>
    );
};

export default WaveBlock;