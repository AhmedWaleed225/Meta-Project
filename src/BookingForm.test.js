// BookingForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import BookingForm from './BookingForm';

// Mock the updateTimes function
const mockUpdateTimes = jest.fn();

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test('Handles date change correctly', () => {
    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);
    const dateInput = screen.getByLabelText('Choose date');
    userEvent.type(dateInput, '2024-04-30'); // Simulate typing a date
    expect(mockUpdateTimes).toHaveBeenCalledWith('2024-04-30');
  });

  test('Displays available times correctly', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    render(<BookingForm availableTimes={availableTimes} updateTimes={mockUpdateTimes} />);
    const timeOptions = screen.getAllByRole('option'); // Get all option elements
    expect(timeOptions).toHaveLength(availableTimes.length); // Check if the number of options matches the available times
    timeOptions.forEach((option, index) => {
      expect(option).toHaveTextContent(availableTimes[index]); // Check if each option contains the correct time
    });
  });

  // Add more tests as needed...
});
