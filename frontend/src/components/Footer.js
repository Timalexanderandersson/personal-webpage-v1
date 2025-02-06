import React from 'react';
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerdiv}>
            <div className={styles.footericons}>
                <p>&copy; Tim Andersson.</p>
            <p> Denna websida är gjord med Django REST <i class="fa-brands fa-python"> </i> och med React <i class="fa-brands fa-react"></i>.</p>
            </div>
        </footer>
    );
};

export default Footer;