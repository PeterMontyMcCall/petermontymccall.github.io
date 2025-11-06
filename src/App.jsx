import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import SwiperTest from './components/SwiperTest/SwiperTest.jsx'
import styles from './App.module.css'

function App() {

  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <SwiperTest /> */}
        <Contact />
      </div>
    </>
  );
}

export default App
