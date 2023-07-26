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
      path: "/landing",
      icon: <MdDashboard />,
    },
    {
      name: "courses",
      path: "/courses",
      icon: <PiBooksFill />,
    },
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

  const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
    {
      isSideNavOpen ? (
        <>
        <div>
      <div className="relative bg-slate-400/50 w-[18vw] h-[90vh] py-10 tansition duration-400 ease-in-out">
        <div className="sidebar-header">
          {/* <img src={WhiteLogo} alt="logo" className="sidebar-whiteLogo" /> */}
        </div>
        <div className="menu-items">
          {menuItems.map((item, key) => (
            <div
              className="flex gap-10 text-lg font-bold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in"
              key={key}
              onClick={() => navigate(`${item.path}`)}
            >
              <div className="menuIcon">{item.icon}</div>
              <div className="itemName">{item.name}</div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="main">
          <button
            className="fixed top-20 left-20 p-2 text-slate-900 hover:text-slate-700 text-2xl bg-none border-none active-outline-none rounded-full tansition duration-400 ease-in-out"
            onClick={handleToggleSideNav}
          >
            {isSideNavOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
        </div>
      </div>
      </>
      ):(
        <div>
      <div className="relative bg-slate-400/50 w-[10vw] h-[90vh] py-10 tansition duration-400 ease-in-out">
        <div className="sidebar-header">
          {/* <img src={WhiteLogo} alt="logo" className="sidebar-whiteLogo" /> */}
        </div>
        <div className="menu-items">
          {menuItems.map((item, key) => (
            <div
              className="flex justify-center gap-10 text-4xl font-bold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in"
              key={key}
              onClick={() => navigate(`${item.path}`)}
            >
              <div className="menuIcon">{item.icon}</div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="main">
          <button
            className="fixed top-20 left-20 p-2 text-slate-900 hover:text-slate-700 text-2xl bg-none border-none active-outline-none rounded-full tansition duration-400 ease-in-out"
            onClick={handleToggleSideNav}
          >
            {isSideNavOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
        </div>
      </div>
      )
    }
    </>
  );
};

export default SideNav;
