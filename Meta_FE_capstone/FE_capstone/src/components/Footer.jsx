import restauranfood from '../assets/restauranfood.jpg';

function Footer() {
	return (
		<>
			<section
				className='flex flex-col justify-center items-center p-4 gap-4 text-center mt-6
			md:flex-row md:flex-wrap md:gap-6 md:justify-start'
			>
				<img src='https://placehold.co/80x120' className='hidden md:flex w-1/5 rounded-xl shadow-lg md:ml-16' alt='Food Image' />
				<div className='md:flex md:flex-row gap-4 flex flex-col justify-center items-center md:flex-grow md:items-start'>
					<div className='flex flex-col justify-center items-center md:items-start'>
						<h2 className='font-markazi font-bold text-lg text-primary_green'>Doormat Navigation</h2>
						<ul className='font-markazi md:text-left md:text-sm'>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservations</li>
							<li>Order Online</li>
							<li>Login</li>
						</ul>
					</div>
					<div className='border-2 border-primary_green opacity-70 w-4/5 md:w-1 md:h-[100px]'></div>
					<div className='flex flex-col justify-center items-center md:items-start'>
						<h2 className='font-markazi font-bold text-lg text-primary_green'>Contact</h2>
						<ul className='font-markazi md:text-left md:text-sm'>
							<li>Adress</li>
							<li>Phone Number</li>
							<li>Email</li>
						</ul>
					</div>
					<div className='border-2 border-primary_green opacity-70 w-4/5 md:w-1 md:h-[100px]'></div>
					<div className='flex flex-col justify-center items-center md:items-start'>
						<h2 className='font-markazi font-bold text-lg text-primary_green'>Social Media Links</h2>
						<ul className='font-markazi md:text-left md:text-sm'>
							<li>Adress</li>
							<li>Phone Number</li>
							<li>Email</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
