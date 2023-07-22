

const ResultsModal = ({ score, totalQuestions, onClose }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your Score: {score}</p>
      <p>Total Questions: {totalQuestions}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ResultsModal;
