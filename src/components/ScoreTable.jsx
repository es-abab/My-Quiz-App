import React, { useState } from "react";
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";

const ScoreTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState('all');

  // const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses); // Assuming you've defined your store slice as "courses"
  console.log('current courses',courses)


  const filteredData = courses.filter((course) => {
    const includesSearchTerm =
      course.courseId.toString().includes(searchTerm) ||
      course.dueDate.includes(searchTerm) ||
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.score.toString().includes(searchTerm);

    const matchesCourseFilter = filterOption === 'all' || (filterOption === 'completed' && course.completeStatus) || (filterOption === 'not_completed' && !course.completeStatus);

    return includesSearchTerm && matchesCourseFilter;
  });

  return (
    <div className="w-full">
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Search Course..."
          className="w-[50%] bg-slate-200 rounded-full px-4 py-2 mb-4 border focus:outline-none flex justify-start "
          onChange={(e) => setSearchTerm(e.target.value)}
        />



<div className="mb-4">
        <label className="mr-4">
          Filter Status:
          <select
            className="ml-2 px-2 py-1 bg-slate-300 border rounded-md"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not_completed">Not Completed</option>
          </select>
        </label>
      </div>

      </div>

      <table className="w-full table-auto shadow-lg rounded-xl">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Exam Date</th>
            <th className="px-4 py-2 text-left">Course Name</th>
            <th className="px-4 py-2 text-left">Score</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((course, index) => (
            <tr
              key={course.courseId}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-orange-200 cursor-pointer transition duration-300 ease-in`}
            >
              <td className="px-4 py-2 text-left">{course.courseId}</td>
              <td className="px-4 py-2 text-left">{course.dueDate}</td>
              <td className="px-4 py-2 text-left">{course.courseName}</td>
              <td className="px-4 py-2 text-left">{course.score}</td>
              {
                course.completeStatus ? 
                (<td className="flex gap-3 px-4 py-2 text-left"><span className="text-green-400 text-xl flex items-center"><FaCheckCircle /></span>Completed</td>):
                (
                  <td className="flex gap-3 px-4 py-2 text-left"><span className="text-red-400 flex text-xl items-center"><FaWindowClose /></span>Not Completed</td>
                )
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
