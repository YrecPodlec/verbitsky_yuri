"use client";

import React, { useState } from 'react';
import styles from './contacts.module.scss';
import { Title } from "@/app/[locale]/shared";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {motion} from "motion/react";

const Contacts = () => {
    const t = useTranslations('contacts');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const nameRegex = /^[A-Za-zА-Яа-яё\s-]{10,50}$/;

    const emailRegex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const emailRegex2 = /^.{1,64}@/;
    const emailRegex3 = /^[a-zA-Z0-9._%+-]+@/;
    const emailRegex4 = /@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const emailRegex5 = /^[^\s]+$/;
    const emailRegex6 = /^[^"(),:;<>@\[\]\\]+@[^\s@]+$/;
    const emailRegex7 = /^.+@.+\..+$/;

    const isEmailValid = (email: string) => {
        return (
            emailRegex1.test(email) &&
            emailRegex2.test(email) &&
            emailRegex3.test(email) &&
            emailRegex4.test(email) &&
            emailRegex5.test(email) &&
            emailRegex6.test(email) &&
            emailRegex7.test(email)
        );
    };


    const messageRegex = /^(?=.{10,1000}$)(?!.*<[^>]+>)[\s\S]*$/;

    const isNameValid = name === '' || nameRegex.test(name);
    const isMessageValid = message === '' || messageRegex.test(message);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const nameOk = nameRegex.test(name);
        const messageOk = messageRegex.test(message);
        const emailOk =
            emailRegex1.test(email) &&
            emailRegex2.test(email) &&
            emailRegex3.test(email) &&
            emailRegex4.test(email) &&
            emailRegex5.test(email) &&
            emailRegex6.test(email) &&
            emailRegex7.test(email);

        if (!nameOk || !emailOk || !messageOk) {
            setOpen(true);
            return;
        }

        alert(t('success'));
        setName('');
        setEmail('');
        setMessage('');
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className={styles.section} id="contacts">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeUp}
            >
                <Title title={t('title')} />
            </motion.div>

            <motion.div
                className={styles.errorModal}
                style={{ opacity: open ? 1 : 0, zIndex: open ? 999 : -999 }}
                initial={{ scale: 0 }}
                animate={{ scale: open ? 1 : 0, transition: { duration: 0.3 } }}
            >
                <div className={`${styles.windows} window`}>
                    <div className="title-bar">
                        <div className="title-bar-text">{t('modal.title')}</div>
                    </div>
                    <div className={`${styles.windBody} window-body`}>
                        <p>{t('modal.message')}</p>
                        <button onClick={() => setOpen(false)}>{t('modal.ok')}</button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className={styles.content}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeUp}
            >
                <form className={styles.blockInputs} onSubmit={handleSubmit} noValidate>
                    <motion.div
                        className={`${styles.inputBox} field-row-stacked ${!isNameValid && name !== '' ? styles.error : ''}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                        viewport={{ once: false }}
                    >
                        <label htmlFor="text1">{t('form.name')}</label>
                        <input id="text1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {!isNameValid && name !== '' && (
                            <span className={styles.errorText}>{t('errors.name')}</span>
                        )}
                    </motion.div>

                    <motion.div
                        className={`${styles.inputBox} field-row-stacked ${!isEmailValid(email) && email !== '' ? styles.error : ''}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
                        viewport={{ once: false }}
                    >
                        <label htmlFor="text2">{t('form.email')}</label>
                        <input id="text2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {!isEmailValid(email) && email !== '' && (
                            <span className={styles.errorText}>{t('errors.email')}</span>
                        )}
                    </motion.div>

                    <motion.div
                        className={`${styles.inputBox} field-row-stacked ${!isMessageValid && message !== '' ? styles.error : ''}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
                        viewport={{ once: false }}
                    >
                        <label htmlFor="text3">{t('form.message')}</label>
                        <textarea id="text3" value={message} onChange={(e) => setMessage(e.target.value)} />
                        {!isMessageValid && message !== '' && (
                            <span className={styles.errorText}>{t('errors.message')}</span>
                        )}
                    </motion.div>

                    <motion.div
                        className={styles.btn}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
                        viewport={{ once: false }}
                    >
                        <button type="submit">{t('form.submit')}</button>
                    </motion.div>
                </form>

                <motion.div
                    className={styles.blockText}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                    viewport={{ once: false }}
                >
                    <p>{t('alternative')}</p>
                    <p>{t('social')}</p>
                    <div className={styles.linksList}>
                        <Link href={''}><button><div className={styles.mediaBtn}><Image src={'/telegram.svg'} alt="Telegram" fill/></div></button></Link>
                        <Link href={''}><button><div className={styles.mediaBtn}><Image src={'/whatsapp.svg'} alt="WhatsApp" fill/></div></button></Link>
                        <Link href={''}><button><div className={styles.mediaBtn}><Image src={'/mail.svg'} alt="Email" fill/></div></button></Link>
                    </div>
                    <div className={styles.links}>
                        <a href="mailto:VerbYuri@gmail.com">VerbYuri@gmail.com</a>
                        <a href="tel:+79999435877">+7 999 943-58-77</a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contacts;