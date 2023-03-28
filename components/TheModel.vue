<script setup lang="ts">
import { PerspectiveCamera, Scene, WebGLRenderer, Color, Fog, AmbientLight } from "three";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

let renderer: WebGLRenderer;
let controls: OrbitControls;
const model: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const bgColor = new Color("#FFF8E1")
const scene = new Scene();

scene.fog = new Fog(bgColor, 0.1, 75)
scene.background = bgColor

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 2, 4);

scene.add(camera);

const ambientLight = new AmbientLight(0xffffff, 1)
scene.add(ambientLight);

// const { load } = useGLTFModel()
// const { scene: model } = await load("/model/scene.gltf")
// scene.add(model)

const gltfLoader = new GLTFLoader()
gltfLoader.load("/model/scene.gltf", (gltf) => {
  console.log(gltf)
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
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls = new OrbitControls(camera, renderer.domElement);
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
