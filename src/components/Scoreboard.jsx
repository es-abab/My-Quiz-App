// import React from 'react'

// const Scoreboard = () => {
//   return (
//     <div className='absolute top-[200px] right-10 w-[30vw] h-[40vh] bg-slate-300'>Scoreboard</div>
//   )
// }

// export default Scoreboard


import React, { useState } from 'react';
import Timer from './Timer';
import Navbar from './NavBar';

// const Scoreboard = ({ totalQuestions, answeredQuestions, unansweredQuestions }) => {

const Scoreboard = ({status}) => {
  // Calculate the number of pending questions
//   const pendingQuestions = totalQuestions - answeredQuestions - unansweredQuestions;

  // Function to generate an array of numbers to represent the grid
  const generateGrid = (rows, columns) => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid.push(i * columns + j);
      }
    }
    return grid;
  };
  const [answerStatus, setAnswerStatus] = useState('answered')

  const grid = generateGrid(5, 5); // 5 rows and 5 columns

  return (
    <div className='w-[30vw]'>
        {/* <Timer /> */}
    {/* <Navbar />   */}
        
    <div className=" absolute top-[150px] right-[130px] h-[28rem] w-[20rem] shadow-md h-[50vh] px-10 py-5 rounded-lg bg-slate-800">
      <h2 className='mb-5 text-2xl text-white font-bold'>Score Board</h2>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((index) => (
          <div key={index} className={`grid-item w-10 h-10 flex items-center justify-center ${answerStatus === 'not answered' ? (' bg-gray-200 border border-gray-300'): ('bg-orange-300 border-orange-500')} bg-gray-200 border border-gray-300 rounded-full cursor-pointer`}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className="summary flex justify-between mt-8 pt-5 border-t-2 text-white text-sm font-bold">
        <p>Answered: 10</p>
        <p>Unanswered: 20</p>
        <p>Pending: 5</p>
      </div>
    </div>
    </div>
  );
};

export default Scoreboard;
