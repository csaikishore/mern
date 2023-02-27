import "./Id.css";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
  export default function Back() {
   
  // const nav = useNavigate();
  return (
    <body>
      <div className="container1">
        <div className="address">
          <h3>
            <b>
              Adress:flat.No: 406,VRR Vaibhavam, Poranki - 521137,
              <br />
              Vijayawada
              <br />
              <br />
              Emergency Contact No :7396999414,Blood Group : O+
              <br />
              <br />
              Email: 2100032302@kluniversity.in
            </b>
          </h3>
        </div>
        <div className="coladd">
          <h3>
            If Found, Please return to:
            <br />
            KL Deemed to be University,
            <br />
            Greenfields, Vaddeswaram, Guntur District - 522502
            <br />
            Phone No : 0863-2399999
            <br />
            <br />
            www.kluniversity.in
          </h3>
        </div>
        <div className="bar">
          <h4 className="txt">
            <b>*2100032302*</b>
          </h4>
          <div className="barcode"></div>
        </div>
      </div>
      <Link to='/'><button class ="button" id-="mainBtn"><b>Front Side</b></button></Link>
    </body>
  );
}
