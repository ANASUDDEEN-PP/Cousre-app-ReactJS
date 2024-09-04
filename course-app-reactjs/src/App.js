import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import modules
import Home from './Components/Admin/adminHome'
import CourseRegister from './Components/Admin/courseAdd'
import ListCourse from './Components/Admin/listCourse';

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-course" element={<CourseRegister />} />
        <Route path="/list-course" element={<ListCourse />}/>
      </Routes>
    </Router>
  )
}

export default App;
