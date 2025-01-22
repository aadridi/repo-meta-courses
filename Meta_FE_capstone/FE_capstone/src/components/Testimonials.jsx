/*import restauranfood from '../assets/restauranfood.jpg';*/

function Testimonials() {
	return (
		<>
			<section className='flex flex-col justify-center items-center p-4 gap-2 text-center md:mt-6'>
				<h2 className='font-karla text-black text-4xl'>Testimonials</h2>
				<div className='flex flex-col justify-center items-center p-4 gap-4 md:flex-row md:flex-wrap md:gap-12'>
					<div className='flex flex-col justify-center items-center'>
						<div>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
						</div>
						<img src='https://placehold.co/100x100' alt='Picture of the reviewer'></img>
						<p className='font-markazi mt-2'>John</p>
						<p className='font-markazi italic text-sm'>"Review Text"</p>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
						</div>
						<img src='https://placehold.co/100x100' alt='Picture of the reviewer'></img>
						<p className='font-markazi mt-2'>Francesca</p>
						<p className='font-markazi italic text-sm'>"Review Text"</p>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
						</div>
						<img src='https://placehold.co/100x100' alt='Picture of the reviewer'></img>
						<p className='font-markazi mt-2'>Maurice</p>
						<p className='font-markazi italic text-sm'>"Review Text"</p>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
							<span className='material-symbols-outlined text-yellow-400'>star</span>
						</div>
						<img src='https://placehold.co/100x100' alt='Picture of the reviewer'></img>
						<p className='font-markazi mt-2'>Michelle</p>
						<p className='font-markazi italic text-sm'>"Review Text"</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Testimonials;
