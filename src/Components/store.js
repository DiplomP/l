import CssPage from "./Pages/CSS/CssPage"
import PresentationCSS from "./Pages/CSS/presentation/PresentationCSS"
import VideosCSS from "./Pages/CSS/videos/VideosCSS"
import HomePage from "./Pages/Home/Home"
import HtmlPage from "./Pages/HTML/HtmlPage"
import PresentationHTML from "./Pages/HTML/presentation/Presentation"
import VideosHTML from "./Pages/HTML/videos/VideosHTML"
import Ide from "./Pages/IDE/Ide"
import JavaScriptPage from "./Pages/JS/JavaScriptPage"
import PresentationJS from "./Pages/JS/presentation/PresentationJS"
import VideosJS from "./Pages/JS/videos/VideosJS"
import PresentationReact from "./Pages/React/presentation/PresentationReact"
import ReactPage from "./Pages/React/ReactPage"
import VideosReact from "./Pages/React/videos/VideosReact"

export const items = [
    {
      value: 'Язык разметки',
      href: '/html',
      icon: 'html'
    },
    {
      value: 'Таблица стилей',
      href: '/css',
      icon: 'css'
    },
    {
      value: 'Язык сценариев',
      href: '/js',
      icon: 'javascript'
    },
    {
      value: 'Фреймворк React',
      href: '/react',
      icon: 'logo_dev'
    },
    {
      value: 'Редакторы кода',
      href: '/editors',
      icon: 'code'
    }
  ]

export const publicRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/html',
    Component: HtmlPage
  },
  {
    path: '/react',
    Component: ReactPage
  },
  {
    path: '/js',
    Component: JavaScriptPage
  },
  {
    path: '/css',
    Component: CssPage
  },
  {
    path: '/editors',
    Component: Ide
  },
  {
    path: '/html/videos',
    Component: VideosHTML
  },
  {
    path: '/css/videos',
    Component: VideosCSS
  },
  {
    path: '/js/videos',
    Component: VideosJS
  },
  {
    path: '/react/videos',
    Component: VideosReact
  },
  {
    path: '/html/presentations',
    Component: PresentationHTML
  },
  {
    path: '/css/presentations',
    Component: PresentationCSS
  },
  {
    path: '/js/presentations',
    Component: PresentationJS
  },
  {
    path: '/react/presentations',
    Component: PresentationReact
  },
]

export const home = [
  {
    header: 'HTML',
    description: 'HTML - cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.',
    image: 'https://itea.asia/wp-content/uploads/2020/10/html-css-1.png',
    alt: 'html',
    to: '/html',
    width: 345,
    height: 140
  },
  {
    header: 'CSS',
    description: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL. При помощи CSS задаётся расположение элементов на странице и его стили. Это помогает странице не выглядеть блекло.',
    image: 'https://repository-images.githubusercontent.com/179574410/54cd7e80-6142-11e9-8f2e-c3774582a097',
    alt: 'css',
    to: '/css',
    width: 345,
    height: 140
  },
  {
    header: 'JavaScript',
    description: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.',
    image: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg',
    alt: 'html',
    to: '/js',
    width: 345,
    height: 140
  },
  {
    header: 'React',
    description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. ',
    image: 'https://ru.reactjs.org/logo-og.png',
    alt: 'react',
    to: '/react',
    width: 345,
    height: 140
  },
  {
    header: 'IDE',
    description: 'Интегриованная среда разработки, ИСP, также единая среда разработки, ЕСР — комплекс программных средств, используемый программистами для разработки программного обеспечения. Среда разработки включает в себя: текстовый редактор, Транслятор, средства автоматизации сборки, отладчик.',
    image: 'https://learn.g2.com/hubfs/G2CM_FI128_Learn_Article_Images-%5BIDE%5D_V1a.png',
    alt: 'ide',
    to: '/editors',
    width: 345,
    height: 140
  },
]









