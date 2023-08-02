import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import Image1 from "../../assets/image 3.png";
import Vetor from "../../assets/Vector 256.png";
import Video from "../../components/Video";
import Fundo from "../../assets/Vector 260.png";
import ButtonMatricula from "../../components/ButtonMatricula";

export default function InnovativeEnvironment() {
  return (
    <>
      <section className="innovative-environment">
        <img className="vetor" src={Vetor} alt="" />
        <a className="title-environment">Ambiente inovador</a>
        <div className="container-environment">
          <div className="images-container">
            <img className="images" src={Image1} alt="" />
            <img className="images" src={Image1} alt="" />
            <img className="images" src={Image1} alt="" />
          </div>
          <div className="cards-environment">
            <motion.div
              whileInView="visible"
              initial="initial"
              variants={{
                initial: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className="cards">
              <a className="title-cards">Construção colaborativa</a>
              <p>
                Construir a partir de fontes, com a<br /> ajuda de e para outras
                pessoas.
              </p>
            </motion.div>
            <motion.div
              whileInView="visible"
              initial="initial"
              variants={{
                initial: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className="cards">
              <a className="title-cards">Intenção Criativa</a>
              <p>
                Entender o contexto para articular e<br /> criar uma solução,
                usando o próprio
                <br /> repertório de conhecimento
              </p>
            </motion.div>
            <motion.div
              whileInView="visible"
              initial="initial"
              variants={{
                initial: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className="cards">
              <a className="title-cards">
                Curiosidade
                <br /> Artistico-científica
              </a>
              <p>
                Querer saber sobre o mundo e<br /> expressar o que aprendeu de
                formas
                <br />
                diferentes
              </p>
            </motion.div>
          </div>
          <div className="lado-left">
            <Video />
            <div className="lado-right">
              <motion.div
                whileInView="visible"
                initial="initial"
                variants={{
                  initial: { opacity: 0, x: 500 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8 },
                  },
                }}
                className="mine-title">
                NOSSA METODOLOGIA
              </motion.div>
              <motion.div
                whileInView="visible"
                initial="initial"
                variants={{
                  initial: { opacity: 0, x: 500 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                  },
                }}
                className="title-video">
                Alinhada à BNCC
              </motion.div>
              <motion.p
                whileInView="visible"
                initial="initial"
                variants={{
                  initial: { opacity: 0, x: 500 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5 },
                  },
                }}>
                A Código Kid está alinhada com os 05 pilares da BNCC, que
                <br />
                promove a educação nas escolas por meio de XYZ
              </motion.p>
              <ButtonMatricula />
            </div>
          </div>
        </div>
      </section>
      <img src={Fundo} alt="" className="fundo2" />
    </>
  );
}
