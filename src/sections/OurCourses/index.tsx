import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ImgCurse from "../../assets/image 6.png";
import ImgFundoTop from "../../assets/Vector-azul.svg";

export default function OurCourses() {
  return (
    <>
      <section className="courses">
        <a className="title-courses">Nossos cursos</a>
        <div className="cards-courses1">
          <div className="card-course">
            <img src={ImgCurse} alt="" />
            <a className="title-card-curses">Robótica Educacional</a>
            <p>
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className="retangulo"></div>
          </div>
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
            <img src={ImgCurse} alt="" />
            <a className="title-card-curses">Matemática Digital</a>
            <p>
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className="retangulo"></div>
          </div>
        </div>

        <div className="card-courses2">
          <div className="card-curse">
            <img src={ImgCurse} alt="" />
            <a className="title-card-curses">Automação com Arduino</a>
            <p>
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className="retangulo"></div>
          </div>
          <div className="card-curse">
            <img src={ImgCurse} alt="" />
            <a className="title-card-curses">Programação</a>
            <p>
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className="retangulo"></div>
          </div>
          <div className="card-curse">
            <img src={ImgCurse} alt="" />
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
