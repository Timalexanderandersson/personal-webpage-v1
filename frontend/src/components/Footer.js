import React from 'react';
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerdiv}>
            <p>&copy; Tim Andersson. Denna sida är gjord med Django REST och React.</p>
        </footer>
    );
};

export default Footer;