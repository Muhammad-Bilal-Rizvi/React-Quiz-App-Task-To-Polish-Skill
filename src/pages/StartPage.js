import React from "react";
import ExpertizoLogo from "./../Images/ExpertizoLogo.png";
import { useNavigate } from "react-router-dom";
// import { IoStarSharp } from "react-icons/io5";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img src={ExpertizoLogo} alt="ExpertizoLogo" class="SetLogoImg" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/quiz")}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Quiz Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;
