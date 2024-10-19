import restauranfood from '../assets/restauranfood.jpg';

function Main() {
	return (
		<>
			<main className='main-container'>
				<div className='first-main-blank'></div>
				<div className='main-content'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<button>Reserve a Table</button>
				</div>
				<div className='main-picture'>
					<img src={restauranfood} className='food-image' alt='Food Image' />
				</div>
				<div className='second-main-blank'></div>
			</main>
		</>
	);
}

export default Main;
