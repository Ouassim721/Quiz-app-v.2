import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizData } from "../utils/api";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      if (data) setQuizData(data);
    };
    loadQuizData();
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { selectedAnswers, quizData } });
    }
  };

  if (!quizData || quizData.length === 0)
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#A167FC] to-[#cccccc] flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#A167FC] mx-auto"></div>
          <p className="text-gray-600 text-lg mt-4">
            Loading quiz questions...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A167FC] to-[#cccccc] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl transform transition-all duration-300 hover:shadow-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Quiz Time!
          </h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold text-gray-600">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round(((currentQuestionIndex + 1) / quizData.length) * 100)}
              % Complete
            </span>
          </div>
        </div>

        <ProgressBar
          current={currentQuestionIndex + 1}
          total={quizData.length}
          className="h-2 bg-gray-200 rounded-full overflow-hidden"
          barClassName="h-full bg-gradient-to-r from-[#A167FC] to-[#8A4FD5] transition-all duration-300 ease-in-out"
        />

        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Question {currentQuestionIndex + 1}:
            </h2> */}
            <QuestionCard
              question={quizData[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
