import styles from './Projects.module.css'
import ProjectCard from './ProjectCard.jsx'
import projects from "../../data/projects.json"

function Projects() {
    return(
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.headerLine}/>
            </div>
            <div className={styles.projects}>{
                projects.map((project, id) => {
                    return (
                       <ProjectCard key={id} project={project}/>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects