import React from "react";
import logo from "../../assets/img/logo.svg";
import shape from "../../assets/img/Shape .svg";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-main">
            <div className="header-left">
              <img className="header-main-logo" src={logo} />
              <nav className="navbar">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#companies">Companies</a>
                  </li>
                  <li>
                    <a href="#investors">Investors</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-shape">
              <img src={shape} alt="" srcset="" />
            </div>
            <div className="header-right">
              <button className="btn-light sign-in">SIGN IN</button>
              <button className="btn-dark sign-up">SIGN UP</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
