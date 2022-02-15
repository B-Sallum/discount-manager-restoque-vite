import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
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
                <h2>Brayan Henrique</h2>
                <p>
                  {" "}
                  Tive um pequeno contato com programação quando vi um pouco de
                  HTML durante o curso de Web Design em 2016, na época gostei
                  muito, porém estava totalmente focado no basquete e em me
                  tornar um jogador profissional. Me mudei e infelizmente tive
                  que parar de jogar, fiz o 3º ano do Ensino Médio em Santa
                  Catarina, logo em seguida dei ingresso na faculdade de
                  Ciências Contábeis, tranquei e fiquei uns anos um pouco
                  perdido com o que fazer pra dar certo, até encontrar a Blue
                  por acaso, busquei sobre o mercado e tamém sobre programação,
                  imaginei que iria gostar desse mundo, mas não tanto assim
                </p>
                <div className="infos1">
                  <a href="https://github.com/brabrahen">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/brayan-henrique-586029180/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/chocottone_/">
                    <i class="fab fa-instagram"></i>
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
