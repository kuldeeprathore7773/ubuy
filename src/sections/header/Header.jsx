import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src=""/>
        </div>
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
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
    </>
  );
}

export default Header;
