import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A167FC] to-[#cccccc] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Welcome to the Quiz App!
      </h1>
      <button
        onClick={() => navigate("/quiz")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
