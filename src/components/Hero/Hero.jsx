import styles from './Hero.module.css'
import { getImageUrl } from "../../utils";

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Peter Pham</h1>
                <p className={styles.description}>I'm an undergraduate Computer Science student at Western University. I specialize in frontend and backend development.</p>
                <a href="mailto:pdminh2004@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("profile_picture.png")} alt="Headshot Picture" className={styles.heroImg}></img>
        </section>
    );
}

export default Hero