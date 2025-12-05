import React from 'react';
import styles from './navbar.module.scss'
import Link from "next/link";
import {Language, Logo} from "@/app/[locale]/shared";
import {useTranslations} from "next-intl";
import {Languages, ModalWindow} from "@/app/[locale]/widgets";
const Navbar = () => {
    const translateBtns = useTranslations('navbar')
    return (
        <header className={styles.header}>
            <Logo/>
            <input type="checkbox" id="nav-toggle" className={styles.burgerInput} />

            <label htmlFor="nav-toggle" className={styles.burgerLabel}>
                <span className={styles.burgerIcon}></span>
            </label>
            <nav className={styles.nav}>
                <Link href={'#about'}><button>{translateBtns('about')}</button></Link>
                <Link href={'#projects'}><button>{translateBtns('projects')}</button></Link>
                <Link href={'#skills'}><button>{translateBtns('skills')}</button></Link>
                <Link href={'#contacts'}><button>{translateBtns('contacts')}</button></Link>
            </nav>
            <ModalWindow btn={<Language/>} content={
                <Languages/>
            }/>
        </header>
    );
};

export default Navbar;