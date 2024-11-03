import React from 'react';
import { useFormik } from 'formik';

const BookingForm = (props) => {
	const formik = useFormik({
		initialValues: {
			resDate: '',
			resTime: '17:00',
			guests: '1',
			occasion: 'Nothing special',
			seatingOption: 'Standard',
		},
		onSubmit: (values) => {
			console.log('Form submitted !');
			console.log(values);
		},
	});

	const handleDateChange = (e) => {
		formik.handleChange(e);
		props.dispatch({ type: 'UPDATE', date: e.target.value });
	};

	const availableTimes = props.availableTimes;

	const listOfAvailableTimes = availableTimes.map((item) => <option key={item}>{item}</option>);

	return (
		<fieldset>
			<legend>Configure your booking reservation</legend>
			<form onSubmit={formik.handleSubmit} className='main-res-options'>
				<div className='main-res-date'>
					<label htmlFor='res-date'>Choose Date :</label>
					<input type='date' id='res-date' name='resDate' onChange={handleDateChange} value={formik.values.resDate} />
				</div>
				<div className='main-res-time'>
					<label htmlFor='res-time'>Choose Time :</label>
					<select id='res-time ' name='resTime' onChange={formik.handleChange} value={formik.values.resTime}>
						{listOfAvailableTimes}
					</select>
				</div>
				<div className='main-res-number-of-diners'>
					<label htmlFor='guests'>Number of Guests :</label>
					<input type='number' placeholder='1' min='1' max='10' id='guests' name='guests' onChange={formik.handleChange} value={formik.values.guests} />
				</div>
				<div className='main-res-occasion'>
					<label htmlFor='occasion'>Occasion :</label>
					<select id='occasion' name='occasion' onChange={formik.handleChange} value={formik.values.occasion}>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Nothing special</option>
					</select>
				</div>
				<div className='main-res-options-seating'>
					<div className='main-res-options-title'>Seating options :</div>
					<div className='main-res-options-1'>
						<label htmlFor='main-res-options-1'>Standard</label>
						<input type='radio' id='main-res-options-1' value='Standard' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Standard'} />
					</div>
					<div className='main-res-options-2'>
						<label htmlFor='main-res-options-2'>Outside</label>
						<input type='radio' id='main-res-options-2' value='Outside' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Outside'} />
					</div>
				</div>
				<button className='main-res-button' type='submit' value='Make Your reservation'>
					Make your reservation
				</button>
			</form>
		</fieldset>
	);
};

export default BookingForm;
