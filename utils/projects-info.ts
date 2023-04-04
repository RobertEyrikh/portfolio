type tagType = {
  fieldName: string;
  fieldValue: string[];
};

type projectType = {
  name: string;
  description: string;
  images: string[];
  tags: tagType[];
};

const projects: projectType[] = [
  {
    name: "Portfolio",
    description: "Сайт-портфолио, с помощью которого вы можете рассмотреть мои работы. Это ssr приложение разработанное с помощью Nuxt. 3д модель в шапке сайта, добавлена с помощью библиотеки Three.js. Приложение развернуто с  помощью docker. В качестве веб сервера выступает Nginx.",
    images: ["/portfolio-1.jpg"],
    tags: [
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/portfolio"] },
      { fieldName: "стэк", fieldValue: ["TypeScript, Nuxt, Three js"] },
    ],
  },
  {
    name: "Bingual",
    description: `Bingual это веб приложение в котором пользователь создает карточки слово-перевод, а затем учит по ним слова, поочередно заполняя поля.
    Пользователь может авторизироваться, создавать, удалять и редактировать карточки. Реализован drag and drop, валидация форм и подтверждение по почте.
    Фронтенд разработан с помощью Vue.js, использованы библиотеки axios для асинхронных запросов, pinia в качестве state менеджера.
    Для базы данных был выбран Mongo DB.
    Бэкенд реализован на node.js + express js. Использованы библиотеки
    mongoose, json-web-token, nodemailer.
    Приложение упаковано в докер контейнеры и развернуто с помощью docker compose. В качестве веб сервера выступает Nginx.`,
    images: ["/bingual-2.jpg", "/bingual-3.jpg" ,"/bingual-4.jpg", "/bingual-5.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client", "https://github.com/RobertEyrikh/bingual-server"] },
      { fieldName: "стэк", fieldValue: ["JavaScript, Vue 3, Express js, mongoDB"] },
    ],
  },
  {
    name: "Fillib",
    description: "Fillib это онлайн библиотека для ваших просмотренных фильмов, а так же фильмов которые вы планируете посмотреть. В этом веб приложении вы можете указать собственную оценку, описание и дату просмотра фильма, а во вкладке просмотренные они автоматически сортируются по дате просмотра. На главной странице находятся фильмы, данные о которых берутся с Kinopoisk unofficial Api. Фильмы разделены по категориям. Присутствует пагинация, поиск и фильтрация, их состояние синхронизированно с адресной строкой. Фронтенд разработан с помощью Vue js, в качестве препроцессора для css использован scss, vuex в качестве глобального хранилища. Бекенд реализован с помощью node.js + express js. Реализована авторизация по jwt  токену. Использованы библиотеки jsonwebtoken, mongoose. Приложение упаковано в докер контейнеры и развернуто с помощью docker compose. В качестве веб сервера выступает Nginx.",
    images: ["/fillib-1.jpg", "/fillib-2.jpg", "/fillib-3.jpg", "/fillib-4.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/FilLib", "https://github.com/RobertEyrikh/fillib-backend"] },
      { fieldName: "стэк", fieldValue: ["JavaScript, Vue 3, Express js, mongoDb"] },
    ],
  },
  {
    name: "Nersisyan",
    description: "Сайт адвоката Нерсисяна Карена Георгиевича. Это landing page с формой обратной связи, реализованной через telegram бот. Приложение разработано с помощью Vue.js. Использованы Bootstrap в качестве UI фреймворка, библиотеки axios для асинхронных запросов и vuelidate. Приложение развернуто с помощью docker. В качестве веб сервера выступает Nginx.",
    images: ["/nersisyan-2.jpg", "/nersisyan-3.jpg", "/nersisyan-4.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://nersisyan.eyrikhproductions.ru/" ]},
      { fieldName: "стэк", fieldValue: ["JavaScript, Vue 3, Bootstrap"] },
    ],
  },
  {
    name: "Letherman",
    description: "Letherman shop это онлайн магазин товаров из кожи, а так же мой первый пет проект. В нём присутствует админ панель в которой можно создавать, измененять и редактировать товары магазина, авторизация, изменение пароля, корзина товаров, избранное, поиск и сортировка, валидация форм, система комментариев с модерацией. В качестве бэкенд сервисов здесь используется serverless решение от google - Firebase. Фронтенд часть приложения разработана с помощью Vue js. Использованы библиотеки vuex, vuelidate, firebase, axios.",
    images: ["/bgshop-2.jpg", "/bgshop-3.jpg", "/bgshop-4.jpg", "/bgshop-5.jpg"],
    tags: [
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/OnlineBagShop"] },
      { fieldName: "стэк", fieldValue: ["JavaScript, TypeScript, Vue 3, Firebase"] },
    ],
  },
];

export const getProjectInfo = (projectName: string) => {
  return projects.find((project) => project.name === projectName);
};
