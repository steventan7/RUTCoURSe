import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import CoursePage from './Pages/CoursePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/page" element ={<CoursePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
