import React from 'react'
import styles from '../styles/page.module.css';
import user from '../data/user.json';

export const About = () => {

    const { description } = user.about;

    return (
        <div className={styles.about}>
            <h2>Sobre mi</h2>
            <p>
                {description}
            </p>
        </div>
    )
}
