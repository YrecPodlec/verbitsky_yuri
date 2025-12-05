"use client";
import styles from "./tabs.module.scss"
import React, { useState } from 'react';

interface TabPanel {
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    panels: TabPanel[];
}

const Tabs: React.FC<TabsProps> = ({ panels }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section}>
            {/* Кнопки */}
            <div className={styles.btnList}>
                {panels.map((panel, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)} className={activeIndex === index ? styles.active : styles.pageBtn }>
                        {panel.title}
                    </button>
                ))}
            </div>
            <div>
                {panels[activeIndex].content}
            </div>
        </section>
    );
};

export default Tabs;