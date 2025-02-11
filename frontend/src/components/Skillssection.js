import React from 'react';
import styles from '../styles/skillsection.module.css'

const SkillsSection = () => {
    return (
        <div className={styles.skillsectiondiv} id="skills" >
            <div className={styles.skillcontainer}>
                <h2>Teknisk Kompetens</h2>
                <div className={styles.containsall}>

                    <div className={styles.divfirsttop}>
                        <div className={styles.technopart}>
                            <h5 className={styles.heading}>Teknologier</h5>
                            <ul className={styles.deletliststyle}>
                                <li>React</li>
                                <li>Python</li>
                                <li>Django REST</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className={styles.database}>
                            <h5 className={styles.heading}>Database</h5>
                            <ul className={styles.deletliststyle}>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>

                        <div className={styles.tools}>
                            <h5 className={styles.heading}>Ramverk & Bibliotek</h5>
                            <ul className={styles.deletliststyle}>
                                <li>Django</li>
                                <li>Django REST</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.divfirstbottom}>
                        <div className={styles.versionss}>
                            <h5 className={styles.heading}>Versionshantering</h5>
                            <ul className={styles.deletliststyle}>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </div>

                        <div className={styles.distrubuuut}>
                            <h5 className={styles.heading}>Distribution</h5>
                            <ul className={styles.deletliststyle}>
                                <li>Heroku</li>
                            </ul>
                        </div>

                        <div className={styles.testing}>
                            <h5 className={styles.heading}>Testing</h5>
                            <ul className={styles.deletliststyle}>
                                <li>Django testing(pytest)</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SkillsSection;