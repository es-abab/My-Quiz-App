import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { questions } from "../data/questions";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Scoreboard from "../components/Scoreboard";

const Quiz = ({ endQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [quizStarted, setQuizStarted] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeRemaining > 0 && !showResultsModal) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResultsModal) {
      handleSubmit();
    }
  }, [timeRemaining, showResultsModal]);

  const handleAnswer = (selectedOption, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: selectedAnswer,
    }));
    if (currentQuestion.id + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    console.log(userAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        score++;
        console.log(score);
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore(userAnswers, questions);
    setShowResultsModal(true);
  };

  const navigate = useNavigate();


  const closeModal = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResultsModal(false);
    setUserAnswers([]);
    navigate('/home');
  };

  if (showResultsModal) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-70">
        <div className="bg-slate-800 p-6 w-[40vw] h-[25vh] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Quiz completed successfully!
          </h2>
          <h3 className="text-slate-200 text-lg font-semibold mb-10">
            Your Score: {calculateScore()} / {questions.length}
          </h3>
          <button
            className="bg-orange-400 hover:bg-white hover:text-slate-800 hover:shadow-lg  text-white px-10 py-2 border-none transition duration-200 ease-in"
            onClick={
              closeModal
              // startQuiz
            }
          >
            Close
          </button>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Navbar timeRemaining={timeRemaining} onSubmit={handleSubmit} />
      <div>
        <div className="mx-[10vw] border-b-2 border-b-white/50 my-5 w-[50vw]">
          {questions.map((question) => (
            <Question
              key={question.id} // Add a unique key to each Question component
              question={question.question}
              options={question.options}
              number={question.id}
              // question={questions[currentQuestionIndex].question}
              // options={questions[currentQuestionIndex].options}
              // onAnswer={handleAnswer}
              onAnswer={(answer) => handleAnswer(question.question, answer)}
            />
          ))}

          {/* {
            questions.map((question) => {
                <Question
                question={currentQuestion.question}
                options={currentQuestion.options}
                onAnswer={handleAnswer}
            />
            })
        } */}
        </div>
        <Scoreboard />
        {showResultsModal ? (
          <>
            <ResultsModal
              score={calculateScore()}
              totalQuestions={questions.length}
              onClose={closeModal}
            />
          </>
        ) : (
          ""
        )}

        <ScrollToTopButton />
        {/* You may want to add navigation buttons to go to the next question */}
      </div>
    </div>

  );
};

export default Quiz;
