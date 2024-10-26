import React from 'react';

const Card = () => {
	return (
		<div className='highlights-cards'>
			<div className='group-cards'>
				<div className='first-card'>
					<img className='card-image' src='https://placehold.co/330x185' alt='first-card-image' />
					<div className='card-title-title'>
						<h3 className='card-title'>Greek salad</h3>
						<div className='card-price'>$12.99</div>
					</div>
					<p className='card-description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<div className='card-footer'>Order a delivery + Icon</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
