import React from 'react';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbardiv}>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="mailto:timalexanderandersson@hotmail.com">kontakta mig</a></li>
                <li><a href="#message">Skicka meddelande</a></li>
                <li><a href="#findithere">cv</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;