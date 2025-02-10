import React from 'react';
import styles from '../styles/skillsection.module.css'

const SkillsSection = () => {
    return (
        <div className={styles.skillsectiondiv} id="skills" >
            <div className={styles.skillcontainer}>
                <h2>Teknisk Kompetens</h2>
                <div className={styles.containsall}>
                <div className={styles.technopart}>
                    <h5>Teknologier</h5>
                    <ul>
                        <li>React</li>
                        <li>Python</li>
                        <li>Django REST</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div className={styles.database}>
                    <h5>Database</h5>
                    <ul>
                        <li>PostgreSQL</li>
                    </ul>
                </div>



                <div className={styles.tools}>
                    <h5>Ramverk & Bibliotek</h5>
                    <ul>
                        <li>Django</li>
                        <li>Django REST</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    </div>

                    <div className={styles.versionss}>
                    <h5>Versionshantering</h5>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                    </div>


                    <div className={styles.distrubuuut}>
                    <h5>Distribution</h5>
                    <ul>
                        <li>Heroku</li>
                    </ul>
                    </div>

                    <div className={styles.testing}>
                    <h5>Testing</h5>
                    <ul>
                        <li>Django testing(pytest)</li>
                    </ul>
                    </div>


                </div>
               
            </div>
        </div>
    );
};

export default SkillsSection;