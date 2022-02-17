import React, { useState } from "react";
import AboutModal from "./about-modal";
import "./styles.css";

const AboutCard = ({
  name,
  picture,
  apelido,
  gif,
  ig,
  linkedin,
  github,
  texto,
}) => {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = () => {
    setShowAbout(true);
  };

  return (
    <div className="chama">
      <div className="quadro">
        <button className="card-container" onClick={openAbout}>
          <img className="card-pic" src={picture} alt="Card" />
          <h2 className="name_init">{name}</h2>
        </button>
      </div>
      <AboutModal
        apelido={apelido}
        gif={gif}
        ig={ig}
        linkedin={linkedin}
        github={github}
        texto={texto}
        showAbout={showAbout}
        setShowAbout={setShowAbout}
      />
    </div>
  );
};

export default AboutCard;
