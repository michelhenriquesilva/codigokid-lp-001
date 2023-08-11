import "./style.css";
import Bola from "../../assets/bbbb.png";
import Photo1 from "../../assets/photo1.png";
import Photo2 from "../../assets/photo2.png";
import Photo3 from "../../assets/photo3.png";
import Photo4 from "../../assets/photo4.png";
import Separator from "../../components/Separator";
import Group1 from "../../assets/Group 33961.png";
import Group2 from "../../assets/Group 33962.png";
import Group3 from "../../assets/Group 33960.png";
import Group4 from "../../assets/Group 33964.png";
import Group5 from "../../assets/Group 33963.png";
import Group6 from "../../assets/Group 33965.png";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const galery = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Galery() {
  const animationControls = useAnimation();

  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animationControls.start("visible");
      } else {
        animationControls.start("hidden");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleScroll, options);

    const section = document.querySelector(".section2");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [animationControls]);

  return (
    <>
      <section className="section2">
        <div class="custom-shape-divider-bottom-1690302680">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="box-left">
          <img className="circle-orange" src={Bola} />
          <motion.div
            className="galery"
            variants={galery}
            initial="hidden"
            animate={animationControls}
          >
            <motion.img
              className="item photo1"
              variants={item}
              src={Photo1}
              alt=""
            />
            <motion.img
              className="item photo2"
              variants={item}
              src={Photo2}
              alt=""
            />
            <motion.img
              className="item photo3"
              variants={item}
              src={Photo3}
              alt=""
            />
            <motion.img
              className="item photo4"
              variants={item}
              src={Photo4}
              alt=""
            />
          </motion.div>
        </div>
        <div className="box-right">
          <a className="titulo-sec2">Como são às aulas?</a>
          <Separator />
          <p>
            Nossas dinâmicas de ensino são guiadas pela gamificação, mas não se
            confundam, as crianças não veem a Código Kid pra jogar. Gamificação,
            é o uso de elementos de jogos com a finalidade de engajar pessoas e
            de melhorar o aprendizado, resolvendo tarefas de forma estratégica e
            divertida.
          </p>
          <div className="circles-container">
            <div className="row">
              <img className="" src={Group1} />
              <a>
                Aprimoramento
                <br /> da Escrita
              </a>
              <img className="" src={Group2} />
              <a>
                Estímulo ao
                <br /> Raciocínio lógico
              </a>
              <img className="" src={Group3} />
              <a>
                Resolução criativa
                <br /> de conflitos
              </a>
            </div>
            <div className="row">
              <img className="" src={Group4} />
              <a>
                Estimulo à liderança e<br /> empreendedorismo
              </a>
              <img className="" src={Group5} />
              <a>
                Desenvolvimento
                <br /> da Leitura
              </a>
              <img className="" src={Group6} />
              <a>
                Estimulo da
                <br /> Criatividade
              </a>
            </div>
          </div>
          <div className="button-matricula">
            <div className="texto-button">Matricule seu filho(a)</div>
          </div>
        </div>
      </section>
    </>
  );
}
