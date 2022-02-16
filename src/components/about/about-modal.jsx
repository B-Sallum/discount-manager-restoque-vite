import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import "./styles.css";

const AboutModal = ({ showAbout, setShowAbout }) => {
  return (
    <>
      {showAbout ? (
        <div className="sobre">
          <button className="brayan-btn" showAbout={showAbout}>
            <AiFillCloseCircle
              aria-label="close modal"
              className="close-modal"
              onClick={() => setShowAbout(false)}
            />
            <div className="xambra">
              <img
                className="brabala_pic"
                src={
                  "https://media4.giphy.com/media/kX7OWl40hcz6RSYyjN/giphy.gif?cid=ecf05e47eiiihdzumnegnx7blgyq2wvja0gm5u5uziamzx7n&rid=giphy.gif&ct=g"
                }
                height="170"
                width={420}
                alt="Brabala apenas"
              />
              <div className="infos">
                <div className="infos1">
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
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
