import 'animate.css';
import styles from "./styles/page.module.css";
import { Header } from "./components/Header";
import { ProfileImage } from "./components/ProfileImage";
import { ContactForm } from "./components/ContactForm";
import { About } from "./components/About";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.item}>
            <ProfileImage />
          </div>
          <div className={`animate__animated animate__fadeIn animate__slow ${styles.item}`}>
            <Header />
            <About />
            <Interests />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
