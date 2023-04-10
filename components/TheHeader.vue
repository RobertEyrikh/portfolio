<script setup>
import { useTheme } from "vuetify";
import { useMainStore } from "~~/store/mainStore";
const theme = useTheme();
const mainStore = useMainStore();
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "myCustomLightTheme" : "myCustomDarkTheme";
  mainStore.addThemeToLS(theme.global.name.value)
};
const text = computed(() => {
  return mainStore.getText
})
const switchLanguage = () => mainStore.switchLanguage()
</script>

<template>
  <div class="the-header">
    <v-app-bar flat color="transparent" sticky width="100%" class="app-bar">
      <v-toolbar-title class="d-sm-none logo">
        <v-btn to="/" variant="plain" class="logo pointer" size="large">
          <v-icon icon="custom:logo"  size="large" class="logo__icon"></v-icon>
          {{ text.name }}
        </v-btn>
      </v-toolbar-title>

      <v-spacer class="d-none d-sm-block"></v-spacer>
      <v-toolbar-items class="d-none d-sm-block">
        <v-btn to="/" variant="plain" class="logo pointer" size="large">
          <v-icon icon="custom:logo" size="large" class="logo__icon"></v-icon>
          {{ text.name }}
        </v-btn>
        <v-btn flat to="/projects" prepend-icon="mdi-folder"> {{ text.projects }} </v-btn>
        <v-btn flat href="https://github.com/RobertEyrikh?tab=repositories" target="_blank" prepend-icon="mdi-github"> {{ text.repositories }} </v-btn>
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
            <v-list-item-title>{{ text.projects }}</v-list-item-title>
          </v-list-item>
          <v-list-item class="pointer" href="https://github.com/RobertEyrikh?tab=repositories" target="_blank" value="item.title">
            <v-list-item-title>{{ text.repositories }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon="mdi-brightness-4" @click="toggleTheme"></v-btn>
      <v-btn @click="switchLanguage" rounded>{{ mainStore.getLanguage }}</v-btn>
    </v-app-bar>

    <client-only>
      <v-card elevation="0" height="400">
        <the-model class="the-model"></the-model>
      </v-card>
    </client-only>
  </div>
</template>

<style scoped lang="scss">
.app-bar {
  backdrop-filter: blur(2px);
  background-color: black;
}
.logo {
  &:hover {
    .logo__icon {
      // -ms-transform: translateY(-9px);
      // -webkit-transform: translateY(-9px);
      // transform: translateY(-9px);
      animation: bounce 1s ease-in-out;
    }
  }
}
@keyframes bounce {
	0%, 20%, 60%, 100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
	}

	40% {
		transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
	}

	80% {
		transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
	}
}
</style>
