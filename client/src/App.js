import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch('/api')
			.then(res => res.json())
			.then(data => setData(data));
	}, []);

	return (
		<div>
			<Header />
			{!data ? 'Loading...' : data.message}
			<Main />
		</div>
	);
}

export default App;
