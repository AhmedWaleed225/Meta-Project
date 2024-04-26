import './Nav.css';
import React from 'react';

function Nav() {
    return (
      <nav>
        <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt="Logo" />
        <ul>
          <li><a href="/home">Homepage</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reserve">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  