import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCloudsFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateCourseStatus } from '../redux/courseSlice';
// import {BiSolidNetworkChart} from 'react-icons/bi'
// import {MdApps} from 'react-icons/md'

const Exams = ({ course }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleQuizStart = () => {

    navigate('/quiz', { state: { course } })
  }

 
  return (
    <div className="flex flex-wrap gap-5">
      <div className="relative my-5 flex justify-between items-center p-10 w-[35vw] h-[15vh]  bg-slate-300 rounded-lg hover:shadow-lg hover:bg-blue-300 cursor-pointer transition duration-300 ease-in"
      onClick={handleQuizStart}
      >
        <div className="">
          <BsCloudsFill size={"84"} />
        </div> 
        <div className="flex flex-col justify-left w-[60%]">
          <div className="text-2xl text-start font-bold">{course.courseName}</div>
          <div className="text-md font-semibold text-left">
            <span className="mr-2">Time:</span>{course.timeOfExam}
          </div>
          <div className="text-md font-semibold text-left">{course.dueDate}</div>
        </div>
        <div className="absolute bottom-0 right-0 px-5 flex items-center bg-green-600 h-7 rounded-tl-lg rounded-br-lg -md hover:bg-green-800/90 hover:shadow-lg transition duration-200 ease-in font-bold text-sm text-white">
          Click to Start
        </div>
      </div>

     
    </div>
  );
};

export default Exams;
