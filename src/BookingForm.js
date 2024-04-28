// BookingForm.js
import React from 'react';
import './BookingForm.css';
import PropTypes from 'prop-types'; // Import prop-types package

function BookingForm({ availableTimes, updateTimes }) {
  // Function to handle date change
  const handleDateChange = (event) => {
    // Dispatch the state change when the date form field is changed
    updateTimes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <div>
      <h1>Book Now</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        {/* Add onChange event handler to trigger handleDateChange */}
        <input type="date" id="res-date" onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          {/* Map over the availableTimes array to display the available times */}
          {availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

// Add prop type validations
BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTimes: PropTypes.func.isRequired,
};

export default BookingForm;
