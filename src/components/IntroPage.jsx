import React from "react";

const IntroPage = ({ startQuiz }) => {
    return (
      <div className=" bg-slate-800 w-[100vw] h-[100vh] flex flex-col justify-center items-center"> 
        <div>
        <h1 className="text-white pt-10 m-auto font-bold">Welcome to the Quiz</h1>
        <p className="text-gray-400 mb-10">
        This is a simple quiz application to test you.
        </p>
        <button onClick={startQuiz} 
        className="bg-orange-400 hover:bg-white hover:shadow-lg border-none transition duration-200 ease-in">Start Quiz</button>
        </div>
      </div>
    );
  };
  
  export default IntroPage;