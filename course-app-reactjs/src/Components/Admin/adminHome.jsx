import React, { Component } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';

//import modules
import NavBar from './navBar'


export default class adminHome extends Component {
  render() {
    return (
      <div  className='crs-main-sct'>
        <NavBar />
        <div className='crs-sdm-bnnr'>
            <Link className='crs-bnnr-lnk' to='/register-course'>Learn More</Link>
        </div>
        <div className="crs-sct-two">
            <div className="sub-ctr">
                <h1 className="crs-count">30+</h1>
                <p className="crs-desc">Faculties</p>
            </div>
            <div className="sub-ctr">
                <h1 className="crs-count">20+</h1>
                <p className="crs-desc">Courses</p>
            </div>
            <div className="sub-ctr">
                <h1 className="crs-count">100+</h1>
                <p className="crs-desc">Success Placement</p>
            </div>
            <div className="sub-ctr">
                <h1 className="crs-count">50+</h1>
                <p className="crs-desc">Recurited Companies</p>
            </div>
        </div>
      </div>
    )
  }
}
