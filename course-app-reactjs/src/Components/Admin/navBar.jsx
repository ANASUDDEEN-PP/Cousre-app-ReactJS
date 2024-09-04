import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

export default class navBar extends Component {
  render() {
    return (
      <div className='crs-adm-nav'>
        <Link className="crs-adm-lg" to="/">
            CourseApp
        </Link>
        <div className="crs-adm-nav-lnks">
            <Link className='crs-adm-lnks' to="/">Home</Link>
            <Link className='crs-adm-lnks' to="">List Course</Link>
        </div>
        <div className="crs-rgs-btn"> 
            <Link className='crs-adm-btn' to="/register-course">Register Course</Link>
        </div>
      </div>
    )
  }
}
