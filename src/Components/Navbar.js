

import React, { Fragment } from 'react';
import NavbarMenu from "../Components/Menu/NavbarMenu"
import '../CSS/Navbar.css';
import Home from '../Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "../Components/About"
import InformationDesk from "../Components/InformationDesk"
import Academics from "../Components/Academics"
import Admission from "../Components/Admission"
import Facilities from "../Components/Facilities"
import Gallery from "../Components/Gallery"
import Career from "../Components/Career"
import Contact from "../Components/Contact"
import Calender from "../Components/Academic/Calender"
import Curriculum from './Academic/Curriculum';
import School_info from './About_us/School_info';
import Committe from './About_us/Committe';
import Chairman from './About_us/Chairman';
import Principal from './About_us/Principal';
import Director from "./About_us/Director"
import Infrastructure from './Information_desk/Infrastructure';
import Student_enroll from './Information_desk/Student_enroll';
function Navbar() {
  return (
    <Router>
     <NavbarMenu />
      <Fragment>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/InformationDesk' element={<InformationDesk/>} />
          <Route path='/academics' element={<Academics/>} />
          <Route path='/admission' element={<Admission/>} />
          <Route path='/facilities' element={<Facilities/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/career' element={<Career/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/calender' element={<Calender/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/wishlist' element={<School_info/>} />
          <Route path='/committe' element={<Committe/>}/>
          <Route path='/chairman' element={<Chairman/>} />
          <Route path='/principal' element={<Principal/>} />
          <Route path='/director' element={<Director/>} />
          <Route path='/infrastructure' element={<Infrastructure/>}/>
          <Route path='/enroll' element={<Student_enroll/>} />
        </Routes>

      </Fragment>

    </Router>
  );
}

export default Navbar;