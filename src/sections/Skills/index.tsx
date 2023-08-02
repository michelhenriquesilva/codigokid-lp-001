import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import IconMagic from "../../assets/magic-wand 1.png";
import IconRobot from "../../assets/robot (2) 1.png";
import IconRobotArm from "../../assets/robotic-arm 1.png";
import IconCalc from "../../assets/calculator (1) 1.png";

const cardscontainer = {
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

export default function Skills() {
  const animationControls = useAnimation();

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
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
      threshold: 0.2, // Define a porcentagem da seção que deve estar visível para acionar a animação
    };

    const observer = new IntersectionObserver(handleScroll, options);

    const section = document.querySelector(".sec-skills");
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
    <div className="circle1"></div>
    <div className="circle2"></div>
    <div className="circle3"></div>
    <div className="circle4"></div>
    <div className="circle5"></div>
    <div className="circle6"></div>
    <div className="circle7"></div>
    <div className="circle8"></div>
    <div className="circle9"></div>
    <div className="circle10"></div>
    <div className="circle11"></div>
    <div className="circle12"></div>
    <div className="circle13"></div>
      <section className="sec-skills">
        <div className="circle-title"></div>
        <a className="title-skills">
          <span className="span-white">Habilid</span>
          ades desenvolvidas
        </a>
        <motion.div
          className="cardscontainer"
          variants={cardscontainer}
          initial="hidden"
          animate={animationControls}
        >
          <motion.div
            className="item card"
            whileHover={{ scale: 1.2 }}
            variants={item}
          >
            <img src={IconMagic} alt="" />
            <p>
              Resolução de
              <br />
              problemas
            </p>
          </motion.div>
          <motion.div
            className="item card"
            whileHover={{ scale: 1.2 }}
            variants={item}
          >
            <img src={IconRobot} alt="" />
            <p>
              Pensamento
              <br />
              computacional
            </p>
          </motion.div>
          <motion.div
            className="item card"
            whileHover={{ scale: 1.2 }}
            variants={item}
          >
            <img src={IconRobotArm} alt="" />
            <p>
              Robótica
              <br />
              Educacional
            </p>
          </motion.div>
          <motion.div
            className="item card"
            whileHover={{ scale: 1.2 }}
            variants={item}
          >
            <img src={IconCalc} alt="" />
            <p>
              Matemática
              <br />
              Digital
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
