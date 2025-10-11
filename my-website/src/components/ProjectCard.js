const ProjectCard = ({ title, description,icon,link }) => {
    return (
        <div className="projectCard mx-3 my-3">
            <a href={link}>
                <img
              src={icon}
              alt={title}
              className="img-fluid rounded shadow"
              
            />
            </a>
            <h3 className="mt-3">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProjectCard;