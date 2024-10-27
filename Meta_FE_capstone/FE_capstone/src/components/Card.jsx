import greek from '../assets/greek salad.jpg';

const Card = () => {
	return (
		<div className='first-card'>
			<img className='card-image' src={greek} alt='first-card-image' />
			<div className='card-title-title'>
				<h3 className='card-title'>Greek salad</h3>
				<div className='card-price'>$12.99</div>
			</div>
			<p className='card-description'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
			<div className='card-footer'>Order a delivery + Icon</div>
		</div>
	);
};

export default Card;
