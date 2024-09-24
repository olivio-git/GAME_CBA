import { create } from "zustand";  
import { Sound } from "../../domain/interfaces/SoundInterface";
import { SoundEntity } from "../../core/types/Sound";

const useSoundStore = create<Sound>((set) => ({
  sound: (localStorage.getItem("sound")?? "on") as SoundEntity,
  setSound: (sound) => set({ sound }),
}));

export default useSoundStore;
