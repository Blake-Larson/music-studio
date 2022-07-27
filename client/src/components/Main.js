import data from '../data';
import Lesson from './Lesson';

export default function Main() {
	const lesson = data.map(item => {
		return <Lesson key={item.id} {...item} />;
	});

	return <main>{lesson}</main>;
}
