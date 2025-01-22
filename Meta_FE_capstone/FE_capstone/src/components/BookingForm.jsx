import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

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
			guests: 1,
			occasion: 'Nothing special',
			seatingOption: 'Standard',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log('Form submitted!');
			console.log(values);
			try {
				const reservationSuccess = await submitAPI(values);
				if (reservationSuccess) {
					navigate('/confirmed-booking');
				} else {
					console.log('Error processing your reservation.');
				}
			} catch (error) {
				console.log(error);
			}
		},
	});

	const [formLoaded, setFormLoaded] = useState(false);

	useEffect(() => {
		Object.keys(formik.values).forEach((field) => {
			formik.setFieldTouched(field, true, false);
		});
		formik.validateForm();
		setFormLoaded(true);
	}, []);

	const allErrors = Object.values(formik.errors);

	const handleDateChange = (e) => {
		formik.handleChange(e);
		props.dispatch({ type: 'UPDATE', date: e.target.value });
	};

	const availableTimes = props.availableTimes;
	const listOfAvailableTimes = availableTimes.map((item) => <option key={item}>{item}</option>);

	return (
		<fieldset className='mb-4 md:w-full'>
			<legend className='font-karla text-black text-3xl'>Configure your booking reservation</legend>
			{formLoaded && allErrors.length > 0 ? <div className='bg-red-200 text-red-800 font-markazi p-2 mt-2 w-full'>{allErrors.length > 0 && allErrors.map((error, index) => <p key={index}>{error}</p>)}</div> : formLoaded && <div className='bg-yellow-100 text-yellow-800 p-2 mt-2 font-markazi w-full'>Please fill in the form.</div>}
			<form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-6 mt-4 md:flex-row md:justify-evenly md:flex-wrap md:gap-12'>
				<div className='flex flex-col justify-center items-center md:w-[45%]'>
					<label htmlFor='res-date' className='font-markazi font-semibold text-primary_green text-xl'>
						Choose Date:
					</label>
					<input className='font-markazi w-[200px] text-center p-1 border-2 border-primary_green rounded-xl mt-1 hover:bg-highlight_light' type='date' id='res-date' name='resDate' min={today} onChange={handleDateChange} onBlur={formik.handleBlur} value={formik.values.resDate} aria-label='Select date options' />
					{formik.touched.resDate && formik.errors.resDate ? <div className='font-markazi text-sm mt-2 text-red-500'>{formik.errors.resDate}</div> : null}
				</div>
				<div className='flex flex-col justify-center items-center md:w-[45%]'>
					<label className='font-markazi font-semibold text-primary_green text-xl' htmlFor='res-time'>
						Choose Time:
					</label>
					<select className='font-markazi w-[200px] text-center p-1 border-2 border-primary_green rounded-xl mt-1 hover:bg-highlight_light' id='res-time' name='resTime' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.resTime} aria-label='Select time options'>
						{listOfAvailableTimes}
					</select>
					{formik.touched.resTime && formik.errors.resTime ? <div className='font-markazi text-sm mt-2 text-red-500'>{formik.errors.resTime}</div> : null}
				</div>
				<div className='flex flex-col justify-center items-center md:w-[45%]'>
					<label className='font-markazi font-semibold text-primary_green text-xl' htmlFor='guests'>
						Number of Guests:
					</label>
					<input className='font-markazi w-[200px] text-center p-1 border-2 border-primary_green rounded-xl mt-1 hover:bg-highlight_light' type='number' placeholder='1' min='2' max='10' id='guests' name='guests' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.guests} aria-label='Select number of guests' />
					{formik.touched.guests && formik.errors.guests ? <div className='font-markazi text-sm text-red-500'>{formik.errors.guests}</div> : null}
				</div>
				<div className='flex flex-col justify-center items-center md:w-[45%]'>
					<label className='font-markazi font-semibold text-primary_green text-xl' htmlFor='occasion'>
						Occasion:
					</label>
					<select className='font-markazi w-[200px] text-center p-1 border-2 border-primary_green rounded-xl mt-1 hover:bg-highlight_light' id='occasion' name='occasion' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.occasion} aria-label='Select occasion for your venue'>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Nothing special</option>
					</select>
					{formik.touched.occasion && formik.errors.occasion ? <div className='font-markazi text-sm mt-2 text-red-500'>{formik.errors.occasion}</div> : null}
				</div>
				<div className='flex flex-col justify-center items-center md:w-[45%]'>
					<div className='font-markazi font-semibold text-primary_green text-xl'>Seating options:</div>
					<div className='flex flex-row justify-between items-center gap-2'>
						<label className='font-markazi text-sm' htmlFor=''>
							Standard
						</label>
						<input className='hover:bg-highlight_light' type='radio' id='seating-standard' value='Standard' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Standard'} aria-label='Standard seating option' />
					</div>
					<div className='flex flex-row justify-between items-center gap-4'>
						<label className='font-markazi text-sm' htmlFor=''>
							Outside
						</label>
						<input className='hover:bg-highlight_light' type='radio' id='seating-outside' value='Outside' name='seatingOption' onChange={formik.handleChange} checked={formik.values.seatingOption === 'Outside'} aria-label='Outside seating option' />
					</div>
					{formik.touched.seatingOption && formik.errors.seatingOption ? <div className='font-markazi text-sm mt-2 text-red-500'>{formik.errors.seatingOption}</div> : null}
				</div>
				<div className='md:w-[45%]'>
					<button className='bg-primary_yellow font-markazi p-4 font-bold cursor-pointer rounded-2xl md:mt-4 hover:bg-yellow-300 disabled:bg-slate-300 disabled:text-slate-100' type='submit' value='Make Your reservation' disabled={!formik.isValid || !formik.dirty}>
						Make your reservation
					</button>
				</div>
			</form>
		</fieldset>
	);
};

export default BookingForm;
