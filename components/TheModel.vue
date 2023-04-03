<script setup lang="ts">
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, PointLight, PCFShadowMap } from "three";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

let renderer: WebGLRenderer;
let controls: OrbitControls;
const model: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const scene = new Scene();

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(1, 1, 2);

const ambientLight = new AmbientLight(0xfff6e0, 0.2)
scene.add(ambientLight);

const pointLight = new PointLight(0xffffff, 0.4)
pointLight.position.x = 0.5
pointLight.position.y = 2
pointLight.position.z = -1
scene.add(pointLight)

pointLight.shadow.mapSize.width = 256
pointLight.shadow.mapSize.height = 256
pointLight.shadow.camera.near = .1
pointLight.castShadow = true

const compLight = new PointLight(0xffffff, 0.7)
compLight.position.x = 0.1
compLight.position.y = 0.8
compLight.position.z = 0.1
scene.add(compLight)
compLight.shadow.mapSize.width = 256
compLight.shadow.mapSize.height = 256
compLight.shadow.camera.near = .1
compLight.castShadow = true

const gltfLoader = new GLTFLoader()
gltfLoader.load("/model/ROBET_PROG.gltf", (gltf) => {
  const obj = gltf.scene
  obj.position.y = 0.5
  obj.position.x = 0
  for (let el in obj.children[0].children) {
    obj.children[0].children[el].castShadow = true
  }
  for (let el in obj.children) {
    obj.children[el].receiveShadow = true
  }
  scene.add(gltf.scene)
})

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (model.value) {
    renderer = new WebGLRenderer({
      canvas: model.value,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFShadowMap
    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true
    controls.enableDamping = true;
    updateRenderer();
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  controls.update()
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}
</script>

<template>
  <div class="the-model">
    <canvas ref="model" />
  </div>
</template>

<style scoped>

</style>
