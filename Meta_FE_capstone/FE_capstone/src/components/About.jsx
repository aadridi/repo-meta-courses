import restauranfood from '../assets/restauranfood.jpg';

function About() {
	return (
		<>
			<section id='about-section' className='about-container'>
				<div className='about-content'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						<b>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</b>
					</p>
					<p>
						<b>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</b>
					</p>
				</div>
				<div className='about-pictures'>
					<img src={restauranfood} className='food-image-1' alt='Food Image' />
					<img src={restauranfood} className='food-image-2' alt='Food Image' />
				</div>
			</section>
		</>
	);
}

export default About;
