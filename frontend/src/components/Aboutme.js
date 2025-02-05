import React from 'react';
import styles from '../styles/aboutme.module.css'
import Navbar from '../components/navbar';

const AboutMe = () => {
    return (
        <>
        <div className={styles.aboutmediv}>
            <h1>About Me</h1>
            <p>This is the About Me page.</p>
            <p>skall ha länkar hära för varje del av sidan</p>
        </div>
        <div>
            <Navbar/>
        </div>
        </>
    );
};

export default AboutMe;





