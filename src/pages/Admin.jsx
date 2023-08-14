import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourseStatus } from "../redux/courseSlice";
import ExamsCompleted from "../components/ExamsCompleted";
import Exams from "../components/Exams";
import { useEffect } from "react";

const Admin = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses); // Assuming you've defined your store slice as "courses"
  console.log(courses);

  const incompleteCourses = courses.filter((course) => !course.completeStatus);
  const completedCourses = courses.filter((course) => course.completeStatus);

  const [courseDetails, setCourseDetails] = useState({
    courseId: courses.length + 1, // Automatically set the next available course ID
    dueDate: "",
    courseName: "",
    timeOfExam: "",
    score: 0,
    completeStatus: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateCourse = (event) => {
    event.preventDefault();
    dispatch(addCourse(courseDetails));
    alert("Course created successfully");
    //   console.log(courses)
    // Clear the form
    setCourseDetails({
      courseId: courses.length + 1, // Set next available course ID
      dueDate: "",
      courseName: "",
      timeOfExam: "",
      score: 0,
      completeStatus: false,
    });
  };

 
  useEffect(() => {
    
  }, [courses]);
  
  const handleComplete = (course) => {
    dispatch(updateCourseStatus(course.courseId));
  };

  const handleDelete = (course) => {
    dispatch(deleteCourse(course.courseId));
  };

  return (
    <div className="h-full bg-slate-200">
      <div className="w-[100vw] flex flex-col items-center justify-center mb-40">
        <h2 className="text-xl font-semibold mb-4">Create Course</h2>
        <div className="w-[50rem] mx-auto p-4 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleCreateCourse}>
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="flex items-center font-bold text-slate-900"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={courseDetails.courseName}
                onChange={handleInputChange}
                className="block w-full p-2 mt-1 border rounded-md bg-slate-100 text-slate-900"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="flex items-center text-slate-900 font-bold w-[10rem]"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={courseDetails.dueDate}
                onChange={handleInputChange}
                className="block w-full p-2 mt-1 border rounded-md bg-slate-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="flex items-center text-slate-900 font-bold w-[10rem]"
              >
                Time of Exam
              </label>
              <input
                type="time"
                id="timeOfExam"
                name="timeOfExam"
                value={courseDetails.timeOfExam}
                onChange={handleInputChange}
                className="block w-full p-2 mt-1 border rounded-md bg-slate-200"
              />
            </div>

            {/* Add more input fields for other course details */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>

      <div className="px-20">
        <h2>Manage Courses</h2>
        <div className="text-left text-2xl font-semibold border-b-2 border-b-slate-300 pb-2 w-[100%]">
          Exams Due
        </div>
        {!incompleteCourses ? (
          <div className="text-slate-600 text-3xl my-20 ">
            No courses available
          </div>
        ) : (
          <div className="flex flex-wrap gap-5">
            {incompleteCourses.map((course) => (
                <>
                <div className="flex flex-col">
              <Exams key={course.courseId} course={course} />
              <div className="flex gap-5 justify-around">
              <button className="w-30 h-10 bg-green-500 text-white" onClick={() => handleComplete(course)}>Completed</button>
              <button className="w-30 h-10 bg-red-500 text-white" onClick={() => handleDelete(course)}>Delete</button>
              </div>
              </div>
              </>
            ))}
            {/* <Exams courses={state.courses}/> */}
          </div>
        )}
        <>
        <div className="text-left text-2xl font-semibold border-b-2 border-b-slate-300 my-10 pb-2 w-[100%]">
          Exams Completed
        </div>

        {!completedCourses ? (
          <div className="text-slate-600 text-3xl my-20 mx-autoo ">
           <p> No courses completed yet </p>
          </div>
        ) : (
          <div>
            {completedCourses.map((course) => (
                <>
              <ExamsCompleted key={course.courseId} course={course} />
              <div className="flex gap-5 justify-around">
              <button className="w-30 h-10 bg-green-500 text-white" onClick={handleComplete(course)}>Completed</button>
              <button className="w-30 h-10 bg-red-500 text-white" onClick={handleDelete(course)}>Delete</button>
              </div>
              </>
            ))}
            {/* <Exams courses={state.courses}/> */}
          </div>
        )}

        </>
      </div>
    </div>
  );
};

export default Admin;
