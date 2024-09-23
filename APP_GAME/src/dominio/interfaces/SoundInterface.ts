import { SoundEntity } from "../entities/SoundEntity"; 

export interface Sound {
  sound: SoundEntity;
  setSound: (theme: "on" | "off") => void;
}
