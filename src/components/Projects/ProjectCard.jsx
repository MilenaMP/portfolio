import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, featured = false }) {
    return (

        <motion.article
            className={`project-card ${featured} ? "featured-card" : ""}`}

            whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: -2
            }}

            transition={{
                type: "spring",
                stiffness: 200
            }}
        >

            <div className={featured ? "featured-layout" : "project-layout"}>

                <div className={featured ? "featured-image" : "project-image"}>
                    <BrowserMockup
                        image={project.image}
                        title={project.title}
                        url={project.url}
                    />
                </div>

                <div className="project-content">

                    <p className="project-type">
                        {featured ? "Projeto em destaque" : "Projeto"}
                    </p>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-techs">
                        {project.techs.map((tech) => (
                            <TechBadge
                                key={tech}
                                tech={tech}
                            />
                        ))}
                    </div>

                    <div className="project-buttons">

                        <a href={project.github}target="_blank"rel="noreferrer">GitHub</a>

                        {project.demo && project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noreferrer">Live Demo </a>
                        )}

                    </div>

                </div>

            </div>

        </motion.article>
    );
}