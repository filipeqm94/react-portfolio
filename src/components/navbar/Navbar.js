import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
      <div className='container-fluid'>
        <a className='navbar-brand logo' href='/'>
          Filipe <span className='gold'>Marques</span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar-items'
          aria-controls='navbar-items'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar-items'>
          <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='/'>
                About me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
