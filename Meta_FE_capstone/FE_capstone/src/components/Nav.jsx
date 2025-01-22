import le_logo from '../assets/le_logo.svg';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
	return (
		<>
			<nav className='flex flex-row flex-wrap justify-between items-center m-4 p-4'>
				<img src={le_logo} className='' alt='Little Lemon Logo' />
				<ul className='hidden md:flex flex-wrap justify-between items-center gap-4 font-bold font-markazi text-primary_green'>
					<li className=''>
						<Link to='/'>Home</Link>
					</li>
					<li className=''>
						<ScrollLink to='about-section' smooth={true} duration={500} className='scroll-link'>
							About
						</ScrollLink>
					</li>
					<li className=''>
						<Link to='/menu'>Menu</Link>
					</li>
					<li className=''>
						<Link to='/reservations'>Reservations</Link>
					</li>
					<li className=''>
						<Link to='/orderonline'>Order Online</Link>
					</li>
					<li className=''>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
				<span className='material-symbols-outlined text-primary_green md:hidden'>menu</span>
			</nav>
		</>
	);
}

export default Nav;
