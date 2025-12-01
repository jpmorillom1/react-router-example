import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User.jsx";
import Product from "./pages/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Students from "./pages/Students.jsx";
import StudentList from "./pages/StudentList.jsx";
import StudentsGrades from "./StudentsGrades.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";
import StudentOptional from "./pages/StudentOptional.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import FooterDebug from "./components/FooterDebug.jsx";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Routes>
          <Route path="/students" element={<Students />}>
            <Route index element={<StudentList />} />
            <Route path="grades" element={<StudentsGrades />} />
            //routes with dynamic, optional and splat
            <Route path=":studentId" element={<StudentProfile />} />
            <Route path="optional/:value?" element={<StudentOptional />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <br />
      <br />
      <br />
      <br />
      <FooterDebug />
    </>
  );
}

export default App;
