import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import NewStudent from './components/NewStudent';

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		(async () => {
			const res = fetch('/api');
			const data = await (await res).json();
			setData(data);
		})();
	}, []);
	console.log(data);

	return (
		<div>
			<Header />
			{!data ? 'Loading...' : data.message}
			<Main />
			<NewStudent />
		</div>
	);
}

export default App;
