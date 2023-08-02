import "./navbar.css";
import Logo from '../../assets/logo.png';
import Background from '../../assets/Vector 260.png';


const Navbar = () => {
  return (
    <nav className="navbar" id="inicio">
      <img className="fundo" src={Background}/>
      <div className="logo">
        <img src={Logo} alt="" width={250}/>
      </div>
     
        <div className="links">
          <a className="a">Unique learing</a>
          <a className="a">Unique learing</a>
          <a>Unique learing</a>
        </div>
      
      <div className="button">
        <div className="texto-button">Faça sua matrícula!</div>
      </div>
    </nav>
  );
};

export default Navbar;