// lessons -----------------------------------------------------------------------------------------------------------










export const lessonsTypes = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/html/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/html/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: 'presentations',
    to: '/html/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/html/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/html/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]

export const lessonsTypesCSS = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/css/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/css/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/css/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/css/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/css/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]

export const lessonsTypesJS = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/js/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/js/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/js/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/js/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/js/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]

export const lessonsTypesReact = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/js/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/react/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/react/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/react/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/react/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]



// videos ----------------------------------------------------------------------------------------------------------------------------------------------

export const videosHTML = [
  {
    id: 1,
    value: 'Урок №1',
    link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hc' 
  },
  {
    id: 2,
    value: 'Урок №2',
    link: 'https://www.youtube.com/watch?v=oBKaXB9CMMo'
  },
  {
    id: 3,
    value: 'Урок №3',
    link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
  },
  {
    id: 4,
    value: 'Урок №4',
    link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
  },
  {
    id: 5,
    value: 'Урок №5',
    link: 'https://www.youtube.com/watch?v=nF0X9PRVOsA'
    },
    {
    id: 6,
    value: 'Урок №6',
    link: 'https://www.youtube.com/watch?v=nxtV-PwYkjU'
    },
    {
    id: 7,
    value: 'Урок №7',
    link: 'https://www.youtube.com/watch?v=jZR8m9djWXs'
    },
    {
    id: 8,
    value: 'Урок №8',
    link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hchttps://www.youtube.com/watch?v=abWbB4RYFYM'
    },
    {
    id: 9,
    value: 'Урок №9',
    link: 'https://www.youtube.com/watch?v=x55mwoVJ_IE'
    },
    {
    id: 10,
    value: 'Урок №10',
    link: 'https://www.youtube.com/watch?v=LOphfrzuxtc'
    },
  ];

  export const videosCSS = [
    {
      id: 1,
      value: 'Урок №1',
      link: 'https://youtu.be/Fw679JPOo0w' 
    },
    {
      id: 2,
      value: 'Урок №2',
      link: 'https://youtu.be/THkRKsJL4Ac'
    },
    {
      id: 3,
      value: 'Урок №3',
      link: 'https://youtu.be/Dy3xNaSvacE'
    },
    {
      id: 4,
      value: 'Урок №4',
      link: 'https://youtu.be/VlWE8eCz5dE'
    },
    {
      id: 5,
      value: 'Урок №5',
      link: 'https://youtu.be/ziJwJdJXNtU'
      },
      {
      id: 6,
      value: 'Урок №6',
      link: 'https://youtu.be/XhtbLygCpcs'
      },
      {
      id: 7,
      value: 'Урок №7',
      link: 'https://youtu.be/ois3wNS7ZdQ'
      },
      {
      id: 8,
      value: 'Урок №8',
      link: 'https://youtu.be/4dOZkj4VwSM'
      },
      {
      id: 9,
      value: 'Урок №9',
      link: 'https://youtu.be/J38NyKcuyXo'
      },
      {
      id: 10,
      value: 'Урок №10',
      link: 'https://youtu.be/mFO1mEZn4dw'
      },
      {
      id: 11,
      value: 'Урок №11',
      link: 'https://youtu.be/1OU7iL8mFE0'
      },
      {
      id: 12,
      value: 'Урок №12',
      link: 'https://youtu.be/jfJ4Dn37Q6k'
      },
      {
      id: 13,
      value: 'Урок №13',
      link: 'https://youtu.be/U-dtG9yNxuo'
      },
      {
      id: 14,
      value: 'Урок №14',
      link: 'https://youtu.be/C7u291bannE'
      },
      {
      id: 15,
      value: 'Урок №15',
      link: 'https://youtu.be/7SKEvxh9e2k'
      },
    ];

    export const videosJS = [
      {
        id: 1,
        value: 'Урок №1',
        link: 'https://youtu.be/aQkgUUmUJy4' 
      },
      {
        id: 2,
        value: 'Урок №2',
        link: 'https://youtu.be/UGapN-hrekw'
      },
      {
        id: 3,
        value: 'Урок №3',
        link: 'https://youtu.be/pahO5XjnfLA'
      },
      {
        id: 4,
        value: 'Урок №4',
        link: 'https://youtu.be/vIZs5tH-HGQ'
      },
      {
        id: 5,
        value: 'Урок №5',
        link: 'https://youtu.be/1idOY3C1gYU'
        },
        {
        id: 6,
        value: 'Урок №6',
        link: 'https://youtu.be/cS6nTVNzOPw'
        },
        {
        id: 7,
        value: 'Урок №7',
        link: 'https://youtu.be/uLY9GXGMXaA'
        },
        {
        id: 8,
        value: 'Урок №8',
        link: 'https://youtu.be/SHiUyM_fFME'
        },
        {
        id: 9,
        value: 'Урок №9',
        link: 'https://youtu.be/np08WdS9OXg'
        },
        {
        id: 10,
        value: 'Урок №10',
        link: 'https://youtu.be/mSbyhHfxs04'
        },
        {
        id: 11,
        value: 'Урок №11',
        link: 'https://youtu.be/7wtbNNiOh30'
        },
        {
        id: 12,
        value: 'Урок №12',
        link: 'https://youtu.be/nEabP9CYCAQ'
        },
        {
        id: 13,
        value: 'Урок №13',
        link: 'https://youtu.be/mbcP3Oc0PjU'
        },
        {
        id: 14,
        value: 'Урок №14',
        link: 'https://youtu.be/eKCD9djJQKc'
        },
        {
        id: 15,
        value: 'Урок №15',
        link: 'https://youtu.be/SGeQ-U0G7dE'
        },
        {
        id: 16,
        value: 'Урок №16',
        link: 'https://youtu.be/wWYokY0Pt2M'
        },
        {
        id: 17,
        value: 'Урок №17',
        link: 'https://youtu.be/3-bZ7gLVSzo'
        },
      ];

