import React from 'react'

interface IProps {
    children: React.ReactNode,
    title: string
}

import styles from './window.module.scss'

const Window = ({children, title}: IProps) => {
    return (
        <div className={`${styles.contentWindow} window window-white`}>
            <div className="title-bar title-bar-white">
                <div className="title-bar-text">{title}</div>

                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className={`${styles.bodyWindow} window-body window-body-white`}>
                {children}
            </div>
        </div>
    );
};

export default Window;