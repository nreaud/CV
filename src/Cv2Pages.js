import React from "react";
import { Component } from "react";

import Page from "./Page";
import Picture from "./Picture";
import Contact from "./Contact";
import SkillList from "./SkillList";
import List from "./List";
import JobList from "./JobList";
import JobListSimple from "./JobListSimple";

/*===IMG==*/
import address from "./resource/myAddress.png";
import gears from "./resource/mySkills.png";
import languages from "./resource/myLanguages.png";
import mail from "./resource/myMail.png";
import phone from "./resource/myPhone.png";
import picture from "./resource/cv1.png";
import profil from "./resource/profil1.png";
import qualities from "./resource/myQualities.png";
import smiley from "./resource/mySmiley.png";
import suitcase from "./resource/mySuitcase.png";
import universityHat from "./resource/myUniversityHat.png";

import "./Cv2Pages.css";

const SKILL_SCALE = 5;

const MY_SKILLS = [
  { skill: "Java", skillLevel: 4 },
  { skill: "Spring", skillLevel: 3 },
  { skill: "ReactJS", skillLevel: 2 },
  { skill: "Git", skillLevel: 4 },
  { skill: "ElasticSearch", skillLevel: 3 },
  { skill: "ReactNative", skillLevel: 1 },
];

const LANGUAGES_SPOKEN = [
  { skill: "Français", skillLevel: 5 },
  { skill: "Anglais", skillLevel: 4 },
];

const TEXT_PROFIL =
  "Je suis à la recherche d'un emploi dans le Web et/ou les applications" +
  " mobiles afin de solidifier mes compétences dans ces domaines. Sur mon temps" +
  " libre je développe des projets informatiques.";

const INTERESTS = ["Ju-jitsu", "Jeux de société", "Cuisine"];

const QUALITIES = [
  "Logique",
  "Travail en équipe",
  "Autonomie",
  "Force de proposition",
];

const MY_EXPERIENCES_PAGE_ONE = [
  {
    title: "Développeur concepteur back-end - API sur le domaine des sinistres",
    where: "MAIF, Niort",
    from: "04/2019",
    to: "12/2019",
    overview: `J'ai intégré une squad en méthode agile en tant que développeur/concepteur constitué de 6 personnes (1PO, 1 lead dev, 1 MOA, 2 dev et moi). 
    La squad avait pour mission de reprendre des APIs existantes sur le domaine des sinistres, il fallait les harmoniser, revoir la qualité et notamment ajouter des TUs ainsi que gérer les anomalies. 
    De plus la squad avait à charge les évolutions du pool d'API ainsi que son enrichissment avec de nouveaux endpoints.`,
    technicalStack: ["Java 8", "JUnit", "Sonar", "Jenkins, Git"],
    successes: [
      "Harmonisation de l'ensemble des APIs existantes",
      "Couverture de test à plus de 90% sur l'ensemble des APIs",
      "Création de nouveaux endpoints",
    ],
    missions: [
      "Développement en Java8 + Test unitaires",
      "Conceptions techniques d'APIs",
      "Analyse d'anomalies",
    ],
  },
];

const MY_EXPERIENCES_PAGE_TWO = [
  {
    title: 'Développeur back-end - Maintien applicatif d’un "Puit de données" ',
    where: "MAIF, Niort",
    from: "12/2017",
    to: "04/2019",
    overview: `Maintien applicatif d'un "Puit de données", c'est à dire d'un applicatif en Java mettant à jour un réplica de la base donnée sous la forme d'indexes ElasticSearch offrant des options de recherche avancées.
    J'intervenais en tant que développeur dans une équipe longtemps consituée d'une reférente et d'un autre développeur.
    J'avais pour tâche d'accompagner les clients dans l'ajout de nouveaux indexes, ainsi que la correction d'anomalies et l'évolution de la solution applicative.`,
    technicalStack: ["Java8", "ElasticSearch", "Git"],
    successes: [
      "Reconnu par les clients en tant que référent privilégié",
      "Ajout de plusieurs indexes et gestion de leur mise à jour",
      "Montée de version du client ElasticSearch de 2 à 5",
      "Correction d'anomalies récurrentes",
    ],
    missions: [
      "Accompagnement client",
      "Corrections d'anomalies + Monitoring",
      "Évolutions applicatives Java8",
      "Création d'indexes Elasticsearch",
    ],
  },
];

const INTERNSHIP = [
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

const FORMATION = [
  {
    title: "Master informatique",
    where: "Université de Poitiers, Poitiers",
    from: "2015",
    to: "2017",
    details: [],
  },
];

class Cv2Pages extends Component {
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

  getPageOne() {
    return (
      <div className="cv">
        <div className="aboutMe">
          <Picture img={picture} />
          <div className="aboutMeContent">
            <Contact
              adress="245 rue du faubourg du pont neuf, 86000 Poitiers"
              imgAdress={address}
              mailingAdress="nicolasreaud@gmail.com"
              imgMail={mail}
              phone="06 46 46 06 97"
              imgPhone={phone}
            />
          </div>
        </div>
        <div className="aboutJob">
          <h1 className="nameTitle">Nicolas RÉAUD</h1>
          <h2 className="jobSubTitle">Développeur full-stack</h2>
          <h3>
            <img className="icon" src={profil} alt="icône profil" />
            Profil
          </h3>
          <p>{TEXT_PROFIL}</p>
          <JobList
            list={MY_EXPERIENCES_PAGE_ONE}
            title="Expériences professionnelles"
            img={suitcase}
          />
        </div>
      </div>
    );
  }

  getPageTwo() {
    return (
      <div className="cv">
        <div className="aboutMe">
          <div className="aboutMeContent">
            <div className="page_start_margin" />
            <SkillList
              img={gears}
              skills={this.translateSkillLevelsToStars(MY_SKILLS)}
              skillName="Compétences"
            />
            <SkillList
              img={languages}
              skills={this.translateSkillLevelsToStars(LANGUAGES_SPOKEN)}
              skillName="Langues"
            />
            <List img={qualities} list={QUALITIES} listName="Qualités" />
            <List img={smiley} list={INTERESTS} listName="Loisirs" />
          </div>
        </div>
        <div className="aboutJob">
          <div className="page_start_margin" />
          <JobList list={MY_EXPERIENCES_PAGE_TWO} />
          <JobListSimple list={INTERNSHIP} title="Stage" img={suitcase} />
          <JobListSimple
            list={FORMATION}
            title="Formation"
            img={universityHat}
          />
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.MY_SKILLS_STARS = this.translateSkillLevelsToStars(MY_SKILLS);
    this.LANGUAGES_SPOKEN_STARS = this.translateSkillLevelsToStars(
      LANGUAGES_SPOKEN
    );
    this.pageOne = this.getPageOne();
    this.pageTwo = this.getPageTwo();
  }

  render() {
    return (
      <div className="main_container">
        <Page children={this.pageOne} />
        <div className="pages_separator" />
        <Page children={this.pageTwo} />
      </div>
    );
  }
}

export default Cv2Pages;
