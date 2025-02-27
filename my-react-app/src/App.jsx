import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import styles from './App.module.css'

function App() {

  return(
    <>
      <div className={styles.App}>
        <NavBar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </>
    
  );
}

export default App
