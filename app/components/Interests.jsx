import styles from '../styles/page.module.css';
import user from '../data/user.json';
export const Interests = () => {

    const interests = user.interests;

    return (
        <div className={styles.interest}>
            <h2>Mis Intereses</h2>
            <div>
                {interests.map((interest, index) => (
                    <span key={index}>{interest}</span>
                ))}
            </div>
        </div>
    )
}
