import le_logo from '../assets/le_logo.svg';

function Nav() {
	return (
		<>
			<nav className='nav-container'>
				<div className='nav-blank'></div>
				<img src={le_logo} className='logo' alt='Little Lemon Logo' />
				<ul className='nav-items-container'>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							Home
						</a>
					</li>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							About
						</a>
					</li>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							Menu
						</a>
					</li>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							Reservations
						</a>
					</li>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							Order Online
						</a>
					</li>
					<li className='nav-links'>
						<a href='#' target='_blank'>
							Login
						</a>
					</li>
				</ul>
				<div className='second-nav-blank'></div>
			</nav>
		</>
	);
}

export default Nav;
