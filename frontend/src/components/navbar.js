import React from 'react';
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className={styles.navbardiv}>
            <div className={styles.linkContainer}>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="/#projects">Projekt</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="/#skills" >Skills</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="mailto:timalexanderandersson@hotmail.com">Kontakta mig</a></div>
                <div className={styles.linkWrapper}><Link className={styles.navLink} to="/kontakt">Skicka meddelande</Link></div>
            </div>
        </nav>
    );
};

export default Navbar;