import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import modules
import Home from './Components/Admin/adminHome'
import CourseRegister from './Components/Admin/courseAdd'

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-course" element={<CourseRegister />} />
      </Routes>
    </Router>
  )
}

export default App;