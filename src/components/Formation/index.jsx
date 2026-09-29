import { motion } from "framer-motion";
import "./formation.css";

export default function Formation() {
    const developmentCourses = [
        {
            title: "JavaScript do Básico ao Avançado",
            institution: "Luiz Otávio Miranda — Udemy",
            year: "Em desenvolvimento",
            status: "Em andamento",
        },
        {
            title: "Formação Node.js Fundamentals",
            institution: "Felipe Aguiar — DIO",
            year: "2026",
            status: "Concluído",
        },
        {
            title: "Formação Front-end",
            institution: "Alura",
            year: "2024",
            status: "Concluído",
        },
    ];

    return (
        <section className="formation" id="formation">

            <div className="formation-header">
                <p className="section-subtitle">Minha Formação</p>

                <h2 className="section-title">
                    Formação <span>Prática</span>
                </h2>

                <p className="formation-description">
                    Minha trajetória acadêmica e as formações práticas que
                    contribuem para minha evolução como desenvolvedora.
                </p>
            </div>

            {/* =========================
                FORMAÇÃO ACADÊMICA
            ========================= */}

            <motion.div
                className="academic-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="formation-icon">
                    🎓
                </div>

                <div className="academic-content">
                    <span className="formation-label">
                        Formação Acadêmica
                    </span>

                    <h3>Ciência da Computação</h3>

                    <p className="institution">
                        Anhanguera
                    </p>

                    <span className="formation-status">
                        Em andamento · Conclusão prevista para junho de 2027
                    </span>
                </div>
            </motion.div>


            {/* =========================
                DESENVOLVIMENTO WEB
            ========================= */}

            <div className="formation-section">

                <div className="formation-section-title">
                    <span className="formation-section-icon">💻</span>

                    <div>
                        <h3>Desenvolvimento Web</h3>

                        <p>
                            Cursos e formações voltados ao desenvolvimento
                            de aplicações web.
                        </p>
                    </div>
                </div>


                <div className="formation-grid">

                    {developmentCourses.map((course, index) => (
                        <motion.article
                            className="formation-card"
                            key={course.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >

                            <div className="formation-card-top">

                                <span className="course-type">
                                    Curso
                                </span>

                                <span
                                    className={`course-status ${
                                        course.status === "Concluído"
                                            ? "completed"
                                            : "in-progress"
                                    }`}
                                >
                                    {course.status === "Concluído"
                                        ? "✓ Concluído"
                                        : "Em andamento"}
                                </span>

                            </div>

                            <h4>{course.title}</h4>

                            <p className="course-institution">
                                {course.institution}
                            </p>

                            <span className="course-year">
                                {course.year}
                            </span>

                        </motion.article>
                    ))}

                </div>

            </div>


            {/* =========================
                BOOTCAMPS
            ========================= */}

            <div className="formation-section">

                <div className="formation-section-title">
                    <span className="formation-section-icon">🚀</span>

                    <div>
                        <h3>Bootcamps</h3>

                        <p>
                            Experiências práticas focadas no desenvolvimento
                            de software.
                        </p>
                    </div>
                </div>


                <motion.article
                    className="featured-formation-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="featured-formation-header">

                        <div>
                            <span className="course-type">
                                Bootcamp
                            </span>

                            <h4>
                                Sem Parar Corpay — Back-end do Zero à Prática
                            </h4>

                            <p className="course-institution">
                                DIO · 2026
                            </p>
                        </div>

                        <span className="course-status completed">
                            ✓ Concluído
                        </span>

                    </div>


                    <p className="formation-card-description">
                        Formação prática voltada ao desenvolvimento Back-end,
                        explorando tecnologias e conceitos do ecossistema
                        JavaScript e Node.js.
                    </p>


                    <div className="formation-tags">

                        <span>JavaScript</span>
                        <span>Node.js</span>
                        <span>APIs REST</span>
                        <span>Express</span>
                        <span>TypeScript</span>
                        <span>Bancos de dados</span>

                    </div>

                </motion.article>

            </div>


            {/* =========================
                INTELIGÊNCIA ARTIFICIAL
            ========================= */}

            <div className="formation-section">

                <div className="formation-section-title">
                    <span className="formation-section-icon">🤖</span>

                    <div>
                        <h3>Inteligência Artificial & Agentes</h3>

                        <p>
                            Estudos e experiências práticas com agentes de IA
                            aplicados ao desenvolvimento de software.
                        </p>
                    </div>
                </div>


                <motion.article
                    className="featured-formation-card ai-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="featured-formation-header">

                        <div>
                            <span className="course-type">
                                Aceleração
                            </span>

                            <h4>
                                Microsoft Foundry Agentic Engineer
                            </h4>

                            <p className="course-institution">
                                DIO · 2026
                            </p>
                        </div>

                        <span className="course-status completed">
                            ✓ Concluído
                        </span>

                    </div>


                    <p className="formation-card-description">
                        Formação prática focada no desenvolvimento e
                        integração de agentes de Inteligência Artificial
                        ao fluxo de desenvolvimento de software.
                    </p>


                    <div className="formation-tags">

                        <span>Microsoft Foundry</span>
                        <span>GitHub Copilot</span>
                        <span>AGENTS.md</span>
                        <span>Instructions</span>
                        <span>Skills</span>
                        <span>GitHub Actions</span>
                        <span>Code Review</span>

                    </div>

                </motion.article>

            </div>

        </section>
    );
}