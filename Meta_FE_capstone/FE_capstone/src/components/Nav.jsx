import le_logo from '../assets/le_logo.svg';

function Nav() {
	return (
		<>
			<nav>
				<img src={le_logo} className='logo react' alt='Little Lemon Logo' />
				<ul>
					<li>
						<a href='' target='_blank'>
							Home
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							About
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							Menu
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							Reservations
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							Order Online
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							Login
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
