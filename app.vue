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
.v-card__overlay {
  background-color: transparent;
}
.pointer {
  cursor: pointer;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
