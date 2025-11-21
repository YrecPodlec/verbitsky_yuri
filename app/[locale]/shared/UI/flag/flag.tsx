import React from 'react';
import styles from './flag.module.scss'
import Image from "next/image";
interface Props {
    src: string;
    alt: string;
}
const Flag = ({src, alt}: Props) => {
    return (
        <div className={styles.flag}>
            <Image src={src} alt={alt} fill />
        </div>
    );
};

export default Flag;