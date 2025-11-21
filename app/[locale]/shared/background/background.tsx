import React from 'react';
import Image from "next/image";
import styles from './back.module.scss'
interface IProps {
    img: string;
}
const Background = ({img}: IProps) => {
    return (
        <div className={styles.back}>
            <Image src={img} alt={'background'} fill/>
        </div>
    );
};

export default Background;