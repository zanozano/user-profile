import styles from '../styles/page.module.css';

export const ProfileImage = () => {
    return (
        <div className={styles.images}>
            <img className={styles.largeImage} src='image-1.jpg' alt='profile-1' />
            <img src='image-2.jpg' alt='profile-2' />
            <img src='image-3.jpg' alt='profile-3' />
        </div>
    )
}
