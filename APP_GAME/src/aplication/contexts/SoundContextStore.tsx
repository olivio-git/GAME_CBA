import { create } from "zustand";  
import { Sound } from "../../dominio/interfaces/SoundInterface";
import { SoundEntity } from "../../dominio/entities/SoundEntity";

const useSoundStore = create<Sound>((set) => ({
  sound: (localStorage.getItem("sound")?? "on") as SoundEntity,
  setSound: (sound) => set({ sound }),
}));

export default useSoundStore;
