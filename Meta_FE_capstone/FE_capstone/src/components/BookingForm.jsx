const BookingForm = () => {
	return (
		<form className='main-res-options'>
            <div className="main-res-blank"></div>
			<div className='main-res-date'>
				<label htmlFor='res-date'>Choose date</label>
				<input type='date' id='res-date' />
			</div>
			<div className='main-res-time'>
				<label htmlFor='res-time'>Choose time</label>
				<select id='res-time '>
					<option>17:00</option>
					<option>18:00</option>
					<option>19:00</option>
					<option>20:00</option>
					<option>21:00</option>
					<option>22:00</option>
				</select>
			</div>
			<div className='main-res-number-of-diners'>
				<label htmlFor='guests'>Number of guests</label>
				<input type='number' placeholder='1' min='1' max='10' id='guests' />
			</div>
			<div className='main-res-occasion'>
				<label htmlFor='occasion'>Occasion</label>
				<select id='occasion'>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
			</div>
			<div className='main-res-options-seating'>
				<p>Seating options</p>
				<div className='main-res-options-1'>
					<label htmlFor='main-res-options-1'>Standard</label>
					<input type='checkbox' id='main-res-options-1' value='Standard' />
				</div>
				<div className='main-res-options-2'>
					<label htmlFor='main-res-options-2'>Outside</label>
					<input type='checkbox' id='main-res-options-2' value='Outside' />
				</div>
			</div>
			<input className='main-res-button' type='submit' value='Make Your reservation' />
		</form>
	);
};

export default BookingForm;
