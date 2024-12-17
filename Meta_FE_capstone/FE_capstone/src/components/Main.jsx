import restauranfood from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<>
			<main className='main-container'>
				<div className='main-content'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<Link to='/reservations'>
						<button className='scroll-link'>Reserve a Table</button>
					</Link>
				</div>
				<div className='main-picture'>
					<img src={restauranfood} className='food-image' alt='Food Image' />
				</div>
			</main>
		</>
	);
}

export default Main;
