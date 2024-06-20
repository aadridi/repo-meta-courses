import Button from './components/Button';
import Heading from './components/Heading';

function App() {
	return (
		<>
			<h1 className='display-3'>Display 1</h1>
			<br />
			<Button>My Button</Button>
			<br />
			<Heading title={'Titre'} />
		</>
	);
}

export default App;
