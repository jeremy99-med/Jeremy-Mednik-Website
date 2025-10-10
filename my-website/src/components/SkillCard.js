const SkillCard = ({ title, description, icon, level }) => {
    return (
        <div className="skill-card mx-3 my-3">
            <div className="skill-icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <div className="skill-title">
                <h3>{title}</h3>
            </div>
            <div className="skill-level">
                Level: {level}
                <br></br>
                <br></br>
            </div>
            <div className="skill-description">
                {description}
            </div>
        </div>
    );
};

export default SkillCard;