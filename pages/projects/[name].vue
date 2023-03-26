<script setup>
const route = useRoute();
const routes = ref([
  { title: "Проекты", disabled: false, to: "/projects" },
  { title: route.params.name, disabled: true },
]);
</script>

<template>
  <v-breadcrumbs :items="routes">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
