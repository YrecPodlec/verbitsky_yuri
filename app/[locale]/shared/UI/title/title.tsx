import React from 'react';
interface TITLE {
    title: string;
}
import styles from './title.module.scss'
const Title = ({title}: TITLE) => {
    return (
        <div className={`${styles.windowTitle} window`}>
            <div className="title-bar">
                <div className="title-bar-text">TITLE</div>
            </div>
            <div className={`${styles.h1} window-body`}>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Title;