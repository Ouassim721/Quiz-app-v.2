import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAnswers, quizData } = location.state || {};

  // Redirect to home if no quiz data
  if (!selectedAnswers || !quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#A167FC] to-[#cccccc] flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-xl text-center">
          <p className="text-xl text-gray-700 mb-6">
            No quiz results available
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-[#A167FC] to-[#8A4FD5] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question) => {
      const correctAnswer = question.options.find(
        (option) => option.is_correct
      );
      if (selectedAnswers[question.id] === correctAnswer.description) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A167FC] to-[#cccccc] flex flex-col items-center justify-center p-6">
      <ResultCard score={score} totalQuestions={quizData.length} />
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-white text-[#A167FC] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
      >
        Take Another Quiz
      </button>
    </div>
  );
};

export default ResultsPage;
