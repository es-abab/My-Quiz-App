import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaUsers, FaShippingFast } from 'react-icons/fa'
// import WhiteLogo from '../assets/white_logo.png'
// import { isTypeElement } from 'typescript'
import { useNavigate } from 'react-router-dom'
// import Logout from './Logout'

const SideNav = () => {
  const navigate = useNavigate()
  const menuItems = [
    {
      name: "home",
      path: "/recruiter/home",
      icon: < MdDashboard />,
    },
    {
      name: "applicants",
      path: "/recruiter/applicants",
      icon: < FaUsers />,
    },
    {
      name: "profile",
      path: "/recruiter/profile",
      icon: < FaShippingFast />,
    },
  ]
  return (
    <div >
      <div className="bg-slate-400/50 w-[25vw] h-[90vh] py-10">
        <div className="sidebar-header">
        {/* <img src={WhiteLogo} alt="logo" className="sidebar-whiteLogo" /> */}
        </div>
        <div className="menu-items" >
          {
            menuItems.map((item, key) => (
              
              <div className="flex gap-10 text-lg font-bold  py-5 px-10 w-full items-center cursor-pointer hover:bg-blue-300 duration-500 transition ease-in" 
              key={key}
                onClick={() => navigate(`${item.path}`) }
              >
                 <div className="menuIcon" >{item.icon}</div>
                 <div className="itemName" >{item.name}</div>
              </div>
              ))
          }
          
        </div >
        {/* <Logout /> */}
      </div>
      <div className="main">
        {/* {props.children} */}
      </div>
      
    </div>
  )
}

export default SideNav