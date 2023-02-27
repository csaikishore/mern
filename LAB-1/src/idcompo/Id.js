import './Id.css';
import React from 'react'
import { Link } from 'react-router-dom';
export default function Id() {

return (

    <div className="content">
        <div className="container" >
        <div className="logo">
        </div>
        <div className="pic">
        </div>
        <div className="name">
            <p1>F_name  L_name</p1>
            <h3>DEPT</h3>
        </div>
        <div className="student_id">
            <h3>Student ID</h3>
            <h2><b id="id1">21000XXXXX</b></h2>
            <h3 id = "id2">2021-2025</h3>
        </div>
        <div className="sign-T">
            <div className="sign">
            </div>
            <div id ="id3">
                <h4> Issuing  Authority</h4>
            </div>
        </div>
    </div>
    <Link to='back'><button class ="button" id-="mainBtn"  ><b>Back Side</b></button></Link>
    </div>
    
  )
}
