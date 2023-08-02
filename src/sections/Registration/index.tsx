import "./registration.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import Vetor from "../../assets/Vector 256.png";
import Cicle from "../../assets/Ellipse 28.png";
import Image from "../../assets/Frame 33870.png";
import Button from "../../components/ButtonMatricula";
import ButtonMatricula from "../../components/ButtonMatricula";

export default function Registration() {
  return (
    <>
      <img className="fundo-registration" src={Vetor} alt="" />
      <section className="registration">
        <div className="row-left-registration">
          <img className="circle-kids" src={Cicle} alt="" />
          <img className="imagem-kids" src={Image} alt="" />
        </div>

        <div className="row-right-registration">
          <div className="subtitle">GARANTA O DESCONTO DE 30%</div>
          <div className="title">Matricule seu filho na Código Kid</div>
          <p>
            A Código Kid está alinhada com os 05 pilares da BNCC, que
            <br /> promove a educação nas escolas por meio de XYZ
          </p>
          <ButtonMatricula />
        </div>
      </section>
    </>
  );
}
