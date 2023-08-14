import React from "react";
// import { MdDashboard } from "react-icons/md";
// import { RiBarChart2Fill } from "react-icons/ri";
// import { FaUsers, FaShippingFast } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Exams from "../components/Exams";
import ExamsCompleted from "../components/ExamsCompleted";
import { useSelector } from "react-redux";


const HomePage = () => {
  const courses = useSelector(state => state.courses);
  console.log(courses)
  const incompleteCourses = courses.filter(course => !course.completeStatus);
  const completedCourses = courses.filter(course => course.completeStatus);
  console.log('completed courses', incompleteCourses)
  console.log('available courses', courses)

  return (
    <div>
      <Nav />
      <div className="flex">
        <SideNav />
        <div className="flex flex-col justify-right items-left py-5 px-[5vw] w-screen h-[90vh] overflow-y-auto "> 
          <div className="text-left text-2xl font-semibold border-b-2 border-b-slate-300 pb-2 w-[100%]">Exams Due</div>
          {
            !incompleteCourses ? (
              <div className="text-slate-600 text-3xl my-20 w-full ">
                No courses available
              </div>
            ):(
              <div>
          {incompleteCourses.map(course => (
        <Exams key={course.courseId} course={course} />
      ))}
            {/* <Exams courses={state.courses}/> */}
            </div>
            )
          }
            <div className="text-left text-2xl font-semibold border-b-2 border-b-slate-300 my-10 pb-2 w-[100%]">Exams Completed</div>
           
            {
            !completedCourses ? (
              <div className="text-slate-600 text-3xl my-20 mx-auto w-30 h-30 ">
                No courses completed yet
              </div>
            ):(
              <div>
          {completedCourses.map(course => (
        <ExamsCompleted key={course.courseId} course={course} />
      ))}
            {/* <Exams courses={state.courses}/> */}
            </div>
            )
          }
          </div>
        </div>
      </div>
     
    
  );
};

export default HomePage;
