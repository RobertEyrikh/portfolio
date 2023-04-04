<script setup>
import { useTheme } from "vuetify";
const appTitle = ref("Robert Eyrikh");
const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "myCustomLightTheme" : "myCustomDarkTheme";
};
</script>

<template>
  <div class="the-header">
    <v-app-bar flat color="transparent" sticky width="100%" class="app-bar">
      <v-toolbar-title class="d-sm-none logo">
        <v-btn to="/" variant="plain" class="logo pointer" size="large">
          <v-icon icon="custom:logo"  size="large" class="logo__icon"></v-icon>
          {{ appTitle }}
        </v-btn>
      </v-toolbar-title>

      <v-spacer class="d-none d-sm-block"></v-spacer>
      <v-toolbar-items class="d-none d-sm-block">
        <v-btn to="/" variant="plain" class="logo pointer" size="large">
          <v-icon icon="custom:logo" size="large" class="logo__icon"></v-icon>
          {{ appTitle }}
        </v-btn>
        <v-btn flat to="/projects" prepend-icon="mdi-folder"> Проекты </v-btn>
        <v-btn flat href="https://github.com/RobertEyrikh?tab=repositories" target="_blank" prepend-icon="mdi-github"> Репозитории </v-btn>
      </v-toolbar-items>
      <v-spacer class="d-none d-sm-block"></v-spacer>
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn class="d-sm-none" dark v-bind="props" icon>
            <v-icon size="x-large"> mdi-menu </v-icon>
          </v-btn>
        </template>
        <v-list bg-color="secondary-darken-1">
          <v-list-item class="pointer" to="/projects" value="Проекты">
            <v-list-item-title>Проекты</v-list-item-title>
          </v-list-item>
          <v-list-item class="pointer" href="https://github.com/RobertEyrikh?tab=repositories" target="_blank" value="item.title">
            <v-list-item-title>Репозитории</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon="mdi-brightness-4" @click="toggleTheme"></v-btn>
    </v-app-bar>
    <client-only>
      <v-card elevation="0" height="400">
        <the-model></the-model>
      </v-card>
    </client-only>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: black;
}
.app-bar {
  backdrop-filter: blur(2px);
  background-color: black;
}
.logo {
  &:hover {
    .logo__icon {
      -ms-transform: rotate(30deg);
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }
  }
}
.logo__icon {
  transition: transform 0.2s ease-in-out;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  -ms-transition: -ms-transform 0.2s ease-in-out;
}
</style>
