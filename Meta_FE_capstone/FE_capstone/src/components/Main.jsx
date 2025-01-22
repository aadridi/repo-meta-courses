import restauranfood from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<>
			<main
				className='bg-primary_green flex flex-col justify-center items-center md:flex-row
			md:flex-wrap md:justify-start md:p-16 md:relative p-4 gap-3 text-center'
			>
				<h1 className='font-karla text-primary_yellow text-4xl md:w-full md:text-left'>Little Lemon</h1>
				<h2 className='font-karla text-white text-2xl -mt-4 md:w-full md:text-left'>Chicago</h2>
				<div className='md:w-full'>
					<p className='font-markazi text-white md:max-w-[300px] md:text-left'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
				</div>
				<Link to='/reservations'>
					<button className='scroll-link bg-primary_yellow font-markazi p-4 font-bold cursor-pointer rounded-2xl md:mt-4'>Reserve a Table</button>
				</Link>
				<img className='w-3/5 my-3 rounded-2xl
				md:w-1/5 md:max-h-[85%%] md:max-w-[300px] md:absolute md:top-[20px] md:right-20' src={restauranfood} alt='Food Image' />
			</main>
		</>
	);
}

export default Main;
