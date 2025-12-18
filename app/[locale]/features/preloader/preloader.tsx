"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // ← добавили импорт
import styles from "./preloader.module.scss";

export default function Win98Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 100);
                    return 100;
                }
                return Math.min(prev + 1.8, 100);
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={styles.preloader}>
            <div className={styles.logo}>
                <Image
                    src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
                    alt="Windows 98"
                    width={48}
                    height={48}
                    priority={true}
                    unoptimized={true}
                />
            </div>

            <div className={styles.text}>
                <p className={styles.title}>MICROSOFT WINDOWS 98</p>
                <p className={styles.subtitle}>Starting up...</p>
            </div>

            <div className={styles.progressContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className={styles.copyright}>© Yuri Verbitsky 2025</p>
        </div>
    );
}