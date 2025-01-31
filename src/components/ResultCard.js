import React from "react";

const ResultCard = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  // Determine message and emoji based on score
  const getMessageAndEmoji = () => {
    if (percentage === 100) return { message: "Perfect Score!", emoji: "🏆" };
    if (percentage >= 80) return { message: "Excellent!", emoji: "🌟" };
    if (percentage >= 60) return { message: "Good Job!", emoji: "👍" };
    if (percentage >= 40) return { message: "Keep Practicing!", emoji: "💪" };
    if (percentage >= 20) return { message: "You Can Do Better!", emoji: "📚" };
    return { message: "Better Luck Next Time!", emoji: "🎯" };
  };

  const { message, emoji } = getMessageAndEmoji();

  return (
    <div
      className={`
      w-full max-w-3xl
      p-8 rounded-xl
      shadow-2xl
      transform transition-all duration-300 hover:shadow-3xl
      text-center
      bg-white
    `}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Quiz Completed!</h2>
      <div className="space-y-4">
        <div className="text-7xl mb-6">{emoji}</div>
        <p className="text-2xl text-gray-700">
          Your Score:{" "}
          <strong className="text-3xl">
            {score} / {totalQuestions}
          </strong>
        </p>
        <p className="text-2xl font-bold tracking-wide text-gray-800">
          {message}
        </p>

        {percentage !== 100 && (
          <p className="mt-6 text-lg text-gray-600">
            Try again to improve your score!
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
