<script setup>
const route = useRoute();
const projectInfo = getProjectInfo(route.params.name);
const routes = ref([
  { title: "Проекты", disabled: false, to: "/projects" },
  { title: route.params.name, disabled: true },
]);
</script>

<template>
  <div class="project-page">
    <v-spacer></v-spacer>
    <v-container class="pl-10 pr-10">
      <v-card  elevation="0" variant="elevated" class="mx-auto" max-width="522px">
        <v-breadcrumbs class="px-0" :items="routes">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
        <v-card-text class="pa-0 mb-10 text-justify">{{ projectInfo.description }}</v-card-text>
        <v-row v-for="tag in projectInfo.tags" :key="tag.fieldName">
          <v-col color="red" cols="3">
            <p class="tag-name pl-1">{{ tag.fieldName }}</p>
          </v-col>
          <v-col cols="9" v-for="fieldValue in tag.fieldValue">
            <p v-if="tag.fieldName =='стэк' ">{{ fieldValue }}</p>
            <a v-if="tag.fieldName !='стэк' " :href="fieldValue" class="tag-link text-link-color-1">{{fieldValue}}</a>
          </v-col>
        </v-row>
        <v-img aspect-ratio="16/9" cover v-for="image in projectInfo.images" :key="image" :src="image" class="my-5 rounded"></v-img>
      </v-card>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped lang="scss">
.tag-name {
  background-color: #7E57C2;
  border-radius: 5px;
}
.tag-link {
  text-decoration: none;
}

</style>
