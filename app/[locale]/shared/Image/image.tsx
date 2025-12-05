"use client"
import React from 'react';
import Image from 'next/image';
import styles from './image.module.scss'

import { motion } from "motion/react";
interface Props {
    src: string;
    alt: string;
}
const ImageWelcome = ({src, alt}: Props) => {
    return (
        <div className={styles.image}        >
            <Image
                src={src}
                alt={alt}
                fill
            />
        </div>
    );
};

export default ImageWelcome;