import React from "react";
import PropTypes from "prop-types";

const List = ({ img, list, listName }) => (
  <dl>
    {listName && (
      <dt>
        <img className="icon" src={img} alt="icône" />
        {listName}
      </dt>
    )}
    {list.map((item) => (
      <dd key={item}>{item}</dd>
    ))}
  </dl>
);

List.propTypes = {
  img: PropTypes.string,
  list: PropTypes.array.isRequired,
  listName: PropTypes.string,
};

export default List;
