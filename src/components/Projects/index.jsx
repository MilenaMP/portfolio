import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./projects.css";

//renderizar os projetos na tela, destacando o projeto com a propriedade featured
export default function Projects(){
    
    const featuredProject = projects.find(
        project => project.featured
    );

    const otherProjects =projects.filter(
        project => !project.featured
    );

    return(
        <section className="projects" id="projects">

            <div className="projects-header">
                <p className="section-subtitle">My Projects</p>
                <h2 className="section-title">Featured Work</h2>
            </div>

            {/* Projeto Destaque */}
            <ProjectCard project={featuredProject} featured/>

            <h3 className="other-projects-title">Other Projects</h3>

            <div className="projects-grid">

                {otherProjects.map((project)=> (
                    <ProjectCard key={project.id} project={project}/>
                ))}
                
            </div>
        </section>
    );
}