import React from 'react';
import styles from '../styles/skillsection.module.css'

const SkillsSection = () => {
    return (
        <div className={styles.skillsectiondiv} id="skills" >
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                och utbildning
            </ul>
        </div>
    );
};

export default SkillsSection;