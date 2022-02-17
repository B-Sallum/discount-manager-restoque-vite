import React, { useState, useEffect } from "react";
import AboutCard from "../../components/about/about-card";
import AboutModal from "../../components/about/about-modal";
import DbLocal from "./db_local";
import "./styles.css";

const AboutUs = () => {
  const [props, setProps] = useState([]);
  

  useEffect(() => {
    setProps(DbLocal);
  }, []);

  const showProps = () => {
    const request = fetch();
    const data = request.json();
    setProps(DbLocal);
  };

  return (
    <div className="about-us">
      {props.map((data) => (
        <AboutCard key={data.id} name={data.nome} picture={data.img} apelido={data.apelido} gif={data.gif} ig={data.insta} linkedin={data.linkedin} github={data.github} texto={data.texto} />
      ))}
    </div>
  );
};
export default AboutUs;
