import React, { useState } from 'react';


// const Question = ({ question, options, onAnswer }) => {
//   const [clicked, setClicked] = useState(false)
//   return (
//     <div className='flex flex-col m-auto justify-start items-start text-xl gap-5 py-10 w-[50vw]'>
//       <h3 className="text-lg font-semibold mb-4">{question}</h3>
//       <ul className='flex gap-5'>
//         {options.map((option) => (
//           <li key={option} className={ clicked ? ('bg-white/10'):('')}>
//             <button onClick={() => {onAnswer(option)
//             setClicked(true)}} 
//             > {option}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Question;


const Question = ({ question, options, number, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option); // Notify the parent component (QuizPage) about the selected answer
  };

  return (
<>
    <div className='flex flex-col m-auto justify-start items-start text-xl gap-3 py-8 w-[50vw]'>
       <h3 className="text-lg font-semibold "><span className='mr-5'>{number}.</span>{question}</h3>
       
       <ul className="flex flex-col gap-2">
        {options.map((option) => (
          <li key={option}>
            <label className="flex items-center text-slate-800 font-semibold">
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleOptionClick(option)}
                className="cursor-pointer appearance-none rounded border-2 border-slate-500 w-4 h-4 checked:bg-orange-300 checked:border "
              />
              <span className="ml-2">{option}</span>
            </label>
          </li>
        ))}
      </ul>
       
       {/* <ul className='flex gap-5'>
         {options.map((option) => (
          <li key={option} 
          className='bg-grey-800'
          >
            <button 
            // onClick={() => {onAnswer(option)}} 
            onClick={() => handleOptionClick(option)}
            className={`cursor-pointer ${
              selectedAnswer === option ? 'bg-orange-200' : ' bg-slate-200' }`}
            > {option}</button>
          </li>
        ))}
      </ul> */}
    </div>

    {/* <div className="my-4">
      <h3 className="font-semibold">{question}</h3>
      <ul className="list-disc ml-6">
        {options.map((option) => (
          <li
            key={option}
            className={`cursor-pointer ${
              selectedAnswer === option ? 'bg-green-200' : '' // Apply the highlight background color for the selected answer
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div> */}
</>
  );
};

export default Question;
