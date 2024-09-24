import { create } from "zustand";
import { Theme } from "../../domain/interfaces/ThemeInterface";
import { ThemeEntity } from "../../core/types/Theme";

const useThemeStore = create<Theme>((set) => ({
  theme: (localStorage.getItem("theme")?? "light") as ThemeEntity,
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
