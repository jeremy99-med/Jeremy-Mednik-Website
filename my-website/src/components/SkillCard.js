const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
            </div>
            <div className="skill-title">
                <h3>{skill.name}</h3>
            </div>
            <div className="skill-description">
                {skill.description}
            </div>
            <div className="skill-level">
                Level: {skill.level}
            </div>

        </div>
    );
};

export default SkillCard;