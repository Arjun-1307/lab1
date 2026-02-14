import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student Information Portal</h1>
    </nav>
  );
};

const StudentCard = ({ name, roll, course, marks }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
};

const App = () => {
  const students = [
    { id: 1, name: "Arjun", roll: "101", course: "B.Tech", marks: 95 },
    { id: 2, name: "Mani", roll: "102", course: "B.Tech", marks: 90 },
    { id: 3, name: "Kiran", roll: "103", course: "B.Tech", marks: 85 },
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="card-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            roll={student.roll}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
};

export default App;