import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './PersonDetail.css';
import temImg from "../../assets/temperary.png"
import { peopleData } from "../../data/people";



const PersonDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = peopleData.findIndex((c) => c.slug === slug);
  const person = peopleData[currentIndex];

  return (
    <section className="person-page">
  
      <div className="person-page__glow" />

      <div className="person-page__container container">
        
        <button className="person-page__back">
          {t('backToList')}
        </button>

        <div className="person-card">
          
          <div className="person-card__aside">
            <div className="person-card__image-wrapper">
             <img src={temImg} alt="изображение человека"/>
            </div>

            <div className="person-card__meta">
              <div className="meta-item">
                <span className="meta-item__label">{t('city')}</span>
                <span className="meta-item__value">{person.city}</span>
              </div>
              <div className="meta-item">
                <span className="meta-item__label">{t('dates')}</span>
                <span className="meta-item__value">{person.dates}</span>
              </div>
            </div>
          </div>

          <div className="person-card__content">
            <h1 className="person-card__name">{person.name}</h1>
            <p className="person-card__desc">{person.shortDesc}</p>

            <div className="person-card__divider" />

            <div className="person-card__facts facts-block">
              <h2 className="facts-block__title">
                <span className="facts-block__icon">✨</span>
                {t('funFactsTitle')}
              </h2>
              <ul className="facts-block__list">
                {person.funFacts.map((fact, index) => (
                  <li key={index} className="facts-block__item">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="person-card__actions">
              <a
                href={person.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="person-card__wiki-btn"
              >
                🌐 {t('readWiki')}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonDetail;