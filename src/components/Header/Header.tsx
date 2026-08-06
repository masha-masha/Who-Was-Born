import "./Header.css";
import logoImg from "../../assets/raven.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {

 const { t } = useTranslation();

 return (
  <header className="header">
   <div className="container header__container">
    <div className="header__logo">
     <img src={logoImg} alt="Ворон" />
    </div>
    <nav className="header__nav">
     <ul className="header__menu">
      <li className="header__item">
      <Link to="/about">{t("aboutTitle")}</Link>
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
