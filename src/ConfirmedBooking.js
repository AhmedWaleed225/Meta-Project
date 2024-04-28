// ConfirmedBooking.js

import React from 'react';
import PropTypes from 'prop-types';

function ConfirmedBooking({ formData }) {
  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Date: {formData.date}</p>
      <p>Time: {formData.time}</p>
      <p>Number of Guests: {formData.guests}</p>
      <p>Occasion: {formData.occasion}</p>
    </div>
  );
}

ConfirmedBooking.propTypes = {
  formData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    occasion: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConfirmedBooking;
