import React from 'react';
import styles from './navbar.module.scss'
import Link from "next/link";
import {Language, Logo} from "@/app/[locale]/shared";
import {useTranslations} from "next-intl";
const Navbar = () => {
    const translateBtns = useTranslations('navbar')
    return (
        <header className={styles.header}>
            <Logo/>
            <nav className={styles.nav}>
                <Link href={''}><button>{translateBtns('about')}</button></Link>
                <Link href={''}><button>{translateBtns('projects')}</button></Link>
                <Link href={''}><button>{translateBtns('skills')}</button></Link>
                <Link href={''}><button>{translateBtns('contacts')}</button></Link>
                <Language/>
            </nav>
        </header>
    );
};

export default Navbar;