"use client";

import React from 'react';
import { Title, Window } from "@/app/[locale]/shared";
import styles from './skills.module.scss';
import { Tabs } from "@/app/[locale]/features";
import { skillsData } from "@/app/[locale]/shared/data/tabs";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Skills = () => {
    const translate = useTranslations('tabs');

    const tabPanels = skillsData.map((tab) => ({
        title: tab.category,
        content: (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.tabPanel}
            >
                <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className={styles.categoryTitle}
                >
                    {tab.category.toUpperCase()}
                </motion.h1>

                <div className={styles.skillList}>
                    {tab.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className={styles.skillItem}
                        >
                            <div className={styles.imageBox}>
                                <div className={styles.skillPhoto}>
                                    <Image src={skill.ico} alt={skill.label} fill />
                                </div>
                                <span className={styles.skillText}>{skill.label}</span>
                            </div>

                            {/* Анимированный прогресс-бар */}
                            <div className={`${styles.contentBar} progress-indicator`}>
                                <motion.span
                                    className="progress-indicator-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.progress }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className={styles.progressProc}
                                >
                                    {skill.progress}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
                        className={styles.intoWindow}
                    >
                        <Window title={tab.category}>
                            <div>
                                {translate(tab.text).split('\n').map((line: string, i: number) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </Window>
                    </motion.div>
                </div>
            </motion.div>
        ),
    }));

    return (
        <section className={styles.section} id="skills">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
            >
                <Title title="Skills" />
            </motion.div>

            <Tabs panels={tabPanels} />
        </section>
    );
};

export default Skills;