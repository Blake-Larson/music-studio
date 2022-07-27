import React from 'react';

export default function NewStudent() {
	const [formData, setFormData] = React.useState({
		name: '',
		age: '',
	});

	function handleChange(event) {
		const { name, value, type, checked } = event.target;

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	}

	const handleSubmit = async event => {
		event.preventDefault();
		console.log(formData);

		try {
			const response = await fetch('newStudent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='m-3 flex flex-col gap-3 items-center'
		>
			<input
				className='input input-bordered w-full max-w-xs'
				type='text'
				placeholder='Student Name'
				name='name'
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				className='input input-bordered w-full max-w-xs'
				type='number'
				placeholder='Age'
				name='age'
				value={formData.age}
				onChange={handleChange}
			/>
			<button className='btn btn-primary max-w-xs'>Submit</button>
		</form>
	);
}
