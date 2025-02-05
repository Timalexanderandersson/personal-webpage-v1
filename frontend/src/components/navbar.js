import React from 'react';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbardiv}>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="mailto:timalexanderandersson@hotmail.com">Contact</a></li>
                <li><a href="messageme">Skicka meddelande</a></li>
                <li><a href="/path/to/your-resume.pdf" download>Download Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;