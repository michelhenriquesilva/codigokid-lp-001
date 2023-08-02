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
      <Navbar />
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
            }}>
            Como nós ajudamos no <br />
            desenvolvimento do seu
            <br /> filho!
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
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna
            <br /> aliqua.
          </motion.a>
          <motion.div className="button-home">
            <div className="texto-button">Faça sua matrícula!</div>
          </motion.div>
        </div>

        <div className="container-right">
          <img className="circulo" src={Ellipse} alt="" />
          <img className="menino" src={ImgMenino} alt="" />
          <motion.img
            className="bola"
            src={Bola}
           
          />
        </div>
      </section>
    </>
  );
}
