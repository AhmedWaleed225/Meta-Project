// BookingForm.js
import './BookingForm.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFormData({ ...formData, date: selectedDate });
    updateTimes(selectedDate);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  return (
    <div>
      <h1>Book Now</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={formData.date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={formData.time} onChange={handleInputChange}>
          {availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" name="guests" value={formData.guests} min="1" max="10" onChange={handleInputChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTimes: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default BookingForm;
