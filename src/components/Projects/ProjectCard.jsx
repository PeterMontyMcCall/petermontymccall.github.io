import styles from './ProjectCard.module.css'
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx'
import { getImageUrl } from "../../utils"

function ProjectCard({
    project: { title, imageSrc, description, skills, source, modalData }
}) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className={styles.container} onClick={toggleModal}>
                <div className={styles.projectImage}>
                    <div className={styles.projectImageContainer}>
                        <img
                            src={getImageUrl(imageSrc)}
                            alt={`Image of ${title}`}
                        />
                    </div>
                </div>
                <div className={styles.projectContent}>
                    <p className={styles.skills}>{skills}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.headerLine} />
                        <a
                            href={source}
                            className={styles.link}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={getImageUrl("skills/github_icon.png")} alt="GitHub Icon" /></a>
                    </div>
                </div>
            </div>

            {modal && (
                <Modal onClose={toggleModal} title={title} imageSrc={imageSrc} source={source} modalData={modalData} />
            )}
        </>
    );
}

export default ProjectCard