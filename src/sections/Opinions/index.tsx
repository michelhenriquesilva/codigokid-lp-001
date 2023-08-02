import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ImgFundoTop from "../../assets/Vector-azul.svg";
import { TestimonialCarousel } from "../../components/TestimonialCarousel";


export default function Oponions() {
  return (
    <>
      <section className="section-opinions">
        <div className="tile-opnions">Opnião de pais e alunos</div>
        <TestimonialCarousel />
      </section>
    </>
  );
}
