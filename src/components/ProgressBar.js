import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  // Determine the progress bar color based on the percentage
  const getProgressColor = (progress) => {
    if (progress <= 30) return "#e74c3c"; // Red for 0-30%
    if (progress <= 60) return "#f39c12"; // Yellow for 31-60%
    return "#76c7c0"; // Green for 61-100%
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        height: "15px",
        marginTop: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: getProgressColor(progress),
          height: "100%",
          borderRadius: "5px",
          transition: "width 0.5s ease", // Animate the progress
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            textAlign: "center",
            lineHeight: "10px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
