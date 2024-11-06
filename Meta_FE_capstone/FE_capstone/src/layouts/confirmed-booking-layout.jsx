import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ConfirmedBooking from '../components/ConfirmedBooking';

function ConfirmedBookingLayout() {
	return (
		<>
			<Header />
			<Nav />
			<Main />
			<ConfirmedBooking />
			<Footer />
		</>
	);
}

export default ConfirmedBookingLayout;
