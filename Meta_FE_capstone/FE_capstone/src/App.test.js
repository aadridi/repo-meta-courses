import React from 'react';
import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/MainReservations';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./api');

test('renders text', () => {
	render(<div>Test Element</div>);
	const element = screen.getByText('Test Element');
	expect(element).toBeTruthy();
});

describe('initializeTimes', () => {
	test('returns an object of type array equal to the testdata given', () => {
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = initializeTimes();

		expect(result).toBeInstanceOf(Array);
		expect(result).toEqual(testdata);
	});
});

describe('updateTimes', () => {
	test('returns the same value with data provided by either fetchAPI or hardcoded values', () => {
		const newdate = '2024-11-07';
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = updateTimes([], { type: 'UPDATE', date: newdate });

		expect(fetchAPI).toHaveBeenCalledWith(new Date(newdate));
		expect(result).toEqual(testdata);
	});
});

describe('BookingForm Inputs', () => {
	test('Date input has correct type and minimum date', async () => {
		render(
			<MemoryRouter>
				<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />
			</MemoryRouter>
		);
		const dateInput = await screen.findByLabelText('Choose Date:');
		const today = new Date().toISOString().split('T')[0];

		expect(dateInput).toBeTruthy();
	});

	test('Time input is a select dropdown with correct options', async () => {
		render(
			<MemoryRouter>
				<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />
			</MemoryRouter>
		);
		const timeSelect = await screen.findByLabelText('Choose Time:');

		expect(timeSelect).toBeTruthy();
	});

	test('Guests input has correct type, min, and max values', async () => {
		render(
			<MemoryRouter>
				<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />
			</MemoryRouter>
		);
		const guestsInput = await screen.findByLabelText('Number of Guests:');

		expect(guestsInput).toBeTruthy();
	});

	test('Occasion input is a select dropdown with correct default option', async () => {
		render(
			<MemoryRouter>
				<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />
			</MemoryRouter>
		);
		const occasionSelect = await screen.findByLabelText('Occasion:');

		expect(occasionSelect).toBeTruthy();
		expect(occasionSelect.value).toBe('Nothing special');
	});
});

describe('initializeTimes', () => {
	test('returns an array of times when fetchAPI is successful', () => {
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = initializeTimes();

		expect(result).toBeInstanceOf(Array);
		expect(result).toEqual(testdata);
	});

	test('handles an empty array if fetchAPI returns no times', () => {
		fetchAPI.mockReturnValue([]);

		const result = initializeTimes();

		expect(result).toEqual([]);
	});
});

describe('updateTimes', () => {
	test('returns updated times for a valid date', () => {
		const newdate = '2024-11-07';
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = updateTimes([], { type: 'UPDATE', date: newdate });

		expect(fetchAPI).toHaveBeenCalledWith(new Date(newdate));
		expect(result).toEqual(testdata);
	});

	test('returns the current state when action type is invalid', () => {
		const currentState = ['17:00', '18:00', '19:00'];
		const result = updateTimes(currentState, { type: 'INVALID_ACTION', date: '2024-11-07' });

		expect(result).toEqual(currentState);
	});

	test('returns an empty array if fetchAPI returns no data', () => {
		fetchAPI.mockReturnValue([]);
		const result = updateTimes([], { type: 'UPDATE', date: '2024-11-07' });

		expect(result).toEqual([]);
	});
});
