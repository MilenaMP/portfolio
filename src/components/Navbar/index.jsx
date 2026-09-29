import { useState} from "react"
import { FaBars, FaTimes,} from "react-icons/fa"
import "./navbar.css"


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <header className="navbar">
            <h1 className="logo"> &lt;Milena /&gt;</h1>

            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#formation">Formations</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div >
            <div className={menuOpen  ? "mobile-menu active" : "mobile-menu"}> 
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#formation" onClick={() => setMenuOpen(false)}>Formations</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            
        </header>
    )
}