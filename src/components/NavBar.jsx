import React from 'react';

const Navbar = ({ timeRemaining, onSubmit }) => {
  return (
    <div className='flex justify-between w-[100vw] px-10 py-5 bg-slate-800'>
      <div className='text-xl'>Time Remaining: {timeRemaining}</div>
      <button onClick={onSubmit}>Submit Quiz</button>
    </div>
  );
};

export default Navbar;