/*import { useState } from 'react';*/
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
	return (
		<>
			<Header />
			<Nav />
			<Main />
			<Highlights />
			<Testimonials />
			<About />
			<Footer />
		</>
	);
}

export default App;
