import React, { useEffect } from "react";
import useSoundStore from "../../../aplication/contexts/SoundContextStore";
import { ToggleSoundSvg } from "./ToggleSoundSvg";
import "./ToggleSound.css";
export const ToggleSoundComponent = () => {
  const { sound, setSound } = useSoundStore();
  useEffect(() => {
    localStorage.setItem("sound", sound);
    if (sound === "off" || localStorage.getItem("sound") === "off") {
      document.body.classList.add("off");
    } else {
      document.body.classList.remove("off");
    }
  }, [sound]);
  return (
    <React.Fragment>
      <label className="containerSound">
        <input
          checked={sound == "off" ? false : true}
          type="checkbox"
          onChange={(e) => {
            setSound(e.target.checked ? "on" : "off");
          }}
        />
        <ToggleSoundSvg></ToggleSoundSvg>
      </label>
    </React.Fragment>
  );
};
