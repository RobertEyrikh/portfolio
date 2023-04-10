import { useMainStore } from "~~/store/mainStore";

export const getProjectInfo = (projectName: string) => {
  const mainStore = useMainStore();
  return mainStore.getText.projectsInfo.find((project) => project.name === projectName);
};
