import Logo from "./logo.png";
import { motion } from "framer-motion";
import React from "react";
import { ButtonStart } from "../../components/buttons/ButtonStart";
import { WrapperArt } from "../../Wrappers/WrapperArt";
import { FaKey, FaPlay } from "react-icons/fa";

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
          <ButtonStart
            option="config-game/use-code"
            screen="/"
            element={<FaKey className="mr-2 text-white" />}
            text={"Use code"}
            />
          <ButtonStart
            option="config-game/create-game"
            screen="/"
            element={<FaPlay className="mr-2 text-white" />}
            text={"Create Game"}
          />
        </div>
      </WrapperArt>
    </React.Fragment>
  );
};

export default LandinPage;
