import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className='flex flex-col m-auto justify-start items-start text-xl gap-5 py-10 w-[50vw]'>
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <ul className='flex gap-5'>
        {options.map((option) => (
          <li key={option}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
