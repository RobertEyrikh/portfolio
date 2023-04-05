import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import logo from "./TheLogo.vue";
import express from "./ExpressIcon.vue";
import jest from "./JestIcon.vue";
import telegram from "./TelegramIcon.vue";
import threeJs from "./ThreeJsIcon.vue";

const customSvgNameToComponent: any = {
  logo,
  express,
  jest,
  telegram,
  threeJs,
};

const customSVGs: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs };
