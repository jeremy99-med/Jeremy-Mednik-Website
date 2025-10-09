const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={`${project.name} icon`} />
            </div>
            <div className="project-title">
                <h3>{project.name}</h3>
            </div>
            <div className="project-description">
                {project.description}
            </div>
        </div>
    );
};

export default ProjectCard;