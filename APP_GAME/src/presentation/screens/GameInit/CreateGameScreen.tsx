import React from "react";
import { WrapperArt } from "../../Wrappers/WrapperArt";

export const CreateGameScreen = () => {
  return (
    <React.Fragment>
      <WrapperArt>
        <div className="flex flex-col gap-4 min-h-screen items-center justify-center w-full p-8">
          <h1 className="text-2xl text-white font-bold">Create Game</h1>
        </div>
      </WrapperArt>
    </React.Fragment>
  );
};
