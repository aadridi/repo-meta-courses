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
			<div className='md:flex md:flex-col md:justify-start'>
				<article
					className='flex flex-col justify-center items-center p-4 gap-2 text-center
				md:justify-start md:flex-row md:p-16 md:flex-wrap md:gap-12'
				>
					<h1 className='font-karla text-black text-4xl'>This weeks specials! </h1>
					<button className='bg-primary_yellow font-markazi p-4 font-bold cursor-pointer rounded-2xl'>Online Menu</button>
				</article>
				<article
					className='flex flex-col justify-center items-center p-4 gap-4
				md:justify-center md:flex-row md:flex-wrap md:gap-8 md:items-start md:p-0 md:mx-auto'
				>
					{cards_info.map((card) => (
						<Card key={card.id} card={card} />
					))}
				</article>
			</div>
		</>
	);
}

export default Highlights;
