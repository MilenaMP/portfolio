import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs
} from "react-icons/fa";

import {
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub
} from "react-icons/si";

import "./skills.css";


export default function Skills() {

    const skillGroups = [
        {
            title: "Front-end",
            description: "Tecnologias que utilizo na construção de interfaces web.",
            skills: [
                {
                    name: "HTML",
                    icon: <FaHtml5 />,
                    color: "#e34c26",
                    level: "Avançado",
                },
                {
                    name: "CSS",
                    icon: <FaCss3Alt />,
                    color: "#264de4",
                    level: "Avançado",
                },
                {
                    name: "JavaScript",
                    icon: <FaJs />,
                    color: "#f0db4f",
                    level: "Intermediário",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    color: "#3178c6",
                    level: "Em desenvolvimento",
                },
                {
                    name: "React",
                    icon: <FaReact />,
                    color: "#61dafb",
                    level: "Intermediário",
                },
            ]
        },

        {
            title: "Back-end",
            description: "Tecnologias utilizadas no desenvolvimento de APIs e aplicações.",
            skills: [
                {
                    name: "Node.js",
                    icon: <FaNodeJs />,
                    color: "#3c873a",
                    level: "Intermediário",
                },
                {
                    name: "Express",
                    icon: <SiExpress />,
                    color: "#ffffff",
                    level: "Intermediário",
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb />,
                    color: "#47a248",
                    level: "Intermediário",
                },
                {
                    name: "MySQL",
                    icon: <SiMysql />,
                    color: "#00758f",
                    level: "Intermediário",
                },
            ]
        },

        {
            title: "Ferramentas",
            description: "Ferramentas que fazem parte do meu fluxo de desenvolvimento.",
            skills: [
                {
                    name: "Git",
                    icon: <SiGit />,
                    color: "#f05032",
                    level: "Intermediário",
                },
                {
                    name: "GitHub",
                    icon: <SiGithub />,
                    color: "#ffffff",
                    level: "Intermediário",
                },
            ]
        }
    ];


    return (
        <section className="skills" id="skills">

            <div className="skills-header">

                <p className="section-subtitle">
                    My Skills
                </p>

                <h2 className="section-title">
                    Tecnologias que utilizo
                </h2>

                <p className="skills-description">
                    Tecnologias e ferramentas que fazem parte
                    da minha jornada de desenvolvimento,
                    desde fundamentos web até aplicações
                    modernas.
                </p>

            </div>


            <div className="skills-groups">

                {skillGroups.map((group) => (

                    <div
                        className="skill-group"
                        key={group.title}
                    >

                        <div className="skill-group-header">

                            <h3>
                                {group.title}
                            </h3>

                            <p>
                                {group.description}
                            </p>

                        </div>


                        <div className="skills-container">

                            {group.skills.map((skill) => (

                                <div
                                    className="skill-card"
                                    key={skill.name}
                                >

                                    <div
                                        className="skill-icon"
                                        style={{
                                            color: skill.color
                                        }}
                                    >
                                        {skill.icon}
                                    </div>


                                    <div className="skill-info">

                                        <h4>
                                            {skill.name}
                                        </h4>

                                        <span>
                                            {skill.level}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}