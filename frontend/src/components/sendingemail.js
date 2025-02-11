import React from 'react';
import styles from '../styles/sendingemail.module.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const SendingEmail = () => {

    const [input, setInput] = useState({
        name: '',
        email_here: '',
        description: ''
    });
    const { name, email_here, description } = input;
    const [errors, setErrors] = useState({});

    const handleChangeing = e => {
        setInput({ ...input, [e.target.name]: e.target.value });

    }

    const handlingSubmit = async (e) => {
        e.preventDefault();
        try {
            

        } catch (error) {
            setErrors(error.response.data)
        }

    }

    return (
        <div className={styles.sendingemaildiv} id="message">
            <div className={styles.emailcontainer}>
                <h4 className={styles.heading}>Frågor eller funderingar?</h4>
                <h4 className={styles.heading}>skicka ett meddelande till mig!</h4>
                <Form className={styles.formcontainer} onSubmit={handlingSubmit}>
                    <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlInput1">
                        <Form.Label className={styles.alllmylables}>Namn</Form.Label>
                        {errors.name}
                        <Form.Control type="text"
                            placeholder="Skriv ditt namn här!"
                            name="name"
                            value={name}
                            onChange={handleChangeing}
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlInput1">
                        <Form.Label className={styles.alllmylables}>Email</Form.Label>
                        {errors.email_here}
                        <Form.Control type="email"
                            placeholder="Skriv din email här!"
                            name="email_here"
                            value={email_here}
                            onChange={handleChangeing}
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={styles.alllmylables}>Vad är din fråga?</Form.Label>
                        {errors.description}
                        <Form.Control as="textarea" rows={3}
                            name="description"
                            value={description}
                            onChange={handleChangeing}
                        />
                    </Form.Group>
                    <button className={styles.coolbutton}>skicka email</button>
                </Form>
            </div>
        </div>
    );
};

export default SendingEmail;