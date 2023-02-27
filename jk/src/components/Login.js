import React from "react";
import "./login.css";
import cart from "../components/images/loginright.png";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
export default function Login() {
  const theme = useTheme();
  return (
    <div>
      <div class={theme.theme === true ? "login6_dark" : "login6_white"}>
        <div class="login_header">
          <div class="login6_login">
            <div class="login6_login_box">
              <div class="login6_left">
                <div class="login6_contact">
                  <form action="">
                    <h3>SIGN IN</h3>
                    <label>UserName</label>
                    <input type="text" placeholder="USERNAME" />
                    <label>Password</label>
                    <input type="text" placeholder="PASSWORD" />
                    <button class="login6_submit">Login</button>
                  </form>
                </div>
              </div>

              <div class="login6_right-inductor text-center justify-content-center">
                <img src={cart} alt="" />
                <p className="primary text-decoration-underline">Not a Member?</p>
                <Link class="btn btn-primary text-wrap text-center" to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
