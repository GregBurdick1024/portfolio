import React from 'react';
import App from '../components/App';
import { headData } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Page = () => <App />;

export default Page;

export const Head = () => {
	const { title, lang, description } = headData;

	return (
		<>
			<meta charSet='utf-8' />
			<title>{title}</title>
			<html lang={lang || 'en'} />
			<meta name='description' content={description} />
		</>
	);
};
