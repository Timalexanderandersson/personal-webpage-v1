import React from 'react';
import styles from '../styles/resume.module.css';

const Resumecont = () => {
    return (
        <div className={styles.resumediv} id="findithere">
            <div className={styles.resumercontainer}>
                <a href="/path/to/your/resume.pdf" download>
                    <button>
                        View Resume
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Resumecont;