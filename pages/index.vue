<script setup>
const brieflyBio = "Привет, я веб разработчик из Москвы";
const myName = "Роберт Эйрих";
const mySkills = [
  { name: "JavaScript", icon: "mdi-language-javascript" },
  { name: "Vue.js", icon: "mdi-vuejs" },
  { name: "Nuxt", icon: "mdi-nuxt" },
  { name: "HTML", icon: "mdi-language-html5" },
  { name: "CSS", icon: "mdi-language-css3" },
  { name: "Vuetify", icon: "mdi-vuejs" },
  { name: "TypeScript", icon: "mdi-language-typescript" },
  { name: "Node js", icon: "mdi-nodejs" },
  { name: "Express js", icon: "custom:express" },
  { name: "Jest", icon: "custom:jest" },
  { name: "Three.js", icon: "custom:threeJs" },
];
const myWork =
  "Фрилансер и веб разработчик из Москвы. Имею опыт работы с JavaScript, TypeScript, node js, а также фреймворками Vue.js, Nuxt, express js и библиотеками Jest, React.js, Three.js. Меня интересует процесс разработки веб приложения на всех этапах, начиная с дизайна, заканчивая их развертыванием на сервере.";
const myBio = [
  { year: "2000", text: "Родился в городе Партизанск, Приморский край" },
  { year: "2021", text: "Окончил Московский Институт Электронной Техники по специальности робототехника (11.03.03)" },
  { year: "2022 по н.в", text: "Работа фрилансером" },
];
const myHobbies = "Спортзал, Путешествия, Видеоигры";
const contacts = [
  { name: "RobertEyrikh@gmail.com", link: "mailto:RobertEyrikh@gmail.com", icon: "mdi-gmail" },
  { name: "@EyrikhR", link: " https://t.me/EyrikhR", icon: "custom:telegram" },
  { name: "@RobertEyrikh", link: "https://github.com/RobertEyrikh", icon: "mdi-github" },
];
</script>

<template>
  <div class="home-page">
    <v-spacer></v-spacer>
    <v-container class="pl-10 pr-10">
      <v-row class="mt-0 mb-16">
        <v-card color="secondary-darken-1" rounded="lg" variant="elevated" class="mx-auto" width="522px" elevation="0">
          <v-card-text class="d-flex justify-center text-subtitle-1">
            {{ brieflyBio }}
          </v-card-text>
        </v-card>
      </v-row>

      <v-row>
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-text text-color="white" class="pa-0">
            <v-row align="center" justify="space-between">
              <v-col>
                <v-card-title class="pa-0 text-h4 font-weight-bold">{{ myName }}</v-card-title>
                <v-card-text class="pa-0 text-subtitle-2">Веб разработчик (Vue js, node js)</v-card-text>
              </v-col>
              <v-col class="pl-0">
                <v-img width="120" cover aspect-ratio="1/1" src="photo.png" class="ml-auto"></v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-16 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">О себе</v-card-title>
          <v-card-text class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1">
            {{ myWork }}
          </v-card-text>
          <div class="d-flex justify-center">
            <v-btn to="projects" class="mt-4" color="deep-purple-lighten-1" variant="flat">Мое портфолио ></v-btn>
          </div>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-16 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">Биография</v-card-title>
          <v-row class="mt-2" v-for="step in myBio" :key="step.year" justify="space-between">
            <v-col cols="4" class="pt-0">
              <v-card-text class="pa-0 text-subtitle-1 font-weight-bold">{{ step.year }}</v-card-text>
            </v-col>
            <v-col cols="8" class="pl-0 pt-0">
              <v-card-text class="pa-0 text-subtitle-1">{{ step.text }}</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-10 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">Ключевые навыки</v-card-title>
          <v-card-text v-for="skill in mySkills" class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1 pb-1">
            <v-icon size="small" :icon="skill.icon"></v-icon> &nbsp
            <p>{{ skill.name }}</p>
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-10 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">Мои увлечения</v-card-title>
          <v-card-text class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1">
            {{ myHobbies }}
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-10 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">Контакты</v-card-title>
          <v-row v-for="contact in contacts" :key="contact.link" justify="space-between" class="pa-0">
            <v-col class="ma-0">
              <v-btn variant="text" :href="contact.link" target="_blank" color="purple-lighten-1" class="pl-0 text-subtitle-1">
                <v-icon :icon="contact.icon"></v-icon>
                &nbsp{{ contact.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped>
/* .slogan {
  background-color: rgb(var(--v-theme-secondary))
} */
/* .home-page {
  background-color: #212121;
  min-height: 100vh;
} */
</style>
