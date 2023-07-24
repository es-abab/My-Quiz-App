import React from 'react';
import Timer from './Timer';

const Navbar = ({ timeRemaining, onSubmit }) => {
 
  const handleTimeUp = () => {
    // Automatically submit the quiz when the time is up
    ;
  };
  return (
    <div className='flex items-center justify-between w-[100vw] px-[15vw] py-5 bg-slate-800'>
      {/* <div className='text-xl'>Time Remaining: {timeRemaining}</div> */}
      <Timer totalTime={1800} onTimeUp={handleTimeUp} />
      <button onClick={onSubmit}
      className="bg-orange-400 hover:bg-white hover:shadow-lg border-none transition duration-200 ease-in"
      >Submit Quiz</button>
    </div>
  );
};

export default Navbar;