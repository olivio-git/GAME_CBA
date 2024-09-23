import { create } from "zustand";
import { Theme } from "../../dominio/interfaces/ThemeInterface";
import { ThemeEntity } from "../../dominio/entities/ThemeEntity";

const useThemeStore = create<Theme>((set) => ({
  theme: (localStorage.getItem("theme")?? "light") as ThemeEntity,
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
