import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface props {
  navigateTo: string;
  screen: string;
}

export const ButtonCreateGame = ({ navigateTo }: props) => {
  const navigation = useNavigate();
  return (
    <button
      onClick={() => navigation(navigateTo)}
      className="flex items-center text-md justify-center px-6 py-3 mt-4 w-40 drop-shadow-lg animate-bounce  sm:w-60 sm:h-18
          text-white bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-gradient-to-tl 
          duration-300 rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white-200"
    >
      <FaPlay className="mr-2 text-white" />
      <span className=" font-semibold">Start Game</span>
    </button>
  );
};
