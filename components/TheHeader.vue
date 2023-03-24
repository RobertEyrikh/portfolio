<script setup>
const appTitle = ref("Robert Eyrikh");
const menuItems = ref([
  { title: "Проекты", path: "/projects", icon: "mdi-folder" },
  { title: "Репозитории", path: "/about", icon: "mdi-github" },
]);
</script>

<template>
  <v-app-bar flat color="transparent" sticky width="100%" class="app-bar">
    <v-toolbar-title class="d-sm-none logo">
      <v-btn to="/" variant="plain" class="logo pointer" size="large">
        <v-icon icon="mdi-waze" size="large" class="logo__icon"></v-icon>
        {{ appTitle }}
      </v-btn>
    </v-toolbar-title>

    <v-spacer class="d-none d-sm-block"></v-spacer>
    <v-toolbar-items class="d-none d-sm-block">
      <v-btn to="/" variant="plain" class="logo pointer" size="large">
        <v-icon icon="mdi-waze" size="large" class="logo__icon"></v-icon>
        {{ appTitle }}
      </v-btn>
      <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer class="d-none d-sm-block"></v-spacer>
    <v-menu location="start">
      <template v-slot:activator="{ props }">
        <v-btn
          class="d-sm-none"
          color="grey-lighten-2"
          dark
          v-bind="props"
          icon
        >
          <v-icon size="x-large"> mdi-menu </v-icon>
        </v-btn>
      </template>
      <v-list bg-color="teal-darken-4">
        <v-list-item
          class="pointer"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :value="item.title"
        >
          <v-list-item-title  >{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
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
      -ms-transform:rotate(30deg);
      -webkit-transform:rotate(30deg);
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
