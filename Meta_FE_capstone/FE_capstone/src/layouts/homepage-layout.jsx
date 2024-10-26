import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Card from '../components/Card';

function Homepage() {
	return (
		<>
			<Header />
			<Nav />
			<Main />
			<Highlights />
			<Testimonials />
			<About />
			<Footer />
			<Card />
		</>
	);
}

export default Homepage;
