import styles from './Projects.module.css'
import ProjectCard from './ProjectCard.jsx'
import projects from "../../data/projects.json"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Projects() {
    return (
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.headerLine} />
            </div>

            <main className={styles.sliderContainer}>
                <div className={styles.projects}>
                    <Swiper
                        modules={[Pagination]}
                        grabCursor
                        initialSlide={2}
                        centeredSlides
                        slidesPerView="auto"
                        speed={800}
                        slideToClickedSlide
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: { spaceBetween: 40 },
                            650: { spaceBetween: 30 },
                            1000: { spaceBetween: 20 }
                        }}
                    >
                        {projects.map((project, id) => (
                            <SwiperSlide key={id}>
                                <ProjectCard key={id} project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>


            {/* <div className={styles.projects}>{
                projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    );
                })}
            </div> */}

        </section>
    );
}

export default Projects