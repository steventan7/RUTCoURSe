import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePage from "./Pages/CoursePage";
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-page" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
