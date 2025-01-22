import { useReducer } from 'react';
import { fetchAPI } from '../api';
import BookingForm from './BookingForm';

export const initializeTimes = () => {
	const today = new Date();
	return fetchAPI(today);
};

export const updateTimes = (state, action) => {
	switch (action.type) {
		case 'UPDATE':
			return fetchAPI(new Date(action.date));
		default:
			return state;
	}
};

const MainReservations = () => {
	const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

	return (
		<div className='flex flex-col justify-center items-center p-4 gap-2 md:gap-6 text-center md:mt-6'>
			<h1 className='font-karla text-black text-4xl'>Find a table for any occasion</h1>
			<div className='flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap md:gap-12'>
				<img className='shadow-xl rounded-xl' src='https://placehold.co/440x308' alt='main-res-image-1' />
				<img className='shadow-xl rounded-xl' src='https://placehold.co/440x308' alt='main-res-image-2' />
				<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
			</div>
		</div>
	);
};

export default MainReservations;

/* 			<div className='main-signin'>
				<div className='main-signin-title'>
					<div className='main-signin-title-title'>Sign In to collect points</div>
				</div>
				<div className='main-signin-form'>
					<div className='main-signin-fn'>First Name Input Area</div>
					<div className='main-signin-ln'>Last Name Input Area</div>
					<div className='main-signin-pn'>Phone Number Input Area</div>
					<div className='main-signin-email'>Email Input Area</div>
					<div className='main-signin-password'>Password Input Area</div>
				</div>
			</div>
			<button className='main-signin-button'>Proceed to payment</button> */
