import React from "react";
import PropTypes from "prop-types";

const Contact = ({
  adress,
  github,
  imgAdress,
  imgGithub,
  imgLinkedIn,
  imgMonster,
  imgMail,
  imgPhone,
  linkedIn,
  monster,
  mailingAdress,
  phone,
}) => (
  <div className="contactDiv">
    <h3>
      <img className="icon" src={imgAdress} alt="icône" />
      Adresse:
    </h3>
    <p className="adress">{adress}</p>
    <h3>
      <img className="icon" src={imgPhone} alt="icône" />
      Téléphone:
    </h3>
    <p className="phone">{phone}</p>
    <h3>
      <img className="icon" src={imgMail} alt="icône" />
      E-mail:
    </h3>
    <p className="mailingAdress">{mailingAdress}</p>
    {github && (
      <div className="github">
        <h3>
          <img className="icon" src={imgGithub} alt="icône" />
          Github:
        </h3>
      </div>
    )}
    {linkedIn && (
      <div className="linkedIn">
        <h3>
          <img className="icon" src={imgLinkedIn} alt="icône" />
          LinkedIn:
        </h3>
      </div>
    )}
    {monster && (
      <div className="monster">
        <h3>
          <img className="icon" src={imgMonster} alt="icône" />
          Monster:
        </h3>
      </div>
    )}
  </div>
);

Contact.propTypes = {
  adress: PropTypes.string.isRequired,
  github: PropTypes.string,
  imgAdress: PropTypes.string,
  imgGithub: PropTypes.string,
  imgLinkedIn: PropTypes.string,
  imgMonster: PropTypes.string,
  imgMail: PropTypes.string,
  imgPhone: PropTypes.string,
  linkedIn: PropTypes.string,
  monster: PropTypes.string,
  mailingAdress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
