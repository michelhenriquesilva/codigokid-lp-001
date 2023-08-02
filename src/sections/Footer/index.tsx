import "./style.css";
import Logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="collum-left">
          <Link to="inicio" smooth={true} duration={500}>
            <img src={Logo} alt="" />
          </Link>
          <p>
            A Maior Escola do Brasil de
            <br /> programação e robótica para
            <br /> crianças e adolescentes!
          </p>
        </div>
        <div className="collum-mid">
          <div className="titulo-social">CANAIS DIGITAIS</div>
          <div className="social">
            <FaInstagram size={30} style={{ color: "white" }} />
            <a>@codigokid.barreiras</a>
          </div>
          <div className="social">
            <PiFacebookLogo size={30} style={{ color: "white" }} />
            <a>@codigokid.barreiras</a>
          </div>
          <div className="social">
            <HiOutlineMailOpen size={30} style={{ color: "white" }} />
            <a>@codigokid.barreiras</a>
          </div>
        </div>
        <div className="collum-right">
          <div className="title-collum-right">ONDE ESTAMOS</div>

          <a
            href="https://www.google.com/search?q=Rua+Bar%C3%A3o+de+Cotegipe%2C+N+606+-+Centro+Barreiras%2FBA&oq=Rua+Bar%C3%A3o+de+Cotegipe%2C+N+606+-+Centro+Barreiras%2FBA&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBBzY0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}>
            Rua Barão de Cotegipe, N 606 - Centro
            <br /> Barreiras/BA
          </a>
          <a
            href="tel:+5577999436073"
            style={{ textDecoration: "none", color: "#fff" }}>
            +55 (77) 9 9943-6073
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            margin: "10px 0",
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#fff",
            display: "flex",
            position: "absolute",
            left: "40%",
            bottom: "-665%"
          }}>
          © {new Date().getFullYear()} Todos os direitos reservados à Código Kid
          Barreiras
        </div>
      </section>
    </>
  );
}