export const videosReact = [
    {
      id: 1,
      value: 'Урок №1',
      link: 'https://youtu.be/ftrn50AJa2w' 
    },
    {
      id: 2,
      value: 'Урок №2',
      link: 'https://youtu.be/d8xnYqiP3ZM'
    },
    {
      id: 3,
      value: 'Урок №3',
      link: 'https://youtu.be/yUL4fW4mpS8'
    },
    {
      id: 4,
      value: 'Урок №4',
      link: 'https://youtu.be/vwsG0VhDfcM'
    },
    {
      id: 5,
      value: 'Урок №5',
      link: 'https://youtu.be/QuI_iLJ7gNs'
      },
      {
      id: 6,
      value: 'Урок №6',
      link: 'https://youtu.be/9sMBba8BcGA'
      },
      {
      id: 7,
      value: 'Урок №7',
      link: 'https://youtu.be/sbCgQJQNZKs'
      },
      {
      id: 8,
      value: 'Урок №8',
      link: 'https://youtu.be/F0f3iov79q4'
      },
      {
      id: 9,
      value: 'Урок №9',
      link: 'https://youtu.be/A152d1_CpRE'
      },
      {
      id: 10,
      value: 'Урок №10',
      link: 'https://youtu.be/dsOPKYHTarM'
      },
      {
      id: 11,
      value: 'Урок №11',
      link: 'https://youtu.be/MVNrPpRBUdg'
      },
      {
      id: 12,
      value: 'Урок №12',
      link: 'https://youtu.be/Lvd3wQ4hyvI'
      },
      {
      id: 13,
      value: 'Урок №13',
      link: 'https://youtu.be/G6dsNP39znI'
      },
      {
      id: 14,
      value: 'Урок №14',
      link: 'https://youtu.be/nsTyd-Z_Tlw'
      },
    ];