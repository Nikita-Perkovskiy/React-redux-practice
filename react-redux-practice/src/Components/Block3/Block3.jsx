import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Placeholder } from "./images/icon.svg";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Phone } from "./images/phone.svg";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Gitlab } from "./images/gitlab.svg";
import { ReactComponent as Telegram } from "./images/telegram.svg";
import { ReactComponent as Skype } from "./images/skype.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { selectorCvData } from "../../selects";
import "./index.scss";
import { Container } from "react-bootstrap";
import store from "../../store/store";

const Block3 = () => {
  const cvData = useSelector(selectorCvData);
  console.log("Block3", store.getState());
  const {
    name,
    profession,
    region,
    skype,
    email,
    phone,
    telegram,
    github,
    gitlab,
    linkedin,
    // photo,
    summary,
    workProfession,
    workTimeStart,
    workTimeEnd,
    workCompanyName,
    workJobDescription,
    professionHardSkills,
    professionSoftSkills,
    professionMainSkills,
    languageEnglish,
    languageUkrainian,
    educationTitle,
    educationTime,
    educationDescription,
    coursesTitle,
    coursesTime,
    coursesDescription,
  } = cvData;

  const hardSkills = professionHardSkills.split("; ");
  const softSkills = professionSoftSkills.split("; ");
  const mainSkills = professionMainSkills.split("; ");

  return (
    <Container className="mt-4">
      <div className="page__dashboard">
        <div className="page">
          <div className="page__header">
            <div className="header-item header__info">
              <h3 className="user-name">{name}</h3>
              <div className="user-profession">{profession}</div>
              <div className="user-contact-info">
                <span className="info-item user-region">{region}</span>
                {skype && (
                  <span className="info-item user-skype">
                    <a href="#">
                      <Skype className="icon-svg" />
                      {skype}
                    </a>
                  </span>
                )}
                {email && (
                  <span className="info-item user-email">
                    <a href="#">
                      <Email className="icon-svg" />{" "}
                      <span className="text">{email}</span>
                    </a>
                  </span>
                )}
                {phone && (
                  <span className="info-item user-phone">
                    <a href="#">
                      <Phone className="icon-svg" />{" "}
                      <span className="text">{phone}</span>
                    </a>
                  </span>
                )}
                {github && (
                  <span className="info-item user-github">
                    <a href="#">
                      <Github className="icon-svg" />
                      {github}
                    </a>
                  </span>
                )}
                {gitlab && (
                  <span className="info-item user-gitlab">
                    <a href="#">
                      <Gitlab className="icon-svg" />
                      {gitlab}
                    </a>
                  </span>
                )}
                {linkedin && (
                  <span className="info-item user-linkedin">
                    <a href="#">
                      <Linkedin className="icon-svg" />
                      {linkedin}
                    </a>
                  </span>
                )}
                {telegram && (
                  <span className="info-item user-telegram">
                    <a href="#">
                      <Telegram className="icon-svg" />
                      {telegram}
                    </a>
                  </span>
                )}
              </div>
            </div>
            <div className="header-item header__photo">
              <Placeholder />
              {/*<img src="" className="image-placeholder" alt=""/>*/}
            </div>
          </div>
          <div className="page__profile">
            <div className="profile__info">
              <div className="profile__block block-summary">
                <h4 className="profile__title">Summary</h4>
                <div className="profile__block-content">{summary}</div>
              </div>
              <div className="profile__block block-work">
                <h4 className="profile__title">Work</h4>
                <div className="profile__block-content">
                  <p className="block-label">
                    {workProfession}
                    <span className="block-time">
                      {workTimeStart} - {workTimeEnd}
                    </span>
                  </p>
                  <p className="block-title">{workCompanyName}</p>
                  <p className="block-content">{workJobDescription}</p>
                </div>
              </div>
              <div className="profile__block-group">
                <div className="profile__block block-skills">
                  <h4 className="profile__title">Hard skills</h4>
                  <div className="profile__block-content">
                    <ul className="block-list">
                      {hardSkills.map((skill) => (
                        <li className="list-item">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="profile__block block-skills">
                  <h4 className="profile__title">Soft skills</h4>
                  <div className="profile__block-content">
                    <ul className="block-list">
                      {softSkills.map((skill) => (
                        <li className="list-item">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="profile__block block-languages">
                  <h4 className="profile__title">Languages</h4>
                  <div className="profile__block-content">
                    <ul className="block-list">
                      <li className="list-item">
                        English - {languageEnglish}{" "}
                      </li>
                      <li className="list-item">
                        Ukrainian - {languageUkrainian}{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="profile__block block-education">
                <h4 className="profile__title">Education</h4>
                <div className="profile__block-content">
                  <p className="block-label">
                    <p className="block-title">{educationTitle}</p>
                    <p className="block-time">{educationTime}</p>
                  </p>
                  <p className="block-content">{educationDescription}</p>
                </div>
              </div>
              <div className="profile__block block-courses">
                <h4 className="profile__title">Courses</h4>
                <div className="profile__block-content">
                  <p className="block-label">
                    <p className="block-title">{coursesTitle}</p>
                    <p className="block-time">{coursesTime}</p>
                  </p>
                  <p className="block-content">{coursesDescription}</p>
                </div>
              </div>
            </div>
            <div className="profile__main-skills">
              <h4 className="profile__title">Main Skills</h4>
              <div className="profile__block-content">
                <ul className="block-list">
                  {mainSkills.map((skill) => (
                    <li className="list-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Block3;
