import "./Header.css";
import logoImg from "../../assets/raven.png";

const Header = () => {
 return (
  <header className="header">
   <div className="container header__container">
    <div className="header__logo">
     <img src={logoImg} alt="Ворон" />
    </div>
    <nav className="header__nav">
     <ul className="header__menu">
      <li className="header__item">
       <a href="#">О проекте</a>
      </li>
     </ul>

     <div className="header__actions">
        <button className="btn header__btn">Язык</button>
        <button className="btn header__btn">Ночь</button>
     </div>
    </nav>
   </div>
  </header>
 );
};

export default Header;
