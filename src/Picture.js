import React from "react";
import PropTypes from "prop-types";

const Picture = ({ img }) => (
  <div className="pictureDiv">
    <div className="pictureFrame">
      <img src={img} alt="moi" />
    </div>
  </div>
);

Picture.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Picture;
