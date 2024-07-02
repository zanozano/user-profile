import React from 'react'
import styles from '../styles/page.module.css';
import user from '../data/user.json';

export const Header = () => {

    const { name, username, profileImage } = user.header;

    return (
        <div className={styles.header}>
            <div>
                <p>Nombre de usuario</p>
                <h2>
                    {name}
                </h2>
                <p>{username}</p>
            </div>
        </div>
    )
}
