import React, { useState } from "react";
import AboutModal from './about-modal';
import "./styles.css";

const AboutCard = ({ name, picture, style }) => {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = () => {
    setShowAbout(true);
  };

  return (
    <div className="chama">
      <div className="quadro" style={style}>
        <button className="card-container" onClick={openAbout}>
          <img
            className="card-pic"
            src={"https://i.imgur.com/ukbN5Jr.jpg"}
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
