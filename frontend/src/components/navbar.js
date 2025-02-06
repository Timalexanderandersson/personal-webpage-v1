import React from 'react';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbardiv}>
            <div className={styles.linkContainer}>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="#projects">Projekt</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="#skills">Skills</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="mailto:timalexanderandersson@hotmail.com">Kontakta mig</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="#message">Skicka meddelande</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="#findithere">CV</a></div>
            </div>
        </nav>
    );
};

export default Navbar;