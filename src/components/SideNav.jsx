import React, { useState } from "react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaUsers, FaShippingFast,FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { PiBooksFill, PiExamFill } from "react-icons/pi";
// import WhiteLogo from '../assets/white_logo.png'
// import { isTypeElement } from 'typescript'
import { useNavigate } from "react-router-dom";
// import Logout from './Logout'

const SideNav = () => {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const menuItems = [
    {
      name: "home",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    // {
    //   name: "courses",
    //   path: "/courses",
    //   icon: <PiBooksFill />,
    // },
    {
      name: "exams",
      path: "/home",
      icon: <PiExamFill />,
    },
    {
      name: "logout",
      path: "/",
      icon: <MdLogout />,
    },
  ];

  const handleSideBarNavigate = (item) => {
    if(item.name === 'logout'){
      const result= window.confirm('Are you sure you want to logout?')
      
       if(result) navigate(`${item.path}`)
    }
    else{
      navigate(`${item.path}`)
    }
    
  }

  const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
    
     
        <>
        <div>
      <div className={`relative bg-slate-400/50 ${ isSideNavOpen ? ('w-[17.5vw]'):('w-[7vw]')}  h-[90vh] py-10 tansition duration- ease-in-out`}>
        { isSideNavOpen ? (
        <div className="menu-items">
          {menuItems.map((item, key) => (
            <div
              className="flex gap-10 text-4xl font-semibold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in"
              key={key}
              // onClick={() => navigate(`${item.path}`)}
              onClick={() => handleSideBarNavigate(item)}
            >
              <div className="menuIcon">{item.icon}</div>
              <div className="itemName text-2xl">{item.name}</div>
            </div>
          ))}
          
        </div>
        ):(
          <div className="menu-items">
          {menuItems.map((item, key) => (
            <div
              className="flex  gap-10 text-4xl font-bold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in"
              key={key}
              // onClick={() => navigate(`${item.path}`)}
              onClick={() => handleSideBarNavigate(item)}
            >
              <div className="menuIcon">{item.icon}</div>
            </div>
          ))}
        </div>
        )
}

        <button
            className="absolute top-[1.5rem] right-[-1rem] p-[4px] text-slate-900 hover:text-slate-700 text-2xl bg-none border-none active-outline-none rounded-full tansition duration-400 ease-in-out"
            onClick={handleToggleSideNav}
          >
            {isSideNavOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
        
      </div>
      </div>
      </>
      
        {/* <div>
      <div className="relative bg-slate-400/50 w-[7vw] h-[90vh] py-10 tansition duration-400 ease-in-out">
        <div className="menu-items">
          {menuItems.map((item, key) => (
            <div
              className="flex  gap-10 text-4xl font-bold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in"
              key={key}
              onClick={() => navigate(`${item.path}`)}
            >
              <div className="menuIcon">{item.icon}</div>
            </div>
          ))}
        </div>

        <button
            className="absolute top-[1.5rem] right-[-1rem] p-[4px] text-slate-900 hover:text-slate-700 text-2xl bg-none border-none active-outline-none rounded-full tansition duration-400 ease-in-out"
            onClick={handleToggleSideNav}
          >
            {isSideNavOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
        
      </div> */}
      {/* </div> */}
      
    
    </>
  );
};

export default SideNav;
