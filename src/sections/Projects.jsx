import {projects} from "../constants/index.js";
import {FaGithub, FaYoutube} from "react-icons/fa";
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image-wrapper">
                <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                />
            </div>
            <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                    {project.stack.map((tech, index) => (
                        <span key={index} className="project-tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="project-buttons">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                    >
                        <FaGithub className="github-icon" />
                        <span>View Code</span>
                    </a>
                    {project.youtubeLink && (
                        <a
                            href={project.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-youtube-btn"
                        >
                            <FaYoutube className="youtube-icon" />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projects-wrapper" id="projects">
            <p className="section-eyebrow">PROJECTS</p>
            <h2 className="section-heading">Projects I've built.</h2>

            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;