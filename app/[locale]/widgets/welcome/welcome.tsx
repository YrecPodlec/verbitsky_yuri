import React from 'react';
import styles from './welcome.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
interface Props {
    content: string
}
const Circle = ({content}: Props) => {
    return (
        <div className={styles.circle}>
            {content}
        </div>
    )
}
const Welcome = () => {
    const t = useTranslations('welcome')
    const btn = useTranslations('navbar')
    const line = useTranslations('fastLine')
    return (
        <section className={styles.wrapper}>

            {/* HERO (с паддингами) */}
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.btnsWithText}>
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
                        <Link href={''}>
                            <button>
                                {btn('contacts')}
                            </button>
                        </Link>
                    </div>

                    <div className={styles.photo}>
                        <Image
                            src={'/welcome.png'}
                            alt={'Yuri Verbitsky'}
                            fill
                        />
                    </div>

                    <div className={styles.btnsWithText}>
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
                        <Link href={''}>
                            <button>
                                {btn('more')}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SLIDER — БЕЗ паддингов, на всю ширину */}
            <section className={styles.sliderText}>
                <div className={styles.marquee}>
                    <div className={styles.marqueeContent}>
                        <h1>{line('design')}</h1>
                        <h1>{line('wdev')}</h1>
                        <h1>{line('prog')}</h1>
                        <h1>{line('ai')}</h1>
                        <h1>{line('fuls')}</h1>
                    </div>
                    {/* Дубликат для бесконечной прокрутки */}
                    <div className={styles.marqueeContent}>
                        <h1>{line('design')}</h1>
                        <h1>{line('wdev')}</h1>
                        <h1>{line('prog')}</h1>
                        <h1>{line('ai')}</h1>
                        <h1>{line('fuls')}</h1>
                    </div>
                </div>
            </section>



            {/* CONTACTS (с паддингами снова) */}
            <section className={styles.section}>
                <div className={styles.contacts}>
                    <div className={`${styles.contentWindow} window window-white`}>
                        <div className="title-bar title-bar-white">
                            <div className="title-bar-text">Yuri Verbitsky Portfolio web app</div>

                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className={`${styles.bodyWindow} window-body window-body-white`}>
                            <p>
                                {t('windowBody')}
                            </p>
                            <p>FULLSTACK WEB DEVELOPER</p>
                            <h1>{t('name')}</h1>
                            <div className={styles.boxItems}>
                                <div className={styles.boxItemIco}>
                                    <Image src={'/ico/next.svg'} alt={''} fill/>
                                </div>
                                <div className={styles.boxItemIco}>
                                    <Image src={'/ico/nest.svg'} alt={''} fill/>
                                </div>
                                <div className={styles.boxItemIco}>
                                    <Image src={'/ico/react.svg'} alt={''} fill/>
                                </div>
                                <div className={styles.boxItemIco}>
                                    <Image src={'/ico/ts.svg'} alt={''} fill/>
                                </div>
                            </div>
                        </div>
                        <div className="status-bar">
                            <p className="status-bar-field">Press F1 for help</p>
                            <p className="status-bar-field">Slide 1</p>
                            <p className="status-bar-field">CPU Usage: 14%</p>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h1>{t('media')}</h1>
                        <div className={styles.linksList}>
                            <Link href={''}>
                                <button>
                                    <div className={styles.mediaBtn}>
                                        <Image src={'/telegram.svg'} alt={''} fill/>
                                    </div>
                                </button>
                            </Link>

                            <Link href={''}>
                                <button>
                                    <div className={styles.mediaBtn}>
                                        <Image src={'/whatsapp.svg'} alt={''} fill/>
                                    </div>
                                </button>
                            </Link>

                            <Link href={''}>
                                <button>
                                    <div className={styles.mediaBtn}>
                                        <Image src={'/mail.svg'} alt={''} fill/>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Welcome;
