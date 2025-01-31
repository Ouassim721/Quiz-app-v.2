const QuestionCard = ({ question, onAnswerSelect }) => {
  if (!question || !question.options)
    return <div>No question data available.</div>;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{question.description}</h3>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelect(question.id, option.description)}
          style={{
            display: "block",
            margin: "5px 0",
            padding: "10px",
            width: "100%",
          }}
        >
          {option.description}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
