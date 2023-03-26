import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFF8E1",
    surface: "#FFF8E1",
    primary: "#FFFFFF",
    "primary-darken-1": "#3700B3",
    secondary: "#FFFFFF",
    "secondary-darken-1": "#FFFFFF",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#212121",
    surface: "#212121",
    primary: "#6200EA",
    "primary-darken-1": "#3700B3",
    secondary: "#6200EA",
    "secondary-darken-1": "#424242",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "myCustomDarkTheme",
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
