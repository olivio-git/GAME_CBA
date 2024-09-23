import Logo from "./logo.png";
import { motion } from "framer-motion";
import React from "react";
import { ButtonCreateGame } from "../../components/buttons/ButtonCreateGame";
import { WrapperArt } from "../../Wrappers/WrapperArt";
const LandinPage = () => {
  return (
    <React.Fragment>
      <WrapperArt>
        <div className="flex flex-col gap-4 min-h-screen items-center justify-center w-full p-8">
          <motion.img
            layout
            src={Logo}
            alt="header"
            className="w-40 rounded h-44 sm:w-60 sm:h-64 drop-shadow-lg"
          />
          <ButtonCreateGame navigateTo="/create-game" screen="/" />
        </div>
      </WrapperArt>
    </React.Fragment>
  );
};

export default LandinPage;
