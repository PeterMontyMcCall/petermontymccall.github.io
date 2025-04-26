import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email_icon.png")} alt="Email icon" />
          <a href="mailto:pdminh2004@email.com">pdminh2004@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin_icon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/duc-minh-pham-818b58249/" target="_blank">linkedin.com/in/duc-minh-pham-818b58249/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github_icon.png")} alt="Github icon" />
          <a href="https://github.com/PeterMontyMcCall" target="_blank">github.com/PeterMontyMcCall</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact