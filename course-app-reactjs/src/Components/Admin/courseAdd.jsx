import React, { Component } from 'react'
import './admin.css'

//import modules
import NavBar from './navBar'

export default class courseAdd extends Component {
  render() {
    return (
      <div className='crs-main-sct'>
        <NavBar/>
        <div className="crs-reg-form">
            <h1 className="crs-register-hd">
                Course Register
            </h1>
            <div className="rows">
                <input type="text" placeholder='Enter Course Name....' />
                <input type="text" placeholder='Enter Instructor Name....' />
            </div>
            <div className="rows">
                <input type="text" placeholder='Enter Description Name....' />
                <input type="file"/>
            </div>
            <div className="rows">
                <input type="text" placeholder='Enter Duration....' />
                <input type="text" placeholder='Enter Schedule....' />
            </div>
            <div className="rows">
                <input type="text" placeholder='Enter Location type....' />
                <input type="text" placeholder='Enter prerequisites....' />
            </div>
            <button>Register</button>
        </div>
      </div>
    )
  }
}
