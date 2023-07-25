import React from 'react';
import Timer from './Timer';

const Navbar = ({ timeRemaining, onSubmit }) => {
 
  const handleTimeUp = () => {
    // Automatically submit the quiz when the time is up
    ;
  };
  return (
    <div className='flex items-center justify-between h-[10vh] w-[100vw] px-[10vw] py-5 bg-slate-800'>
      <div className='text-white font-semibold text-2xl'>Esther Aboagyewa Abankwa</div>
      <div className='flex items-center justify-center gap-10'>
      {/* <div className='text-xl'>Time Remaining: {timeRemaining}</div> */}
      <Timer totalTime={1800} onTimeUp={handleTimeUp} className='flex items-center' />
      <button onClick={onSubmit}
      className="bg-orange-400 rounded-full hover:bg-white hover:shadow-lg border-none transition duration-200 ease-in"
      >Submit Quiz</button>
      </div>
    </div>
  );
};

export default Navbar;