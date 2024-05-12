function DessertsList(props) {
	// Implement the component here.
	let array_desserts = props.data.filter((desserts) => desserts.calories < 500);
	let array_desserts_2 = array_desserts.sort((a, b) => (a.calories > b.calories ? 1 : -1));
	const list_desserts = array_desserts_2.map((desserts) => {
		return (
			<li>
				{desserts.name} - {desserts.calories} cal
			</li>
		);
	});

	return (
		<div>
			<h1>Desserts</h1>
			<ul>{list_desserts}</ul>
		</div>
	);
}

export default DessertsList;
