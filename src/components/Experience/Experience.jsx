import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";

function Experience() {
    return (
        <section className={styles.container} id="experience">
            <div className={styles.header}>
                <h2 className={styles.title}>Experience</h2>
                <div className={styles.headerLine} />
            </div>
            <div className={styles.content}>
                <ul className={styles.history}>
                    <div className={styles.timelinePoint} />
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyHeader}>
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <p>
                                        {historyItem.organisation}
                                        <br />
                                        {`${historyItem.startDate} - ${historyItem.endDate}`}
                                    </p>
                                </div>
                                <div className={styles.historyItemDetails}>
                                    <h4>{historyItem.role}</h4>
                                    <p>{historyItem.experiences}</p>
                                </div>
                                <ul className={styles.skills}>
                                    {historyItem.skills.map((skill, id) => {
                                        return (
                                            <li key={id} className={styles.skill}>
                                                <div className={styles.skillContainer}>
                                                    <p>{skill}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                    <div className={styles.timelinePoint} />
                </ul>
            </div>
        </section>
    );
}

export default Experience;
