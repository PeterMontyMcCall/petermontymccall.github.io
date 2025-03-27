import { useState } from 'react';
import styles from './About.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils'; 

function About() {
    return(
        <section className={styles.container} id="about">
            <div className={styles.header}>
                <h2 className={styles.title}>About</h2>
                <div className={styles.headerLine}/>
            </div>
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <p>Hello! I&apos;m Peter, a Computer Science student at Western University. I work with Java, Python,
                    C++, and build websites using React, HTML, and CSS. I focus on making user-friendly interfaces 
                    and setting up reliable back-end systems.</p>
                    <p> In my spare time, I enjoy exploring new frameworks and building projects. 
                    Always happy to connect and collaborate — feel free to reach out!</p>
                </div>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <Skill key={id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skill({ id, skill }) {
    const [hover, setHover] = useState(false);

    return (
        <div key={id} className={styles.skill}>
            <div 
                className={styles.skillImageContainer}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img src={getImageUrl(hover ? skill.hoverImageSrc : skill.imageSrc)} alt={skill.title}/>
            </div>
            <p>{skill.title}</p>
        </div>
    );
}

export default About