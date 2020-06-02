import React from "react";
import PropTypes from "prop-types";

const SkillList = ({ img, skills, skillName }) => (
  <dl>
    <dt>
      <img className="icon" src={img} alt="icône" />
      {skillName}
    </dt>
    {skills.map(({ skill, skillLevelStars }) => (
      <dd className="skill" key={skill}>
        {skill}
        <span className="skillLevel">{skillLevelStars}</span>
      </dd>
    ))}
  </dl>
);

SkillList.defaultProps = {
  scale: 5,
};

SkillList.prototype = {
  img: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      skillLevelStars: PropTypes.string.isRequired,
    })
  ),
  skillName: PropTypes.string.isRequired,
};

export default SkillList;
