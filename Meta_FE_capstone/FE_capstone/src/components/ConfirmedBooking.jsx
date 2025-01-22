import OK_Logo from '../assets/OK_logo.svg';

const ConfirmedBooking = () => {
	return (
		<>
			<fieldset className='flex flex-col justify-center items-center p-4 gap-4 text-center mt-10'>
				<legend className='font-markazi text-3xl'>Booking Confirmation</legend>
				<img src={OK_Logo} alt='confirmation_logo' />
				<p className='font-markazi text-xl'>Your reservation has been confirmed !</p>
			</fieldset>
		</>
	);
};

export default ConfirmedBooking;
