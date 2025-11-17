"use client"
import React, {ReactNode} from 'react';
import styles from './modalWindow.module.scss'
interface Window {
    btn: ReactNode,
    content: ReactNode,
}
const ModalWindow = ({btn, content}: Window) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div onClick={() => {setIsOpen(true)}}>
                {btn}
            </div>
            <div className={styles.windowMain} onClick={() => setIsOpen(false)}
            style={isOpen ? {opacity: 1, zIndex: 999} : {opacity: 0, zIndex: -999}}
            >
                <div className={`${styles.windowContentMain} window`}
                onClick={(event) => event.stopPropagation()}
                     style={isOpen ? {scale: 1} : {scale: 0}}>
                    <div className="title-bar">
                        <div className="title-bar-text">CHOOSE YOUR LANGUAGE</div>
                        <div className="title-bar-controls">
                            <button aria-label="Close" onClick={() => {setIsOpen(false)}}/>
                        </div>
                    </div>
                    <div className={`${styles.windowsBodyContent}`}>
                        {content}
                    </div>
                    <div className="status-bar">
                    <p className="status-bar-field">Press F1 for help</p>
                        <p className="status-bar-field">Slide 1</p>
                        <p className="status-bar-field">CPU Usage: 14%</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;