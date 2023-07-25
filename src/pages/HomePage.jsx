import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Exams from "../components/Exams";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <SideNav />
        <div className="py-5 px-[5vw] w-[75vw]"> 
          <div className="text-left text-2xl font-semibold border-b-2 border-b-slate-300 mb-10 pb-2 w-[100%]">My Exams</div>
          <div>
            <Exams />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomePage;
