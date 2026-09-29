import {FaGithub, FaLinkedin, FaEnvelope,} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <h2 className="footer-logo"> &lt;Milena /&gt;</h2>

                <p className="footer-text">Desenvolvedora JavaScript criando soluções web modernas, funcionais e significativas.</p>

                <div className="footer-socials">

                    <a href="https://github.com/MilenaMP/"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/milena-pessoa/"><FaLinkedin/></a>
                    <a href="mailto:milenapessoa.am@gmail.com" aria-label="Enviar e-mail"><FaEnvelope/></a>

                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Milena Pessoa. All rights reserved.</p>
            </div>
        </footer>
    )
}