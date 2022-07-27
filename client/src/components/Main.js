import Lesson from './Lesson';

export default function Main(props) {
	const lesson = props.map((item, i) => {
		return <Lesson key={i} {...item} />;
	});
	return <main>{lesson}</main>;
}
