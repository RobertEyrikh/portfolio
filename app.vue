<script setup>
const layout = "main-layout";
</script>

<template>
  <v-app>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.pointer {
  cursor: pointer
}
</style>
