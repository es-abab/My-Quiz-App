import React from 'react';
import Timer from './Timer';
import {FaUserAlt} from 'react-icons/fa'

const Nav = ({ timeRemaining, onSubmit }) => {
 
  return (
    <div className='flex items-center justify-between h-[10vh] w-[100vw] px-[10vw] py-5 bg-slate-800'>
      <div className='flex items-center justify-end gap-5 text-white font-semibold text-xl w-full'>
         Esther Aboagyewa Abankwa
      <span className='bg-white rounded-full w-10 h-10 flex justify-center items-center text-slate-800'><FaUserAlt /></span></div>
      <div className='flex items-center justify-center gap-10'>
    </div>
    </div>
  );
};

export default Nav;