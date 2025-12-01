import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../components/Navbar.css";

const Students = () => {
  const [studentId, setStudentId] = React.useState("");
  const [value, setValue] = React.useState("");

  return (
    <div>
      <h1>Students Panel</h1>

      <div className="navbar-container">
        <nav>
          <ul>
            <li>
              <Link to="/students">Default</Link>
            </li>
            <li>
              <Link to="/students/grades">Grades</Link>
            </li>

            <li>
              <Link to={`/students/${studentId}`}>Student Profile</Link>
              <input
                type="number"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </li>

            <li>
              <Link to={`/students/optional/${value}`}>Optional Segment</Link>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className="students-content">
        <br />
        <h2>Student Details</h2>
        <Outlet />
      </div>
    </div>
  );
};
export default Students;
