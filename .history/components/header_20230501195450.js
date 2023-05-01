import React from 'react'
import styles from '../styles/header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.left}>
                <div className={styles.logo}>
                    HN
                </div>
                <div className={styles.title}>
                    Hacker Next
                </div>
            </div>
            <div className={styles.right}></div>
        </header>
    )
}

export default Header