"use client";
import styles from '../styles/page.module.css';
import { useContactForm } from '../hooks/useContactForm';

export const ContactForm = () => {
    const { formData, handleChange, handleSubmit } = useContactForm();

    return (
        <div className={styles.form}>
            <h2>Contactame</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Ingresa tu nombre*'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Ingresa tu email*'
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Ingresa tu mensaje*'
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
