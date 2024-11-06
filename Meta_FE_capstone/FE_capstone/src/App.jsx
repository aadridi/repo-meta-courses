import './App.css';
import Homepage from './layouts/homepage-layout';
import ConfirmedBookingLayout from './layouts/confirmed-booking-layout';
import Reservations from './layouts/reservations-layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/reservations' element={<Reservations />} />
				<Route path='/confirmed-booking' element={<ConfirmedBookingLayout />} />
			</Routes>
		</Router>
	);
}

export default App;
