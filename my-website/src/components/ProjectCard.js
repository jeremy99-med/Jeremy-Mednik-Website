const ProjectCard = ({ title, description,icon }) => {
    return (
        <div className="projectCard mx-3 my-3">
            <img
              src={icon}
              alt={title}
              className="img-fluid rounded shadow"
            />
            <h5 className="mt-3">{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ProjectCard;