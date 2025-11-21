"use client"
import React, { useState } from 'react';
import { dataLanguage, Flag } from "@/app/[locale]/shared";
import Link from "next/link";
import styles from './languages.module.scss';

const Languages = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const data = dataLanguage;

    // Фильтруем страны по введённому языку
    const filteredData = data
        .map(section => ({
            ...section,
            countries: section.countries.filter(
                country =>
                    country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    country.country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(section => section.countries.length > 0); // убираем пустые секции

    return (
        <section className={styles.section}>
            {/* Поисковая строка */}
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search language..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            {/* Секции с странами */}
            {filteredData.map((item, i) => (
                <div key={i} className={styles.content}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div className={styles.listCountries}>
                        {item.countries.map((value, index) => (
                            <Link href={value.href} key={index} className={styles.country}>
                                <Flag src={value.flag} alt={value.country} />
                                <div className={styles.names}>
                                    <h1>{value.country}</h1>
                                    <span>{value.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Languages;
