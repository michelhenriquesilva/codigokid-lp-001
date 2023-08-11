import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import ImgCurse from "../../assets/image 6.png";
import ImgFundoTop from "../../assets/Vector-azul.svg";
import Img1 from "../../assets/Rectangle 1277.png";
import Img2 from "../../assets/Rectangle 1278.png";
import Img3 from "../../assets/Rectangle 1276.png";
import Img4 from "../../assets/Rectangle 1276.png";
import Img5 from "../../assets/Rectangle 1276.png";

export default function OurCourses() {
  return (
    <>
      <section className="courses">
        <a className="title-courses">Nossos cursos</a>
        <div className="courses-container">
            
             
              <div className="card-curse">
                <img src={ImgCurse} alt="" />
                <a className="title-card-curses">Desenvolvimento de Games</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"></div>
              </div>  
              <div className="card-curse">
                <img src={Img1} alt="" />
                <a className="title-card-curses">Matemática Digital</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"></div>
              </div>
              <div className="card-curse">
                <img src={Img2} alt="" />
                <a className="title-card-curses">Matemática Digital</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"></div>
              </div>
           

            
              <div className="card-curse">
                <img src={Img3} alt="" />
                <a className="title-card-curses">Automação com Arduino</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"></div>
              </div>
              <div className="card-curse">
                <img src={Img4} alt="" />
                <a className="title-card-curses">Programação</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"></div>
              </div>
              <div className="card-curse">
                <img src={Img5} alt="" />
                <a className="title-card-curses">Youtube e Midias Digitais</a>
                <p>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div className="retangulo"/>
              </div>
            
        </div>


        <img src={ImgFundoTop} className="fundo-azul" alt="" />
      </section>
      
      
    </>
  );
}
