import OK_Logo from '../assets/OK_logo.svg';

const ConfirmedBooking = () => {
	return (
		<>
			<fieldset>
				<legend>Booking Confirmation</legend>
				<img src={OK_Logo} alt='confirmation_logo' />
				<p>Your reservation has been confirmed !</p>
			</fieldset>
		</>
	);
};

export default ConfirmedBooking;
