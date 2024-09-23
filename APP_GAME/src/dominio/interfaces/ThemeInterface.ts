import { ThemeEntity } from "../entities/ThemeEntity";

export interface Theme {
  theme: ThemeEntity;
  setTheme: (theme: "light" | "dark") => void;
}
