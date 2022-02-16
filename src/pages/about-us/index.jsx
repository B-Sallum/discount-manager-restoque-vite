import React, { useState, useEffect} from "react";
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
        <AboutCard key={data.id} name={data.nome} picture={data.img} />
      ))}
      {/* <AboutCard
        key={"Brabra"}
        name={props.nome}
        picture={props.img}
      /> */}
    </div>
  );
};
export default AboutUs;
