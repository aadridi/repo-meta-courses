import restauranfood from '../assets/restauranfood.jpg';

function About() {
	return (
		<>
			<section
				className='bg-primary_green flex flex-col justify-center items-center
			md:flex-wrap md:p-16 md:mt-6 p-4 gap-3 text-center'
			>
				<h1 className='font-karla text-primary_yellow text-4xl md:w-full md:text-center md:text-6xl'>Little Lemon</h1>
				<h2 className='font-karla text-white text-2xl -mt-4 md:w-full md:text-center md:text-4xl'>Chicago</h2>
				<div className='md:w-full'>
					<p className='font-markazi text-white text-center text-sm p-4 md:text-left md:text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
				</div>
			</section>
		</>
	);
}

export default About;
