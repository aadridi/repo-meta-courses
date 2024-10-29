import Card from './Card';
import greek from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import lemon from '../assets/lemon dessert.jpg';

function Highlights() {
	const cards_info = [
		{ id: 1, classcard: 'first-card', imagesrc: greek, cardtitle: 'Greek Salad', cardprice: '$12.99', carddescription: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' },
		{ id: 2, classcard: 'second-card', imagesrc: bruchetta, cardtitle: 'Bruchetta', cardprice: '$5.99', carddescription: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
		{ id: 3, classcard: 'third-card', imagesrc: lemon, cardtitle: 'Lemon Dessert', cardprice: '$5.00', carddescription: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' },
	];

	return (
		<>
			<div className='highlights-container'>
				<article className='highlights-title'>
					<h1 className='highlights-title-title'>This weeks specials! </h1>
					<div className='highlights-title-button-container'>
						<button className='highlights-title-button'>Online Menu</button>
					</div>
				</article>
				<article className='highlights-cards'>
					<div className='group-cards'>
						{cards_info.map((card) => (
							<Card key={card.id} card={card} />
						))}
					</div>
				</article>
			</div>
		</>
	);
}

export default Highlights;
