import React from 'react'
import styles from '../styles/page.module.css';

export const ProfileImage = () => {
    return (
        <div className={styles.images}>
            <img className={styles.largeImage} src='image-1.jpg' alt='' />
            <img src='image-2.jpg' alt='' />
            <img src='image-3.jpg' alt='' />
        </div>
    )
}
