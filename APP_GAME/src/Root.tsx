import { Route, Routes } from "react-router-dom";
import LandinPage from "./presentation/screens/LandingPageScreen/LandinPage";
import { ToggleIndex } from "./presentation/components/ToggleIndex";
import { CreateGameScreen } from "./presentation/screens/GameInit/ConfigGameScreen";
import React from "react";

const Root = () => {
  return (
    <React.Fragment>
      <ToggleIndex />
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="/config-game/:option" element={<CreateGameScreen />} />
      </Routes>
    </React.Fragment>
  );
};

export default Root;
