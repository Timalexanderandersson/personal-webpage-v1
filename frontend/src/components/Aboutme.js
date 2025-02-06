import React from 'react';
import styles from '../styles/aboutme.module.css'
import Navbar from '../components/navbar';

const AboutMe = () => {
    return (
        <>
            <div className={styles.aboutmediv}>
                <h1 className='mt-3'>Tim Andersson</h1>
                <p><strong>Välkommen!</strong>
                    Denna sida är skapad för visa mina projekt,
                        ge dig möjlighet att ladda ner mitt CV och hitta kontaktinformation om du vill samarbeta eller bara vill veta mer.
                       
                </p>
                <div className={styles.links}>
                    <div className={styles.githublink}>
                        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer"><i className={`${styles.iconlife} fa-brands fa-github`}></i></a>
                    </div>
                    <div className={styles.linkedinlink}>
                        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className={styles.instagramlink}>
                        <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </>
    );
};

export default AboutMe;





