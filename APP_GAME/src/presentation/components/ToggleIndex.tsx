import DarkModeToggle from "./ToggleThemeComponents/ToggleThemeComponent";
import { ToggleSoundComponent } from "./ToggleSoundComponents/ToggleSoundComponent";

export const ToggleIndex = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-slate-800  
    rounded-lg h-20 justify-center items-center z-10 fixed bottom-2 bg-opacity-20
    right-2 h-10 w-20 gap-2">
      <ToggleSoundComponent />
      <DarkModeToggle />
    </section>
  );
};
