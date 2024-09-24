import { SoundEntity } from "../../core/types/Sound"; 

export interface Sound {
  sound: SoundEntity;
  setSound: (theme: "on" | "off") => void;
}
