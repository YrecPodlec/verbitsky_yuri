import React from 'react';
import {Logo} from "@/app/shared";
import styles from './navbar.module.scss'
import Link from "next/link";
const Navbar = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <nav className={styles.nav}>
                <Link href={''}><button>ABOUT ME</button></Link>
                <Link href={''}><button>PROJECTS</button></Link>
                <Link href={''}><button>SKILLS</button></Link>
                <Link href={''}><button>CONTACTS</button></Link>
            </nav>
        </header>
    );
};

export default Navbar;