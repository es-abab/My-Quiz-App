import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCloudsFill } from "react-icons/bs";
import {BiSolidNetworkChart} from 'react-icons/bi'
import {MdApps} from 'react-icons/md'

const ExamsCompleted = () => {
  const navigate = useNavigate();
  const handleQuizStart = () => {
    navigate('/quiz')
  }
  return (
    <>
      <div className="relative my-10 flex justify-between items-center p-10 w-[40vw] h-[15vh]  bg-slate-300 rounded-lg hover:shadow-lg  cursor-pointer transition duration-300 ease-in"
    //   onClick={handleQuizStart}
      >
        <div className="">
          <BsCloudsFill size={"84"} />
        </div> 
        <div className="flex flex-col justify-left w-[60%]">
          <div className="text-2xl text-start font-bold">Cloud computing</div>
          <div className="text-xl font-semibold text-left">
            <span className="mr-2 font-bold">Score:</span>20/25
          </div>
          <div className="text-md font-semibold text-left">16th July, 2023</div>
          {/* <div>Exam duration</div> */}
        </div>
        <div className="absolute bottom-0 right-0 px-5 flex items-center bg-slate-500 h-8 rounded-tl-lg rounded-br-lg -md  hover:shadow-lg transition duration-200 ease-in font-bold text-white">
          Completed
        </div>
      </div>

      <div className=" relative my-10 flex justify-between items-center p-10 w-[40vw] h-[15vh]  bg-slate-300 rounded-lg hover:shadow-lg  cursor-pointer transition duration-300 ease-in"
    //   onClick={handleQuizStart}
      >
        <div className="">
          <BiSolidNetworkChart size={"84"} />
        </div>
        <div className="w-[60%] flex flex-col justify-left">
          <div className="text-2xl text-start font-bold">Devops</div>
          <div className="text-xl font-semibold text-left">
            <span className="mr-2 font-bold">Score:</span>18/25
          </div>
          <div className="text-md font-semibold text-left">16th July, 2023</div>
          {/* <div>Exam duration</div> */}
        </div>
        <div className="absolute bottom-0 right-0 px-5 flex items-center bg-slate-500 h-8 rounded-tl-lg rounded-br-lg -md  hover:shadow-lg transition duration-200 ease-in font-bold text-white">
          Completed
        </div>
      </div>

      <div className="relative my-10 flex justify-between items-center p-10 w-[40vw] h-[15vh]  bg-slate-300 rounded-lg hover:shadow-lg  cursor-pointer transition duration-300 ease-in"
    //   onClick={handleQuizStart}
      >
        <div className="">
          <MdApps size={"84"} />
        </div>
        <div className="w-[60%] flex flex-col justify-left">
          <div className="text-2xl text-start font-bold">Software Architecture</div>
          <div className="text-xl font-semibold text-left">
            <span className="mr-2 font-bold">Score:</span>14/25
          </div>
          <div className="text-md font-semibold text-left">16th July, 2023</div>
          {/* <div>Exam duration</div> */}
        </div>
        <div className="absolute bottom-0 right-0 px-5 flex items-center bg-slate-500 h-8 rounded-tl-lg rounded-br-lg -md  hover:shadow-lg transition duration-200 ease-in font-bold text-white">
          Completed
        </div>
      </div>
    </>
  );
};

export default ExamsCompleted;
