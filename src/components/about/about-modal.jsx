import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.css";

const AboutModal = ({
  apelido,
  gif,
  ig,
  linkedin,
  github,
  texto,
  showAbout,
  setShowAbout
}) => {
  return (
    <>
      {showAbout ? (
        <div className="sobre">
          <button className="brayan-btn">
            <AiFillCloseCircle
              aria-label="close modal"
              className="close-modal"
              onClick={() => setShowAbout(false)}
            />
            <div className="xambra">
              <img className="brabala_pic" src={gif} alt={apelido} />
              <h2>{apelido}</h2>
              <div className="infos">
                <p>{texto}</p>
                <div className="infos1">
                  <a href={ig}>
                    <FaInstagram />
                  </a>
                  <a href={linkedin}>
                    <FaLinkedin />
                  </a>
                  <a href={github}>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default AboutModal;
