import styles from './Modal.module.css'
import { getImageUrl } from "../../utils"
import { useEffect } from "react";

function Modal({ onClose, title, imageSrc, source, modalData }) {
    useEffect(() => {
        // Disable scrolling on the main page when modal is open
        document.body.style.overflow = "hidden";
        return () => {
            // Restore scrolling when modal closes
            document.body.style.overflow = "unset";
        };
    }, [])

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </button>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h1 className={styles.title}>{title}</h1>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
                <div className={styles.description}>
                    <h2>About</h2>
                    <p className={styles.about}>{modalData.about}</p>
                    <h2>Contribution</h2>
                    <ul className={styles.contributions}>
                        {modalData.contributions.map((contribution, id) => {
                            return (
                                <li key={id}>{contribution}</li>
                            );
                        })}
                    </ul>
                    <div className={styles.link}>
                        <a href={source} target="_blank" rel="noopener noreferrer"><img src={getImageUrl("skills/github_icon.png")} alt="GitHub Icon" />source code</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Modal;