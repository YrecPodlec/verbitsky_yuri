import React from 'react';
import styles from './language.module.scss'
import Image from "next/image";
const Language = () => {
    return (
            <button className={styles.select}>
                <div className={styles.ico}>
                    <Image
                        src="/ico/World.svg"
                        alt="logo"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <p>LANGUAGE</p>
            </button>
    );
};

export default Language;