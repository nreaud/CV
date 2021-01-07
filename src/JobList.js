import React from "react";
import PropTypes from "prop-types";
import List from "./List";

const JobList = ({ list, title, img }) => (
  <div className="experiences">
    {title && (
      <h3>
        <img className="icon" src={img} alt="icône" />
        {title}
      </h3>
    )}
    {list.map(
      ({
        title,
        where,
        from,
        to,
        overview,
        technicalStack,
        successes,
        missions,
      }) => (
        <div className="experience" key={title}>
          <h4>{title}</h4>
          <h5>
            {where} de {from} à {to}
          </h5>
          <p>{overview}</p>
          {technicalStack && (
            <div>
              <b>Stack technique: </b>
              {technicalStack.join(", ")}
            </div>
          )}
          {missions && (
            <dl>
              <dt style={{ "font-weight": "bold" }}>Missions:</dt>
              {missions.map((mission) => (
                <dd key={mission}>{mission}</dd>
              ))}
            </dl>
          )}
          {successes && (
            <dl>
              <dt style={{ "font-weight": "bold" }}>Succès:</dt>
              {successes.map((succes) => (
                <dd key={succes}>{succes}</dd>
              ))}
            </dl>
          )}
        </div>
      )
    )}
  </div>
);

JobList.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      where: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      technicalStack: PropTypes.string,
      missions: PropTypes.arrayOf(PropTypes.string),
      successes: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default JobList;
