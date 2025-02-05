import React from "react";
import styles from '../styles/myprojects.module.css'

const Myprojectscomp =  () => {
    return (
        <div className={styles.projectsdiv}>
            <h2>This is my projects right here!</h2>
            <p>Denna skall innehava Länkar med iconer till github samt bilder och beskrivning på projecten </p>
            <h2>Lägg till iconer med tex. JavaScript, django rest etc</h2>
        </div>
    )
}

export default Myprojectscomp;