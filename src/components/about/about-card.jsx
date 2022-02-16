import React, { useState } from "react";
import AboutModal from './about-modal';
import "./styles.css";

const AboutCard = ({ name, picture}) => {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = () => {
    setShowAbout(true);
  };

  return (
    <div className="chama">
      <div className="quadro">
        <button className="card-container" onClick={openAbout}>
          <img
            className="card-pic"
            src={picture}
            alt="Card"
            
          />
          <h2 className="name_init">{name}</h2>
        </button>
      </div>
      <AboutModal showAbout={showAbout} setShowAbout={setShowAbout} />
    </div>
  );
};

export default AboutCard;
