import React from 'react';
import styles from '../styles/foraboutme.module.css'

const Allaboutbio = () => {
    return (
    <div className={styles.storadiv} id="Bio">
        <div className={styles.aboutmecontainer}>
            <h2 className='mb-3 text-center'>Om mig</h2>
            
            <p className={styles.paragraphname}> Jag heter Tim Andersson och kommer från Norrland. Jag har ett stort intresse för teknik och problemlösning, och jag älskar att förstå hur saker fungerar på djupet. För mig handlar utveckling inte bara om kod, utan om hela processen från att hitta lösningar till att samarbeta med andra för att skapa något bra.

När jag inte kodar, spenderar jag min tid på träning, musik och läsning, i den ordningen. Tidigare har jag arbetat med innovationer inom värmelösningar för vindkraft, där jag har varit involverad i utvecklingen av värmepaneler och värmemattor, samt deltagit i prototyputveckling för olika projekt.
            </p>
            <div className={styles.hrContainer}>
                <hr className={styles.fixingit}/>
                
            </div>
        </div>
    </div>
    );
};

export default Allaboutbio;