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
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Course Name....' />
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Instructor Name....' />
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Description Name....' />
            </div>
            <div className="rows">
                <input className='crs-dm-reg-file' type="file"/>
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Duration....' />
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Schedule....' />
            </div>
            <div className="rows">
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter Location type....' />
                <input className='crs-dm-reg-inp' type="text" placeholder='Enter prerequisites....' />
                <button className='crs-adm-reg-sbt'>Register</button>
            </div>
        </div>
      </div>
    )
  }
}
