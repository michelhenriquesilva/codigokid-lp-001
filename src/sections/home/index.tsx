import Navbar from "../../components/Navbar";
import "./style.css";
import Ellipse from "../../assets/Ellipse 44.png";
import ImgMenino from "../../assets/Mask group.png";
import Bola from "../../assets/bbbb.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="container-left">
          <motion.a
            className="texto1"
            whileInView="visible"
            initial="initial"
            variants={{
              initial: { opacity: 0, x: -300 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
          >
            Como nós transformamos
            <br /> o futuro do seu filho!
          </motion.a>
          <motion.a
            className="texto2"
            whileInView="visible"
            initial="initial"
            variants={{
              initial: { opacity: 0, x: -600 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.7 },
              },
            }}
          >
            Transformar nossos alunos em criadores de novas soluções para a
            sociedade, entendendo que o domínio da programação será o
            diferencial pra profissionais de qualquer área é a nossa missão!
          </motion.a>
          <motion.div className="button-home">
            <div className="texto-button">Faça sua matrícula!</div>
          </motion.div>
        </div>

        <div className="container-right">
          <img className="circulo" src={Ellipse} alt="" />
          <img className="menino" src={ImgMenino} alt="" />
          <motion.img className="bola" src={Bola} />
        </div>
      </section>
    </>
  );
}
