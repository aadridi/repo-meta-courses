import le_logo from '../assets/le_logo.svg';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
	return (
		<>
			<nav className='nav-container'>
				<img src={le_logo} className='logo' alt='Little Lemon Logo' />
				<ul className='nav-items-container'>
					<li className='nav-links'>
						<Link to='/homepage'>Home</Link>
					</li>
					<li className='nav-links'>
						<ScrollLink to='about-section' smooth={true} duration={500} className='scroll-link'>
							About
						</ScrollLink>
					</li>
					<li className='nav-links'>
						<Link to='/menu'>Menu</Link>
					</li>
					<li className='nav-links'>
						<Link to='/reservations'>Reservations</Link>
					</li>
					<li className='nav-links'>
						<Link to='/orderonline'>Order Online</Link>
					</li>
					<li className='nav-links'>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
