import './App.css';
import Homepage from './layouts/homepage-layout';
import OrderOnline from './layouts/orderonline-layout';
import Reservations from './layouts/reservations-layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/homepage' element={<Homepage />} />
				<Route path='/reservations' element={<Reservations />} />
				<Route path='/orderonline' element={<OrderOnline />} />
			</Routes>
		</Router>
	);
}

export default App;
