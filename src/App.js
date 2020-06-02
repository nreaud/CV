import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact";
import JobList from "./JobList";
import List from "./List";
import Picture from "./Picture";
import SkillList from "./SkillList";

/*===IMG==*/
import address from "./resource/myAddress.png";
import gears from "./resource/mySkills.png";
import languages from "./resource/myLanguages.png";
import mail from "./resource/myMail.png";
import phone from "./resource/myPhone.png";
import profil from "./resource/profil1.png";
import qualities from "./resource/myQualities.png";
import smiley from "./resource/mySmiley.png";
import suitcase from "./resource/mySuitcase.png";
import universityHat from "./resource/myUniversityHat.png";

const SKILL_SCALE = 5;

const MY_SKILLS = [
  { skill: "Java8", skillLevel: 3 },
  { skill: "ReactJS", skillLevel: 2 },
  { skill: "BDD", skillLevel: 2 },
  { skill: "ElasticSearch", skillLevel: 3 },
];

const LANGUAGES_SPOKEN = [
  { skill: "Français", skillLevel: 5 },
  { skill: "Anglais", skillLevel: 4 },
];

const INTERESTS = ["Jeux de société", "Jeux vidéo", "Cuisine"];

const QUALITIES = [
  "Logique",
  "Travail en équipe",
  "Autonomie",
  "Force de proposition",
];

const MY_EXPERIENCES = [
  {
    title: "Développeur concepteur back-end - API sur le domaine des sinistres",
    where: "MAIF, Niort",
    from: "04/2019",
    to: "12/2019",
    details: [
      "Développement d’APIs en Java 8",
      "Tests Unitaires",
      "Corrections d'anomalies sur le pool d'API sinistre + Monitoring",
      "Méthodes agiles",
    ],
  },
  {
    title:
      'Développeur back-end - Maintient applicatif d’un " Puit de données ' +
      '" et de son applicatif de population',
    where: "MAIF, Niort",
    from: "12/2017",
    to: "04/2019",
    details: [
      "Accompagnement client",
      "Corrections d'anomalies + Monitoring",
      "Évolutions applicatives Java8 + Scala",
      "Création d'index Elasticsearch",
    ],
  },
  {
    title:
      "Stage développeur full-stack – Applicatif de suivi de livraison pour" +
      " la CNAMTS",
    where: "Sopra Steria, Niort",
    from: "04/2017",
    to: "12/2017",
    details: [
      "Développement d'API back-end en Java",
      "Développement front-end avec Angular JS",
      "Méthodes agiles",
    ],
  },
];

const TEXT_PROFIL =
  "Je suis à la recherche d'un emploi dans le Web et/ou les applications" +
  " mobiles afin de continuer à monter en compétence dans ces domaines. En" +
  " parallèle je développe des projets informatiques et je compte me former" +
  " sur l'intelligence artificielle." +
  "\r\n\r\nÀ long terme j'espère vendre mes propres applications web et " +
  "peut-être monter mon entreprise.";

const FORMATION = [
  {
    title: "Master informatique",
    where: "Université de Poitiers, Poitiers",
    from: "2015",
    to: "2017",
    details: [],
  },
];

class App extends Component {
  translateSkillLevelsToStars(skills) {
    let res = skills.map(({ skill, skillLevel }) => {
      let stars = "";
      for (let i = 0; i < skillLevel; i++) {
        stars += "★";
      }
      for (let i = skillLevel; i < SKILL_SCALE; i++) {
        stars += "☆";
      }
      return { skill: skill, skillLevelStars: stars };
    });
    console.log(res);
    return res;
  }

  constructor(props) {
    super(props);
    this.MY_SKILLS_STARS = this.translateSkillLevelsToStars(MY_SKILLS);
    this.LANGUAGES_SPOKEN_STARS = this.translateSkillLevelsToStars(
      LANGUAGES_SPOKEN
    );
  }

  render() {
    return (
      <div className="A4sheet">
        <div className="square" />
        <div className="triangleUnder" />
        <div className="triangleOver" />
        <div className="cv">
          <div className="aboutMe">
            <div className="spaceTop" />
            <Picture img={profil} />
            <div className="spaceText" />
            <div className="text">
              <Contact
                adress="46Ter rue pierre chantelauze, 79000 Niort"
                imgAdress={address}
                mailingAdress="nicolasreaud@gmail.com"
                imgMail={mail}
                phone="06 46 46 06 97"
                imgPhone={phone}
              />
              <SkillList
                img={gears}
                skills={this.MY_SKILLS_STARS}
                skillName="Compétences"
              />
              <SkillList
                img={languages}
                skills={this.LANGUAGES_SPOKEN_STARS}
                skillName="Langues"
              />
              <List img={qualities} list={QUALITIES} listName="Qualités" />
              <List img={smiley} list={INTERESTS} listName="Loisirs" />
            </div>
          </div>
          <div className="aboutJob">
            <div className="spaceTop" />
            <h1 className="nameTitle">Nicolas RÉAUD</h1>
            <h2 className="jobSubTitle">Développeur full-stack</h2>
            <h3>
              <img className="icon" src={profil} alt="icône profil" />
              Profil
            </h3>
            <p>{TEXT_PROFIL}</p>
            <JobList
              list={MY_EXPERIENCES}
              title="Expériences professionnelles"
              img={suitcase}
            />
            <JobList list={FORMATION} title="Formation" img={universityHat} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
