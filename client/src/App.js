import React from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';
import NewStudent from './components/NewStudent';
import NewUser from './components/NewUser';

export default function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		console.log('Effect Ran');
		async function getData() {
			const res = await fetch('/api');
			const data = await res.json();
			setData(data);
		}
		getData();
	}, []);
	console.log(data);

	if (data) {
		return (
			<div>
				<Header />
				<Main data={data} />
				<NewUser />
				<NewStudent teacherId={data._id} />
			</div>
		);
	} else {
		return (
			<div>
				<Header />
				<Loading />
			</div>
		);
	}
}
