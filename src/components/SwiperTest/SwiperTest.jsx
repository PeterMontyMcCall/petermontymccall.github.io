import styles from './SwiperTest.module.css'
// Swiper
import { useRef, useEffect } from 'react';
import { getImageUrl } from "../../utils"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slidesData = [
    {
        imgSrc: "projects/project.png",
        title: "Venice: The Floating City",
        description: "Known for its canals and historic charm, Venice invites visitors to explore its timeless beauty.",
        categories: ["Travel", "History"],
    },
    {
        imgSrc: "projects/project.png",
        title: "Top 10 Hidden Beaches to Visit",
        description: "Discover secluded beaches with crystal-clear waters and breathtaking views.",
        categories: ["Travel", "Adventure", "Nature"],
    },
    {
        imgSrc: "projects/project.png",
        title: "Interactive Art Museums",
        description: "Museums use mixed reality to let visitors interact with famous artworks in new ways.",
        categories: ["Art", "Museum", "Technology"],
    },
    {
        imgSrc: "projects/project.png",
        title: "The Rise of Co-Working Cafes",
        description: "Combining productivity with comfort, co-working cafes offer a perfect blend of work and relaxation.",
        categories: ["Trend", "Lifestyle"],
    },
    {
        imgSrc: "projects/project.png",
        title: "The Birth of Jazz",
        description: "Originating in New Orleans, jazz revolutionized music with its improvisation and soul.",
        categories: ["Music", "History", "Culture"],
    },
];

function SwiperTest() {
    const swiperWrappedRef = useRef(null);

    function adjustMargin() {
        const screenWidth = window.innerWidth;

        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft =
                screenWidth <= 520
                    ? "0px"
                    : screenWidth <= 650
                        ? "-50px"
                        : screenWidth <= 800 ? "-100px"
                            : "-150px";
        }

    }

    useEffect(() => {
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => window.removeEventListener("resize", adjustMargin);
    }, []);

    return (
        <main className={styles.main_test}>
            <div className={styles.container_test}>
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
                    onSwiper={(swiper) => {
                        swiperWrappedRef.current = swiper.wrapperEl;
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={getImageUrl(slide.imgSrc)} alt={slide.title} />
                            <div className={styles.title_test}>
                                <h1>{slide.title}</h1>
                            </div>
                            <div className={styles.content_test}>
                                <div className={styles.text_box_test}>
                                    <p>{slide.description}</p>
                                </div>
                                <div className={styles.footer_test}>
                                    <div className={styles.category_test}>
                                        {slide.categories.map((category, idx) => (
                                            <span key={idx} style={{ '--i': idx + 1 }}>
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <button>
                                        <span className={styles.label_test}>More..</span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
}

export default SwiperTest