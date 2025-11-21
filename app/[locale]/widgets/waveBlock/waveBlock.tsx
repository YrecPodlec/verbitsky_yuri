import React from 'react';
import styles from './waveBlock.module.scss';
import {Title} from "@/app/[locale]/shared";

const WaveBlock = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.box}>
                    <Title title={'ABOUT ME'}/>
                    <div className={styles.content}>
                        <p>
                            Four years ago, I tried my hand at web development for the first time at university. Honestly,
                            at that time I thought I would go to game dev, but the code for websites suddenly tightened.
                            {<br/>}
                            {<br/>}
                            {<br/>}
                            Since then, {`I've`} been expanding my horizons: from the first simple pages,
                            {`I've`} moved on to a full-fledged workbench, trying different technologies and approaches to
                            creating interfaces.
                        </p>
                        <span>
                    {`I'm currently studying at my second university, testing new techniques and frameworks, 
                        and constantly looking for fresh ways to make the web faster, more convenient, and more beautiful.`}
                </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WaveBlock;