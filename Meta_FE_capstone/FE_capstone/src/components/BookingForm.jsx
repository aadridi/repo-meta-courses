import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const BookingForm = (props) => {
	const navigate = useNavigate();

	const today = new Date().toISOString().split('T')[0];

	const validationSchema = Yup.object({
		resDate: Yup.date().min(today, 'Date has to be today or later').required('Please select a date'),
		resTime: Yup.string().required('Please select a time'),
		guests: Yup.number().min(2, 'At least two guests are required to book a table').max(10, 'Cannot exceed 10 guests').required('Please specify the number of guests'),
		occasion: Yup.string().required('Please select an occasion'),
		seatingOption: Yup.string().required('Please choose a seating option'),
	});

	const formik = useFormik({
		initialValues: {
			resDate: today,
			resTime: '17:00',
			guests: '1',
			occasion: 'Nothing special',
			seatingOption: 'Standard',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log('Form submitted!');
			console.log(values);
			submitAPI(values) === true ? navigate('/confirmed-booking') : console.log('Error processing your reservation.');
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
					<label htmlFor='res-date'>Choose Date:</label>
					<input type='date' id='res-date' name='resDate' min={today} onChange={handleDateChange} value={formik.values.resDate} aria-label='Select date options' />
					{formik.touched.resDate && formik.errors.resDate ? <div>{formik.errors.resDate}</div> : null}
				</div>
				<div className='main-res-time'>
					<label htmlFor='res-time'>Choose Time:</label>
					<select id='res-time' name='resTime' onChange={formik.handleChange} value={formik.values.resTime} aria-label='Select time options'>
						{listOfAvailableTimes}
					</select>
					{formik.touched.resTime && formik.errors.resTime ? <div>{formik.errors.resTime}</div> : null}
				</div>
				<div className='main-res-number-of-diners'>
					<label htmlFor='guests'>Number of Guests:</label>
					<input type='number' placeholder='1' min='2' max='10' id='guests' name='guests' onChange={formik.handleChange} value={formik.values.guests} aria-label='Select number of guests' />
					{formik.touched.guests && formik.errors.guests ? <div>{formik.errors.guests}</div> : null}
				</div>
				<div className='main-res-occasion'>
					<label htmlFor='occasion'>Occasion:</label>
					<select id='occasion' name='occasion' onChange={formik.handleChange} value={formik.values.occasion} aria-label='Select occasion for your venue'>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Nothing special</option>
					</select>
					{formik.touched.occasion && formik.errors.occasion ? <div>{formik.errors.occasion}</div> : null}
				</div>
				<div className='main-res-options-seating'>
					<div className='main-res-options-title'>Seating options:</div>
					<div className='main-res-options-1'>
						<label htmlFor='main-res-options-1'>Standard</label>
						<input type='radio' id='main-res-options-1' value='Standard' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Standard'} aria-label='Standard seating option' />
					</div>
					<div className='main-res-options-2'>
						<label htmlFor='main-res-options-2'>Outside</label>
						<input type='radio' id='main-res-options-2' value='Outside' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Outside'} aria-label='Outside seating option' />
					</div>
					{formik.touched.seatingOption && formik.errors.seatingOption ? <div>{formik.errors.seatingOption}</div> : null}
				</div>
				<button className='main-res-button' type='submit' value='Make Your reservation' disabled={!formik.isValid || !formik.dirty}>
					Make your reservation
				</button>
			</form>
		</fieldset>
	);
};

export default BookingForm;
