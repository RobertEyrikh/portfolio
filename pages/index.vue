<script setup>
import { useMainStore } from "~~/store/mainStore";
const mainStore = useMainStore();
const text = computed(() => {
  return mainStore.getText
})
</script>

<template>
  <div class="home-page">
    <v-spacer></v-spacer>
    <v-container class="pl-10 pr-10">
      <v-row class="mt-0 mb-16">
        <v-card color="secondary-darken-1" rounded="lg" variant="elevated" class="mx-auto" width="522px" elevation="0">
          <v-card-text class="d-flex justify-center text-subtitle-1">
            {{ text.brieflyBio }}
          </v-card-text>
        </v-card>
      </v-row>

      <v-row>
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-text text-color="white" class="pa-0">
            <v-row align="center" justify="space-between">
              <v-col>
                <v-card-title class="pa-0 text-h4 font-weight-bold">{{ text.myName }}</v-card-title>
                <v-card-text class="pa-0 text-subtitle-2">{{ text.brieflyDescription }}</v-card-text>
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
          <v-card-title class="pa-0 mb-3 font-weight-bold">{{ text.about }}</v-card-title>
          <v-card-text class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1">
            {{ text.myWork }}
          </v-card-text>
          <div class="d-flex justify-center">
            <v-btn to="projects" class="mt-4" color="deep-purple-lighten-1" variant="flat">{{ text.myPortfolio }}></v-btn>
          </div>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-16 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">{{ text.biographyTitle }}</v-card-title>
          <v-row class="mt-2" v-for="step in text.biography" :key="step.year" justify="space-between">
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
          <v-card-title class="pa-0 mb-3 font-weight-bold">{{ text.scillsTitle }}</v-card-title>
          <v-card-text v-for="skill in text.scills" class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1 pb-1">
            <v-icon size="small" :icon="skill.icon"></v-icon> &nbsp
            <p>{{ skill.name }}</p>
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-10 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">{{ text.hobbiesTitle }}</v-card-title>
          <v-card-text class="text--grey-lighten-1 text-justify pa-0 d-flex text-subtitle-1">
            {{ text.hobbies }}
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="mt-10 mb-10 pa-0">
        <v-card class="mx-auto" width="522px" elevation="0">
          <v-card-title class="pa-0 mb-3 font-weight-bold">{{ text.contactsTitle }}</v-card-title>
          <v-row v-for="contact in text.contacts" :key="contact.link" justify="space-between" class="pa-0">
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
.home-page {}
</style>
