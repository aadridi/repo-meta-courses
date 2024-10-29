import scooter from '../assets/scooter_icon_black.png';

function Card(props) {
	const card_info = props.card;

	return (
		<div className={card_info.classcard}>
			<img className='card-image' src={card_info.imagesrc} alt={card_info.classcard} />
			<div className='card-title-title'>
				<h3 className='card-title'>{card_info.cardtitle}</h3>
				<div className='card-price'>{card_info.cardprice}</div>
			</div>
			<p className='card-description'>{card_info.carddescription}</p>
			<div className='card-footer'>
				<p>Order a delivery</p>
				<img className='delivery-icon' src={scooter} alt='Delivery icon' />
			</div>
		</div>
	);
}

export default Card;
