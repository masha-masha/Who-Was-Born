import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  RU: {
    translation: {
      aboutTitle: 'О проекте',
      aboutText: 'Проект носит исключительно образовательный характер. Его цель — познакомить посетителя сайта с интересными личностями, которые живут сейчас или когда-то жили.',
      aboutTagline: 'Никакой коммерции и выгоды — только любовь.',
      badgeText: 'Образовательный проект',
      born: 'Родился',
      died: 'Умер',
      city: 'Город',
      dates: 'Годы жизни',
      funFactsTitle: 'Интересные факты',
      backToList: '← Назад к списку',
      readWiki: 'Читать на Википедии',
    },
  },
  BY: {
    translation: {
      aboutTitle: 'Пра праект',
      aboutText: 'Праект мае выключна адукацыйны характар. Яго мэта — пазнаёміць наведвальніка сайта з цікавымі постацямі, якія жывуць цяпер ці калісьці жылі.',
      aboutTagline: 'Ніякай камерцыі і выгады — толькі любоў.',
      badgeText: 'Адукацыйны праект',
      born: 'Нарадзіўся',
      died: 'Памёр',
      city: 'Горад',
      dates: 'Гады жыцця',
      funFactsTitle: 'Цікавыя факты',
      backToList: '← Назад да спісу',
      readWiki: 'Чытаць на Вікіпедыі',
    },
  },
  EN: {
    translation: {
      aboutTitle: 'About Us',
      aboutText: 'This project is purely educational. Its goal is to introduce website visitors to interesting personalities who live now or once lived.',
      aboutTagline: 'No commerce, no profit — only love.',
      badgeText: 'Educational project',
      born: 'Born',
      died: 'Died',
      city: 'City',
      dates: 'Years of life',
      funFactsTitle: 'Interesting Facts',
      backToList: '← Back to List',
      readWiki: 'Read on Wikipedia',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'RU', 
  fallbackLng: 'RU',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;