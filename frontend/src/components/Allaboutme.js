import React from 'react';
import styles from '../styles/foraboutme.module.css'

const Allaboutbio = () => {
    return (
    <div className={styles.storadiv} id="Bio">
            <div className={styles.aboutmecontainer}>
                <h2 className='mb-3 text-center'>Om mig</h2>
                <p> Mitt Namn är Tim Andersson , uppväxt i norrland. Jag har ett stort intresse för teknik och problemlösning, och jag älskar att förstå hur saker fungerar på djupet. Mitt intresse för utveckling handlar inte bara om kod jag tycker om hela byggprocessen, från att hitta lösningar till att samarbeta med andra. Förutom kodning spenderar jag min tid på att träna och läsa, vilket hjälper mig att hålla mig fokuserad och utvecklas både professionellt och personligt. Jag är också väldigt noga som person och ser till att alltid hålla fokus på det jag lovar och leverera det jag åtar mig. Tidigare har jag arbetat med innovationer inom värmelösningar för vindkraft,
                    där jag har varit involverad i utvecklingen av värmepaneler och värmemattor,
                    samt deltagit i prototyputveckling för olika projekt.
                    Den erfarenheten har gett mig en bredare förståelse för hur tekniska lösningar kan tillämpas inom olika områden.

                </p>
                <hr className={styles.fixingit}/>
                <hr className={styles.fixingit2}/>
                <hr className={styles.fixingit3}/>
                <hr className={styles.fixingit4}/>
                <hr className={styles.fixingit5}/>
                
            </div>
            
        </div>
    
    );
};

export default Allaboutbio;