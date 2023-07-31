import React, { useEffect, useRef } from "react";
// import animation from '../assets/animation/'
import lottie from "lottie-web";
import animationData from "../assets/animation/data.json";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ScoreTable from "../components/ScoreTable";

const Dashboard = () => {
  const animationContainer = useRef(null);

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
              <div className=" flex items-center justify-between px-10 gap-4 mb-10 bg-slate-300 w-full h-28 rounded-xl shadow-lg p-4">
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-full"></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-5xl">3/5</span>
                    <span className="font-semibold text-xl">
                      Total Exams Completed
                    </span>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-full"></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-5xl">3/5</span>
                    <span className="font-semibold text-xl">
                      Total Exams Due
                    </span>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-full"></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-5xl">70%</span>
                    <span className="font-semibold text-xl">Average Score</span>
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
