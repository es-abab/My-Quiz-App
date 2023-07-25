// import React from 'react'

// const Scoreboard = () => {
//   return (
//     <div className='absolute top-[200px] right-10 w-[30vw] h-[40vh] bg-slate-300'>Scoreboard</div>
//   )
// }

// export default Scoreboard


import React from 'react';

// const Scoreboard = ({ totalQuestions, answeredQuestions, unansweredQuestions }) => {

const Scoreboard = () => {
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

  const grid = generateGrid(5, 5); // 5 rows and 5 columns

  return (
    <div className=" fixed top-[200px] right-10 w-[30vw] h-[50vh] px-10 py-5 rounded-lg bg-slate-300">
      <h2 className='mb-5 text-2xl font-bold'>Score Board</h2>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((index) => (
          <div key={index} className="grid-item w-12 h-12 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-full cursor-pointer">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="summary flex justify-between mt-8 pt-5 border-t-2 font-bold">
        <p>Answered: 10</p>
        <p>Unanswered: 20</p>
        <p>Pending: 5</p>
      </div>
    </div>
  );
};

export default Scoreboard;
