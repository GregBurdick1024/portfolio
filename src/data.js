import { nanoid } from 'nanoid';

const githubURL = 'https://github.com/GregBurdick1024';

// HEAD DATA
export const headData = {
	title: 'Greg Burdick - Web Dev',
	lang: 'en',
	description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
	title: 'Hi, you have found the Porfolio of',
	name: 'Greg Burdick',
	subtitle: 'Web Developer',
	cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
	img: 'mango.jpg',
	paragraphOne:
		'I find myself at my best when I am solving problems and learning new things. From a casual curiosity in programming back in early 2018 I quickly discovered that this was the direction I wished to persue.',
	paragraphTwo:
		'At present I am looking for work as a junior developer, I have come a long way and hope that I can continue to develop and grow in this exciting industry.',
	paragraphThree:
		'When I am not spending my time writing code I love to keep fit  and keep up to date with all the developments in blockchain technology.',
	resume: 'https://www.gregburdick.online/documents/GregBurdick-CV-2020.pdf',
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: 'mma-match-app.png',
		title: 'MMA Match App',
		info: 'I love mixed martial arts and wanted an app that allowed users to compare fighters.  As the title implies this app allows users to add fighters to their favorites where they can check their stats and "match" two fighters against eachother.',
		info2: 'Tech Stack: MongoDB, NodeJS, ExpressJS, ReactJS with React-Bootstrap for styling and D3 for charts.',
		url: 'https://mma-match-app.fly.dev',
		repo: `${githubURL}/mma-match`,
	},
	{
		id: nanoid(),
		img: 'pomo-todo.png',
		title: 'Pomodoro Tasks',
		info: 'Combining two productivity apps into one this app allows users to manage their time more efficiently. Users are able to add tasks to a todo-list and plan their work schedule using the classic pomodoro method.',
		info2: 'Tech Stack: ReactJS with Material-UI for styling',
		url: 'https://pomodoro-tasks.netlify.app/',
		repo: `${githubURL}/pomodoro-tasks`,
	},
	{
		id: nanoid(),
		img: 'top-flix.png',
		title: 'Top Flixs',
		info: 'Inspired by the website Good-Reads, this app allows users to rate their favourite films and create ranked lists of films to share.',
		info2: 'Tech Stack: MySQL, NodeJS, ExpressJS, ReactJS with Tailwind for styling.',
		url: 'https://topflix.fly.dev/',
		repo: `${githubURL}/topflix`,
	},
];

// CONTACT DATA
export const contactData = {
	cta: 'Would you like to work with me? Awesome!',
	btn: "Let's Talk",
	email: 'gregrburdick@protonmail.com',
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'codepen',
			url: 'https://codepen.io/flushy85',
		},
		{
			id: nanoid(),
			name: 'github',
			url: githubURL,
		},
	],
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false,
};
