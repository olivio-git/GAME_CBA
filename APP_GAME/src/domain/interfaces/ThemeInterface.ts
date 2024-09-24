import { ThemeEntity } from "../../core/types/Theme";

export interface Theme {
  theme: ThemeEntity;
  setTheme: (theme: "light" | "dark") => void;
}
