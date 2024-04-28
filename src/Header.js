// Header.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ buttonText, showButton }) {
  return (
    <header>
        <div className='header-content'>
            <div className="text-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                {/* Render the button only if showButton is true */}
                {showButton && (
                  <Link to="/reserve">
                      <button className="header-button">
                          {buttonText}
                      </button>
                  </Link>
                )}
            </div>
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" alt="food image"></img>
        </div>
    </header>
  );
}

Header.propTypes = {
    buttonText: PropTypes.string.isRequired,
    showButton: PropTypes.bool, // Add prop type for showButton
};

Header.defaultProps = {
    showButton: true, // Default value for showButton is true
};

export default Header;
