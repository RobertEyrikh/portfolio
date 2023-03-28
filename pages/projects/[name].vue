<script setup>
const route = useRoute();
const projectInfo = getProjectInfo(route.params.name);
const routes = ref([
  { title: "Проекты", disabled: false, to: "/projects", color: "#EA80FC" },
  { title: route.params.name, disabled: false, color: "text-primary" },
]);
</script>

<template>
  <div class="project-page">
    <v-spacer></v-spacer>
    <v-container class="pl-10 pr-10">
      <v-card elevation="0" variant="elevated" class="mx-auto" max-width="522px">
        <v-breadcrumbs class="px-0" :items="routes">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
          <template v-slot:item="{ routes }">
            <v-breadcrumbs-item :disabled="routes.disabled">
              <span :style="`color: ${routes.color}`">
                {{ routes.title.toUpperCase() }}
              </span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-card-text class="pa-0 mb-10 text-justify">&nbsp {{ projectInfo.description }}</v-card-text>
        <v-row v-for="tag in projectInfo.tags" :key="tag.fieldName">
          <v-col color="red" cols="3">
            <p class="tag-name pl-1">{{ tag.fieldName }}</p>
          </v-col>
          <v-col v-for="fieldValue in tag.fieldValue" :key="fieldValue" cols="9">
            <p v-if="tag.fieldName == 'стэк'">{{ fieldValue }}</p>
            <a v-if="tag.fieldName != 'стэк'" :href="fieldValue" target="_blank" class="tag-link text-link-color-1">{{ fieldValue }}</a>
          </v-col>
        </v-row>
        <v-img v-for="image in projectInfo.images" :key="image" :src="image" aspect-ratio="16/9" cover class="my-5 rounded">
          <!-- <v-overlay activator="parent" location-strategy="static" scroll-strategy="block">
            <v-card position="sticky"> 
              <v-img :src="image"></v-img> 
          </v-card></v-overlay> -->
        </v-img>
      </v-card>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped lang="scss">
.tag-name {
  background-color: #7e57c2;
  border-radius: 5px;
}
.tag-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
