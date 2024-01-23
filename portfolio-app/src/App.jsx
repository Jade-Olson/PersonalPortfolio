import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} default/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/resume" element={<ResumePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App

