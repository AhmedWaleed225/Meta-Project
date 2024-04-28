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
    const validTimeOptions = timeOptions.filter(option => option.hasAttribute('value'));
    expect(validTimeOptions).toHaveLength(availableTimes.length); // Check if the number of options matches the available times
    validTimeOptions.forEach((option, index) => {
      expect(option).toHaveTextContent(availableTimes[index]); // Check if each option contains the correct time
    });
  });
  

  test('Submits form successfully', () => {
    const formData = {
      date: '2024-04-30',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday'
    };
    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make your reservation' });
    
    userEvent.type(dateInput, formData.date);
    userEvent.type(timeInput, formData.time);
    userEvent.type(guestsInput, formData.guests.toString());
    userEvent.type(occasionInput, formData.occasion);
    userEvent.click(submitButton);

    // Assert that the mockUpdateTimes function was called with the correct form data
    expect(mockUpdateTimes).toHaveBeenCalledWith(formData);
  });
});
