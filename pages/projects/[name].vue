<script setup>
useHead({
  title: "Project",
  meta: [
    {
      name: "Robert Eyrikh",
      content: "Project page",
    },
  ],
});
const route = useRoute();
const projectInfo = computed(()=> getProjectInfo(route.params.name));
const showDialog = ref(false)
const routes = ref([
  { title: "Projects", disabled: false, to: "/projects", color: "#EA80FC" },
  { title: route.params.name, disabled: false, color: "text-primary" },
]);
const currentImageIndex = ref(null)
const openDialog = (index) => {
  currentImageIndex.value = index
  showDialog.value = true
}
const nextImage = (direction) => {
  let imagesLength = projectInfo.value.images.length
  if(direction === "next") {
    if(imagesLength - 1 === currentImageIndex.value) {
      currentImageIndex.value = 0
    } else {
      currentImageIndex.value += 1
    }
  } else {
    if(currentImageIndex.value === 0) {
      currentImageIndex.value = imagesLength - 1
    } else {
      currentImageIndex.value -= 1
    }
  }
}
const closePictureDialog = () => {
  showDialog.value = false
  currentImageIndex.value = null
}
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
        <v-card-text class="pa-0 mb-10 text-justify">{{ projectInfo.description }}</v-card-text>
        <v-row v-for="tag in projectInfo.tags" :key="tag.fieldName">
          <v-col cols="3">
            <p class="tag-name pl-1 text-subtitle-2">{{ tag.fieldName }}</p>
          </v-col>
          <v-col v-for="fieldValue in tag.fieldValue" :key="fieldValue" cols="9">
            <p v-if="tag.fieldName == 'стэк'">{{ fieldValue }}</p>
            <a v-if="tag.fieldName != 'стэк'" :href="fieldValue" target="_blank" class="tag-link text-link-color-1">{{ fieldValue }}</a>
          </v-col>
        </v-row>
        <v-img v-for="(image, index) in projectInfo.images" :key="image" :src="image"  @click="openDialog(index)" aspect-ratio="16/9" cover class="my-5 rounded pointer">
        </v-img>
        <v-dialog v-model="showDialog" transition="dialog-bottom-transition">
          <v-card @click="closePictureDialog" class="transparentt">
            <v-row no-gutters>
              <v-col cols="1" align-self="center">
                <v-row no-gutters align="center" justify="center">
                <v-btn @click.stop="nextImage('prev')" icon="mdi-chevron-left" variant="text"></v-btn>
              </v-row>
              </v-col>
              <v-col cols="10">
                <v-row no-gutters align="center" justify="center">
                  <v-img :src="projectInfo.images[currentImageIndex]" aspect-ratio="16/9" contain></v-img>
                </v-row>
              </v-col>
              <v-col cols="1" align-self="center">
                <v-row no-gutters align="center" justify="center">
                <v-btn @click.stop="nextImage('next')" icon="mdi-chevron-right" variant="text" justify="end"></v-btn>
              </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      </v-card>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped lang="scss">
.transparentt {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none !important;
}
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
