import styles from "./styles/page.module.css";
import { Header } from "./components/Header";
import { ProfileImage } from "./components/ProfileImage";
import { ContactForm } from "./components/ContactForm";



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.item}>
          <ProfileImage />
        </div>
        <div className={styles.item}>
          <Header />

          <ContactForm />
        </div>
      </div>

    </main>
  );
}
