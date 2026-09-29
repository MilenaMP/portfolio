import { motion } from "framer-motion";
import "./about.css";

export default function About() {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="about-header">

                <p className="section-subtitle">
                    About Me
                </p>

                <h2 className="section-title">
                    Desenvolvedora <span>JavaScript</span>
                </h2>

            </div>

            <div className="about-content">

                <div className="about-text">

                    <p>
                        Sou <strong>desenvolvedora JavaScript</strong> e
                        estudante de Ciência da Computação, com foco no
                        desenvolvimento de aplicações web.
                    </p>

                    <p>
                        Minha jornada começou no <strong>Front-end</strong>,
                        desenvolvendo interfaces com HTML, CSS, JavaScript
                        e React. Com o tempo, ampliei meus conhecimentos
                        para o <strong>Back-end</strong>, explorando
                        Node.js, Express, APIs REST e bancos de dados.
                    </p>

                    <p>
                        Atualmente, venho aprofundando meus conhecimentos
                        em <strong>TypeScript, cibersegurança, Inteligência
                        Artificial e automação</strong>, sempre buscando
                        transformar aprendizado em projetos práticos e
                        soluções reais.
                    </p>

                </div>

                <div className="about-cards">

                    <div className="about-card">
                        <h3>JavaScript</h3>
                        <p>Desenvolvimento Web</p>
                    </div>

                    <div className="about-card">
                        <h3>Front-end</h3>
                        <p>React & Interfaces</p>
                    </div>

                    <div className="about-card">
                        <h3>Back-end</h3>
                        <p>Node.js, Express & APIs</p>
                    </div>

                    <div className="about-card">
                        <h3>IA & Automação</h3>
                        <p>Agentes de IA & n8n</p>
                    </div>

                </div>

            </div>

        </motion.section>
    );
}