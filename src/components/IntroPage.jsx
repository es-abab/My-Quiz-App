import React from "react";

const IntroPage = ({ startQuiz }) => {
    return (
      <div className="w-[100vw]">
        <h1 className="pt-10 m-auto font-bold">Welcome to the Quiz</h1>
        <p className="text-gray-600 mb-10">
        This is a simple quiz application to test you.
      </p>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  };
  
  export default IntroPage;