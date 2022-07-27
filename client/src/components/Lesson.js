import React from 'react';
import CheckInForm from './CheckInForm';

export default function Lesson(props) {
	// const [data, setData] = React.useState(null);

	// React.useEffect(() => {
	// 	console.log('Fetched API');
	// 	fetch('/api')
	// 		.then(res => res.json())
	// 		.then(data => setData(data));
	// }, []);
	// console.log(data);
	let repertoire;
	let concepts;
	function mapItems() {
		if (props) {
			repertoire = props.map((item, i) => {
				return <li key={i}>{item.repertoire}</li>;
			});
			concepts = props.map((item, i) => {
				return <li key={i}>{item.concepts}</li>;
			});
		}
	}
	mapItems();
	return (
		<div className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'>
			<input type='checkbox' />
			<div className='collapse-title text-xl font-medium flex gap-4'>
				<div className='avatar'>
					<div className='w-12 rounded'>
						<img
							src='https://api.lorem.space/image/face?hash=92048'
							alt='student'
						/>
					</div>
				</div>
				<div className='flex flex-col text-lg'>
					<span className='font-bold'>{props.student}</span>
					<span>{props.time}</span>
				</div>
			</div>
			<div className='collapse-content flex flex-col gap-2'>
				<div className='flex flex-col items-center'>
					<CheckInForm />
				</div>
				<div>
					<h6 className='font-bold'>Music</h6>
					<ul className='p-2 flex flex-col'>{repertoire}</ul>
				</div>
				<div>
					<h6 className='font-bold'>Concepts / Assignments</h6>
					<ul className='menu menu-compact bg-base-100 p-2 rounded-box'>
						{concepts}
					</ul>
				</div>
				<div>
					<h6 className='font-bold'>Links</h6>
					<ul className='menu menu-compact bg-base-100 p-2 rounded-box'>
						<li>Google Drive</li>
						<li>Video Link</li>
						<li>Music Link</li>
					</ul>
				</div>
				<div className='flex justify-between'>
					<a href='#' className='btn btn-secondary btn-outline'>
						Profile
					</a>
					<a href='#' className='btn btn-accent btn-outline'>
						Dismiss
					</a>
				</div>
			</div>
		</div>
	);
}
