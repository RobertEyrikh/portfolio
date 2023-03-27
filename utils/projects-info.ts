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
    description: "Project F",
    images: ["/fillib-1.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client", "https://github.com/RobertEyrikh/bingual-server"] },
      { fieldName: "стэк", fieldValue: ["Vue 3, Express js, mongoDb"] },
    ],
  },
  {
    name: "Bingual",
    description: `Веб  приложение в котором пользователь создает карточки слово-перевод, а затем заполняет их.
    Пользователь может авторизироваться, создавать, удалять и редактировать карточки, реализован drag n drop, подтверждение по почте.
    Фронтенд создан на Vue js, использованы библиотеки axios для асинхронных запросов, pinia в качестве state менеджера, 
    vue-router для постраничной навигации. В качестве базы данных был выбран Mongo DB.
    Бэкенд реализован на node js + express js. Использованы библиотеки bcrypt для хэширования
    паролей, cookie-parser для парсинга куки файлов (refresh token) express-validators для валидации полей запроса, 
    mongoose для взаимодействия с Mongo DB, json-web-token для создания jwt токенов. А так же nodemailer, cors, dotenv, uuid, nodemon`,
    images: ["/bingual-2.jpg", "/bingual-1.jpg", "/bingual-3.jpg" ,"/bingual-4.jpg", "/bingual-5.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client", "https://github.com/RobertEyrikh/bingual-server"] },
      { fieldName: "стэк", fieldValue: ["Vue 3, Express js, mongoDB"] },
    ],
  },
  {
    name: "Fillib",
    description: "Project F",
    images: ["/fillib-1.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client", "https://github.com/RobertEyrikh/bingual-server"] },
      { fieldName: "стэк", fieldValue: ["Vue 3, Express js, mongoDb"] },
    ],
  },
  {
    name: "Nersisyan",
    description: "Project F",
    images: ["/fillib-1.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/" ]},
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client"] },
      { fieldName: "стэк", fieldValue: ["Vue 3, Express js, mongoDb"] },
    ],
  },
  {
    name: "Letherman",
    description: "Project F",
    images: ["/fillib-1.jpg"],
    tags: [
      { fieldName: "сайт", fieldValue: ["http://bingual.eyrikhproductions.ru/"] },
      { fieldName: "гитхаб", fieldValue: ["https://github.com/RobertEyrikh/bingual-client"] },
      { fieldName: "стэк", fieldValue: ["Vue 3, Express js, mongoDb"] },
    ],
  },
];

export const getProjectInfo = (projectName: string) => {
  return projects.find((project) => project.name === projectName);
};
