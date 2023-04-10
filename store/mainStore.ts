import { ref, computed } from "vue";
import ru from "../assets/ru.json"
import en from "../assets/en.json"

export const useMainStore = defineStore("mainStore", () => {
  const language = ref("ru")
  const switchLanguage = () => {
    language.value === "ru" ? language.value = "en" : language.value = "ru"
    addLangToLS()
  }
  const setLanguage = () => {
    if (getLangFromLS()) {
      language.value = getLangFromLS()!
    }
  }
  const addLangToLS = () => {
    if(process.client) {
      localStorage.setItem("language", language.value)
    }
  }
  const getLangFromLS = () => {
    if(process.client) {
      return localStorage.getItem("language")
    }
  }
  const addThemeToLS = (theme: string) => {
    if(process.client) {
      localStorage.setItem("theme", theme)
    }
  }
  const getThemeFromLS = () => {
    if(process.client) {
      return localStorage.getItem("theme")
    }
  }
  const getLanguage = computed(() => {
    return language.value
  })
  const getText = computed(() => {
    if (language.value === "ru") {
      return ru
    } else {
      return en
    }
  })
  return {
    language,
    switchLanguage,
    getLanguage,
    getText,
    setLanguage,
    getProjectInfo,
    addThemeToLS,
    getThemeFromLS
  }
})