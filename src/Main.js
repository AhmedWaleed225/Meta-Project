// Main.js

import React, { useReducer, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

function Main() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(reducer, []);
  const [formData, setFormData] = useState(null); // Initialize formData state
  const navigate = useNavigate();

  const fetchAvailableTimes = async () => {
    const today = new Date();
    const times = await fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  useEffect(() => {
    fetchAvailableTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      setFormData(formData); // Update formData state
      navigate('/confirmed');
    }
  };

  return (
    <div>
      {/* Render BookingForm or ConfirmedBooking based on route */}
      {formData ? (
        <ConfirmedBooking formData={formData} />
      ) : (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
      )}
    </div>
  );
}

export default Main;
