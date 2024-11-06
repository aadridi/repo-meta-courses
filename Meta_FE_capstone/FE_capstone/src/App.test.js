import React from 'react';
import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/MainReservations';
import { fetchAPI } from './api';

jest.mock('./api');

test('renders text', () => {
	render(<div>Test Element</div>);
	const element = screen.getByText('Test Element');
	expect(element).toBeTruthy();
});

describe('initializeTimes', () => {
	test('returns an object of type array', () => {
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = initializeTimes();

		expect(result).toBeInstanceOf(Array);
		expect(result).toEqual(testdata);
	});
});

describe('updateTimes', () => {
	test('returns the same value as provided by fetchAPI', () => {
		const newdate = '2024-11-07';
		const testdata = ['17:00', '18:00', '19:00'];
		fetchAPI.mockReturnValue(testdata);

		const result = updateTimes([], { type: 'UPDATE', date: newdate });

		expect(fetchAPI).toHaveBeenCalledWith(new Date(newdate));
		expect(result).toEqual(testdata);
	});
});
