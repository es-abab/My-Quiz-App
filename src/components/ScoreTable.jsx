import React, { useState } from "react";
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa'

const ScoreTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState('all');
//   const [showCompleted, setShowCompleted] = useState(true);
//   const [showNotCompleted, setShowNotCompleted] = useState(true);
//   const [showAllCourses, setShowAllCourses] = useState(true);

  const data = [
    {
      key: "1",
      dateTaken: "2023-07-02",
      course: "Load Balancers",
      score: "14/25",
      status: "Completed",
    },
    {
      key: "2",
      dateTaken: "2023-07-10",
      course: "Moad Balancers 2",
      score: "14/25",
      status: "Completed",
    },
    {
      key: "3",
      dateTaken: "2023-07-13",
      course: "Docker w/ AWS",
      score: "18/25",
      status: "Completed",
    },
    {
      key: "4",
      dateTaken: "2023-07-14",
      course: "Kubernetes",
      score: "20/25",
      status: "Completed",
    },
    {
      key: "5",
      dateTaken: "2023-07-16",
      course: "Cloud Computing",
      score: "n/a",
      status: "Not Completed",
    },
    {
      key: "6",
      dateTaken: "2023-07-18",
      course: "Devops",
      score: "n/a",
      status: "Not Completed",
    },
    {
      key: "7",
      dateTaken: "2023-07-26",
      course: "Software Architecture",
      score: "n/a",
      status: "Not Completed",
    },
    

    

    // Add more data as needed
  ];

//   const filteredData = data.filter((item) => {
//     const includesSearchTerm =
//       item.key.includes(searchTerm) ||
//       item.dateTaken.includes(searchTerm) ||
//       item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.score.includes(searchTerm);

//     const matchesCourseFilter =
//       showAllCourses ||
//       (showCompleted && item.status === "Completed") ||
//       (showNotCompleted && item.status === "Not Completed");

//     return includesSearchTerm && matchesCourseFilter;
//   });

  const filteredData = data.filter((item) => {
    const includesSearchTerm =
      item.key.includes(searchTerm) ||
      item.dateTaken.includes(searchTerm) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.score.includes(searchTerm);

    const matchesCourseFilter = filterOption === 'all' || (filterOption === 'completed' && item.status === 'Completed') || (filterOption === 'not_completed' && item.status === 'Not Completed');

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

        {/* <div className="mb-4 flex justify-between items-center">
          <label className="mr-4">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
              className="mr-2"
            />
            Completed
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={showNotCompleted}
              onChange={() => setShowNotCompleted(!showNotCompleted)}
              className="mr-2"
            />
            Not Completed
          </label>
          <label>
            <input
              type="checkbox"
              checked={showAllCourses}
              onChange={() => setShowAllCourses(!showAllCourses)}
              className="mr-2"
            />
            Show All Courses
          </label>
        </div> */}
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
          {filteredData.map((item, index) => (
            <tr
              key={item.key}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-orange-200 cursor-pointer transition duration-300 ease-in`}
            >
              <td className="px-4 py-2 text-left">{item.key}</td>
              <td className="px-4 py-2 text-left">{item.dateTaken}</td>
              <td className="px-4 py-2 text-left">{item.course}</td>
              <td className="px-4 py-2 text-left">{item.score}</td>
              {
                item.status === 'Completed' ? 
                (<td className="flex gap-3 px-4 py-2 text-left"><span className="text-green-400 text-xl flex items-center"><FaCheckCircle /></span>{item.status}</td>):
                (
                  <td className="flex gap-3 px-4 py-2 text-left"><span className="text-red-400 flex text-xl items-center"><FaWindowClose /></span>{item.status}</td>
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
