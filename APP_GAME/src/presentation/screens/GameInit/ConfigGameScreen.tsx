import React from "react";
import { WrapperArt } from "../../Wrappers/WrapperArt";
import { FormOptions } from "../../components/forms/FormInitGame/FormOptions"; 
import { useParams } from "react-router-dom";
import { formCreate, formJoin } from "./formTYpes";
 

export const CreateGameScreen = () => {
  const {option} = useParams();
  const fields = () => {
    if(option === "create-game"){
      return formCreate;
    }else{
      return formJoin;
    }
  }
  return (
    <React.Fragment>
      <WrapperArt>
        <FormOptions fields={fields()} options={{Submit:true,Back:true}} ></FormOptions>
      </WrapperArt>
    </React.Fragment>
  );
};
