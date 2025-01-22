import scooter from '../assets/scooter_icon_black.png';

function Card(props) {
	const card_info = props.card;

	return (
		<div className='flex flex-col items-center gap-4 w-3/4 bg-slate-200 border-r-1 border-l-1 border-slate-400 rounded-xl w-2/3 md:w-1/4 md:max-w-[250px] md:w-[300px]'>
			<img
				className='w-full border-black border-t-2 border-r-2 border-l-2 border-slate-400 rounded-t-xl opacity-50 hover:opacity-100
				md:h-[180px]'
				src={card_info.imagesrc}
				alt={card_info.classcard}
			/>
			<div className='flex flex-row justify-between items-center w-full px-4'>
				<h3 className='font-bold font-karla text-xl md:text-2xl'>{card_info.cardtitle}</h3>
				<div className='font-bold font-markazi text-lg text-secondary_red'>{card_info.cardprice}</div>
			</div>
			<p className='font-markazi px-4 text-xs md:text-sm md:flex-grow md:h-[150px]'>{card_info.carddescription}</p>
			<div className='flex flex-row items-center justify-between w-full px-4 mb-2'>
				<p className='font-markazi font-bold text-sm'>Order a delivery</p>
				<img className='w-8' src={scooter} alt='Delivery icon' />
			</div>
		</div>
	);
}

export default Card;
