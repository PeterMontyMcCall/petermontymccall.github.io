import styles from './ProjectCard.module.css'
import { getImageUrl } from "../../utils"

function ProjectCard({
    project: { title, imageSrc, description, skills, source }
}) {
    return (
        <div className={styles.container}>
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
                    <a href={source} className={styles.link}><img src={getImageUrl("skills/github_icon.png")} alt="GitHub Icon" /></a>
                </div>
            </div>

        </div>
    );
}

export default ProjectCard