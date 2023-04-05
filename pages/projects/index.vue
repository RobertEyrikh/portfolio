<script setup>
const title = ref("Robert Eyrikh's projects")
const description = ref('Мои проекты')
useHead({
  title,
  meta: [
    {
      name: "Robert Eyrikh",
      content: description,
    },
  ],
});
const projects = [
  { name: "Portfolio", description: "Вы сейчас здесь ;)", image: "/portfolio-1.jpg" },
  { name: "Bingual", description: "Приложение для изучения иностранных слов, c помощью созданных вами карточек", image: "/bingual-1.jpg" },
  { name: "Fillib", description: "Библиотека с вашими любимыми фильмами", image: "/fillib-1.jpg" },
  { name: "Nersisyan", description: "Веб сайт Адвоката Нерсисяна", image: "/nersisyan-1.jpg" },
  { name: "Letherman", description: "Интернет магазин изделий из кожи", image: "/bagshop-1.jpg" },
];
</script>

<template>
  <div class="projects-page">
    <v-spacer></v-spacer>
    <v-container class="pl-10 pr-10">
      <v-sheet elevation="0" class="mx-auto" max-width="522px">
        <v-card-title class="pa-0 font-weight-bold">Проекты</v-card-title>
        <v-row class="mt-4 mb-4">
          <v-col v-for="project in projects" :key="project.name" class="mb-3" cols="12" sm="6">
            <v-card :to="`/projects/${project.name}`" rounded="lg" elevation="0">
              <v-img class="img-rounded" :height="120" cover :src="project.image"></v-img>
              <v-card-title class="text-center">{{ project.name }}</v-card-title>
              <v-card-text class="text-center">{{ project.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped>
.img-rounded {
  border-radius: 10px;
}
</style>
