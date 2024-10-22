/*import restauranfood from '../assets/restauranfood.jpg';*/

function Highlights() {
	return (
		<>
			<div className='highlights-container'>
				<article className='highlights-title'>
					<h1 className='highlights-title-title'>This weeks specials! </h1>
					<div className='highlights-title-button-container'>
						<button className='highlights-title-button'>Online Menu</button>
					</div>
				</article>
				<article className='highlights-cards'>
					<div className='group-cards'>
						<div className='first-card'>
							<h1 className='text-card'>Card Number n°1</h1>
						</div>
						<div className='second-card'>
							<h1 className='text-card'>Card Number n°2</h1>
						</div>
						<div className='third-card'>
							<h1 className='text-card'>Card Number n°3</h1>
						</div>
					</div>
				</article>
			</div>
		</>
	);
}

export default Highlights;
