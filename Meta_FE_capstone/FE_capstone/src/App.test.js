import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/MainReservations';

test('Renders Occasion', () => {
	const mockAvailableTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];

	render(<BookingForm availableTimes={mockAvailableTimes} />);
	const element = screen.getByText('Occasion :');
	expect(element).toBeTruthy();
});

test('renders text', () => {
	render(<div>Test Element</div>);
	const element = screen.getByText('Test Element');
	expect(element).toBeTruthy();
});

describe('initializeTimes', () => {
	test('returns the correct expected initial value', () => {
		const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
		const result = initializeTimes();
		expect(result).toEqual(expectedTimes);
	});
});

describe('updateTimes', () => {
	test('returns the same value as provided in the state', () => {
		const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Remplace par l'état initial attendu
		const result = updateTimes(currentState, { type: 'UPDATE', payload: currentState });
		expect(result).toEqual(currentState);
	});
});
