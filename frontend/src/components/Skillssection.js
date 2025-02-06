import React from 'react';
import styles from '../styles/skillsection.module.css'

const SkillsSection = () => {
    return (
        <div className={styles.skillsectiondiv} id="skills" >
            <div className={styles.skillcontainer}>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML & CSS</li>
                    och utbildning
                </ul>
            </div>
        </div>
    );
};

export default SkillsSection;