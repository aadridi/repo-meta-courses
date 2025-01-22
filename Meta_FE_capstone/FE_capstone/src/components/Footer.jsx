import restauranfood from '../assets/restauranfood.jpg';

function Footer() {
	return (
		<>
			<section className='hidden'>
				<img src={restauranfood} className='footer-picture' alt='Food Image' />
				<div className='footer-navigation'>
					<h2>Doormat Navigation</h2>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Menu</li>
						<li>Reservations</li>
						<li>Order Online</li>
						<li>Login</li>
					</ul>
				</div>
				<div className='footer-contact'>
					<h2>Contact</h2>
					<ul>
						<li>Adress</li>
						<li>Phone Number</li>
						<li>Email</li>
					</ul>
				</div>
				<div className='footer-socialmedialinks'>
					<h2>Social Media Links</h2>
					<ul>
						<li>Adress</li>
						<li>Phone Number</li>
						<li>Email</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Footer;
