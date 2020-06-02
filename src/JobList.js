import React from "react";
import PropTypes from "prop-types";
import List from "./List";

const JobList = ({ list, title, img }) => (
  <div className="experiences">
    <h3>
      <img className="icon" src={img} alt="icône" />
      {title}
    </h3>
    {list.map(({ title, where, from, to, details, detailsTitle }) => (
      <div className="experience" key={title}>
        <h4>{title}</h4>
        <h5>
          {where} de {from} à {to}
        </h5>
        <List list={details} listName={detailsTitle} />
      </div>
    ))}
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
      details: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      detailsTitle: PropTypes.string,
    })
  ).isRequired,
};

export default JobList;
