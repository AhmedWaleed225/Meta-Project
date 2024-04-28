// Main.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

function Main() {
  // Function to initialize the times state
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // Define the reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, return the same available times regardless of the date
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      default:
        return state;
    }
  };

  // Initialize state using useReducer
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  // Function to update the times based on the selected date
  const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  return (
    <div>
      {/* Pass the availableTimes and updateTimes function to the BookingForm component */}
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default Main;
