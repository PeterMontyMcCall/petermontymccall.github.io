import styles from './Navbar.module.css'

function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <a href="/">Portfolio</a>
                <div>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Project</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
}

export default NavBar