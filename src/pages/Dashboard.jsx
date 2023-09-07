import React, { useEffect, useRef } from "react";
// import animation from '../assets/animation/'
import lottie from "lottie-web";
import animationData from "../assets/animation/data.json";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ScoreTable from "../components/ScoreTable";
// import { SlCalender} from 'react-icons/sl'
import { BsFillCalendarCheckFill, BsFillCalendarWeekFill } from 'react-icons/bs'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { useSelector } from "react-redux";

const Dashboard = () => {
  const animationContainer = useRef(null);
  const courses = useSelector((state) => state.courses); // Assuming you've defined your store slice as "courses"

  // Calculate the total number of completed exams (a)
  const totalCompletedExams = courses.filter((course) => course.completeStatus).length;
  
  // Calculate the total number of exams that are due (a)
  const totalExamsDue = courses.filter((course) => !course.completeStatus).length;
    
  // Calculate the total number of all exams (b)
  const totalExams = courses.length;

  

  // Calculate the total score of completed exams (a)
  let totalScore = 0;

  courses.forEach((course) => {
    if (course.completeStatus) {
      totalScore += course.score;
    }
  });

  // Calculate the average score (a divided by the total number of completed exams)
  const averageScore = totalCompletedExams > 0 ? totalScore / totalCompletedExams : 0;


  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Use 'svg' or 'canvas'
      loop: true, // Set to true for loop, false for no loop
      autoplay: true, // Set to true to start playing automatically
      animationData: animationData, // Your animation JSON data
    });

    return () => {
      // Cleanup on unmount
      anim.destroy();
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex">
        <SideNav />
        <div className="p-16 w-[70vw]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className=" flex items-center justify-between px-10 gap-4 mb-10 bg-slate-800 w-full h-28 rounded-xl shadow-lg shadow-black/50 p-4">
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center font-bold text-4xl bg-orange-300 rounded-full"><BsFillCalendarCheckFill /></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-4xl text-white">{totalCompletedExams}/{totalExams}</span>
                    <span className="font-semibold text-lg text-left leading-none mt-1 text-white/70">
                      Total Exams Completed
                    </span>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center font-bold text-4xl bg-orange-300 rounded-full"><BsFillCalendarWeekFill /></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-4xl text-white">{totalExamsDue}</span>
                    <span className="font-semibold text-lg text-left leading-none mt-1 text-white/70">
                      Total Exams Due
                    </span>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center font-bold text-5xl"><AiOutlineAreaChart /></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-4xl text-white">{averageScore}%</span>
                    <span className="font-semibold text-lg text-left leading-none mt-1 text-white/70">Average Score</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="exam scores">
              <ScoreTable />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='flex flex-col h-screen w-screen justify-center items-center font-bold text-4xl text-white/50 bg-slate-900'>
    //     <div ref={animationContainer} />
    //     <div>So sorry, page still under construction...</div>
    // </div> */}
  );
};

export default Dashboard;
