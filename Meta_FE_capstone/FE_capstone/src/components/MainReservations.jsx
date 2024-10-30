import BookingForm from './BookingForm';

const MainReservations = () => {
	return (
		<div className='main-res-container'>
			<div className='main-res-title'>
				<h1 className='main-res-title-title'>Find a table for any occasion</h1>
			</div>
			<div className='main-res-images'>
				<img className='main-res-image-1' src='https://placehold.co/440x308' alt='main-res-image-1' />
				<img className='main-res-image-2' src='https://placehold.co/440x308' alt='main-res-image-2' />
			</div>
			<BookingForm />
			<div className='main-signin'>
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
			<button className='main-signin-button'>Proceed to payment</button>
		</div>
	);
};

export default MainReservations;
