import React from 'react';
import Image from "next/image";
import styles from './back.module.scss'
const Background = () => {
    return (
        <div className={styles.back}>
            <Image src={'/back.png'} alt={'background'} fill/>
        </div>
    );
};

export default Background;