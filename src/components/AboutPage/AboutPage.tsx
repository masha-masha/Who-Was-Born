import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

export const AboutPage: React.FC = () => {
 const { t } = useTranslation();

 return (
  <section className="about-section">
   <div className="about-section__glow" />

   <div className="about-section__container">
    <div className="about-card">
     <div className="about-card__header">
      <span className="about-card__badge">
       <span className="about-card__badge-dot" />
       {t("badgeText")}
      </span>
      <h1 className="about-card__title">{t("aboutTitle")}</h1>
     </div>

     <p className="about-card__text">{t("aboutText")}</p>

     <div className="about-card__footer">
      <span className="about-card__tagline">{t("aboutTagline")}</span>
     </div>
    </div>
   </div>
  </section>
 );
};
