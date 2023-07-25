import React from 'react';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ timeRemaining, onSubmit }) => {
 
  const handleTimeUp = () => {
    // Automatically submit the quiz when the time is up
    ;
  };
  
  const navigate = useNavigate()

  const handleQuit = () => {
    const result=window.confirm('Winning is not easy but quitting does not make it easier. Sure you want to quit?')
    
    if(result){
      navigate('/home')
    }else{''}
    
  }
  return (
    <div className='flex items-center justify-between h-[10vh] w-[100vw] px-[10vw] py-5 bg-slate-800'>
      <div className='text-white font-semibold text-2xl'>Esther Aboagyewa Abankwa</div>
      <div className='flex items-center justify-center gap-10'>
      {/* <div className='text-xl'>Time Remaining: {timeRemaining}</div> */}
      <Timer totalTime={1800} onTimeUp={handleTimeUp} className='flex items-center' />
     <div className='flex gap-2'>
      <button onClick={onSubmit}
      className="bg-orange-400 rounded-full hover:bg-white hover:shadow-lg border-none transition duration-200 ease-in"
      >Submit Quiz</button>
      <button onClick={() => handleQuit()}
      className="bg-red-600 rounded-full hover:bg-white hover:shadow-lg border-none transition duration-200 ease-in"
      >Quit</button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;