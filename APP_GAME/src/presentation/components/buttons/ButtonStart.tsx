import { ReactNode } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

interface props {
  option: string;
  screen: string;
  element: ReactNode;
  text: string;
}

export const ButtonStart = ({ option, element, text }: props) => {  
  const navigate = useNavigate(); 
  return (
    <button 
      onClick={()=>navigate(option)}
      className="flex items-center text-sm noto-sans-display-font justify-center px-6 py-3 mt-4 w-40 drop-shadow-lg sm:w-60 sm:h-18
          text-white bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-gradient-to-tl 
          duration-300 rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white-200"
    >
      {element}
      <span className="font-semibold">{text}</span>
    </button>
  );
};
