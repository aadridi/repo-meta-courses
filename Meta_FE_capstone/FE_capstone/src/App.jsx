import './App.css';
import Homepage from './layouts/homepage-layout';
import OrderOnline from './layouts/orderonline-layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/homepage' element={<Homepage />} />
				<Route path='/orderonline' element={<OrderOnline />} />
			</Routes>
		</Router>
	);
}

export default App;
