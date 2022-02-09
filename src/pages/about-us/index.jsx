import React from 'react';
import AboutCard from '../../components/about/about-card';

import './styles.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutCard
        key={"Brabra"}
        name={"Brayan Hen"}
        picture={"https://i.imgur.com/UfiGsb0.jpg"}
      />
      <AboutCard
        key={"Brabra"}
        name={"Brayan Hen"}
        picture={"https://i.imgur.com/UfiGsb0.jpg"}
      />
      <AboutCard
        key={"Brabra"}
        name={"Brayan Hen"}
        picture={"https://i.imgur.com/UfiGsb0.jpg"}
      />
    </div>
  );
};

export default AboutUs;