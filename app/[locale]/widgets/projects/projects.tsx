"use client";

import React from 'react';
import { Title, Window } from "@/app/[locale]/shared";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from './projects.module.scss';
import { Pagination } from "@/app/[locale]/features";
import { dataProjects } from "@/app/[locale]/shared/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Анимация для одной карточки
const AnimatedProjectCard = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.4,
                delay: index * 0.25,
                ease: "easeOut"
            }}
            whileHover={{
                y: -12,
                scale: 1.04,
                transition: { duration: 0.3 }
            }}
            className={styles.boxInner}
        >
            <Window title={project.title}>
                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                        className={styles.image}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Image
                            src={project.photo}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                </Link>
            </Window>
        </motion.div>
    );
};

const Projects = () => {
    const t = useTranslations('navbar');

    return (
        <motion.section className={styles.section} id="projects"
                 initial={{ opacity: 0, y: 80 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -40 }}
                 viewport={{
                     once: false,
                     amount: 0.2,
                     margin: "-10% 0% -10% 0%"
                 }}
        >
            <Title title={t('projects')} />
            <p className={styles.p}>
                Click the Project you prefer and see more Information
            </p>

            <div className={styles.content}>
                <Pagination
                    data={dataProjects}
                    itemsPerPage={2}
                    renderItems={(items) => (
                        <div className={styles.windowsContainer}>
                            {items.map((project, index) => (
                                <AnimatedProjectCard
                                    key={project.title}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    )}
                />
            </div>
        </motion.section>
    );
};

export default Projects;