import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Emanuel Peire',
	initials: 'EP',
	location: 'Rosario, Argentina',
	locationLink: 'https://www.google.com/maps/place/Rosario',
	about:
		'Frontend Engineer, OSS Developer, LLMs technical researcher and DX Architect. Always influenced by design.',
	summary: `As a Front-end Engineer, I specialize in web development and have a background in Machine Learning research.
	My passion lies in crafting innovative solutions that blend technology and design with a focus on social impact, aiming to make a meaningful difference in people's lives.
	I am dedicated to utilizing the most recent and advanced frontend technologies to improve user accessibility and maximize web application performance.
	My goal is to provide a smooth and effective user experience.`,
	avatar: '/images/avatar.png',
	personalWebsiteUrl: 'https://emapeire.xyz',
	contact: {
		email: 'me@emapeire.xyz',
		tel: '+5493417190449',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/emapeire',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/emanuelpeire',
				icon: LinkedInIcon
			},
			{
				name: 'X',
				url: 'https://x.com/emapeire',
				icon: XIcon
			}
		]
	},
	education: [
		{
			school: 'Universidad Nacional de Rosario',
			degree: "Bachelor's Degree in Industrial Design",
			start: 'Feb, 2019',
			end: 'Dec, 2021'
		}
	],
	work: [
		{
			company: 'Frontend Lab',
			link: 'https://github.com/thefrontendlab',
			badges: ['Hybrid'],
			title: 'Software Developer and Technical Researcher',
			start: 'Jul, 2021',
			end: 'Present',
			description: `Developing and researching new technologies and tools for the frontend community.`
		},
		{
			company: 'Next.js Argentina',
			link: 'https://github.com/nextjsargentina',
			badges: ['Hybrid'],
			title: 'Developer Experience Architect',
			start: 'Aug, 2023',
			end: 'Present',
			description: `Building a non-profit open community of Next.js Argentina.`
		},
		{
			company: 'Smat.io',
			link: 'https://smat.io',
			badges: ['Remote'],
			title: 'QA Tester and Frontend Developer',
			start: 'Aug, 2022',
			end: 'Aug, 2023',
			description: `Spearheaded comprehensive QA testing processes, employing tools like Jest, and Playwright to ensure seamless functionality and performance of web applications.
			Collaborated with cross-functional teams to implement Test-Driven Development (TDD) methodologies, optimizing code quality and reducing bugs.
			Contributed to the frontend development of user-centric interfaces using React.js, enhancing user experiences through intuitive designs and responsive layouts.`
		},
		{
			company: 'Maker DAO',
			link: 'https://makerdao.com',
			badges: ['Remote'],
			title: 'Technical Writer and Translator',
			start: 'Feb, 2022',
			end: 'Aug, 2022',
			description: `Authored and translated technical documentation, including whitepapers,
			guides, and tutorials, to facilitate user understanding of blockchain and DeFi concepts.`
		},
		{
			company: 'El Chaperón',
			badges: ['On-site'],
			title: 'Web Designer and Community Manager',
			start: 'Jan, 2016',
			end: 'Jan, 2019',
			description: `Responsive website development and design in WordPress.
			Online tourist services of the city of Rosario.
			Endorsed by the Rosario Hotel Association and Tourist Entity (ETUR).`
		}
	],
	skills: [
		'Android Studio',
		'Astro',
		'CSS',
		'Express',
		'Figma',
		'Git (Bash)',
		'GNU/Linux',
		'HTML',
		'JavaScript',
		'Jest',
		'ZSH',
		'MongoDB',
		'Next.js',
		'Node.js',
		'Notion',
		'Playwright',
		'Postman',
		'Prisma',
		'Python',
		'React Native',
		'React.js',
		'RESTful APIs',
		'SQL (MySQL, PostgreSQL)',
		'Supabase',
		'TypeScript',
		'Vercel',
		'Vite',
		'Vitest',
		'WordPress',
		'Xcode'
	],
	projects: [
		{
			title: 'Cohere Chat',
			techStack: ['AI', 'API', 'Chat-bot', 'JavaScript', 'Node.js', 'Open Source', 'Side Project'],
			description: 'A chatbot that uses the Cohere API to generate responses to user input.',
			link: {
				label: 'github.com/emapeire/cohere-chat',
				href: 'https://github.com/emapeire/cohere-chat'
			}
		},
		{
			title: 'Eloquent JavaScript Chat',
			techStack: [
				'GPT',
				'Llama2',
				'Next.js',
				'Open Source',
				'OpenAI',
				'React',
				'Shadcn/ui',
				'Side Project',
				'Tailwind CSS',
				'TypeScript'
			],
			description:
				'In this app you will be able to interact with an intelligent llama that will answer your questions about JavaScript.',
			link: {
				label: 'github.com/emapeire/eloquent-js-chat',
				href: 'https://github.com/emapeire/eloquent-js-chat'
			}
		},
		{
			title: 'Google Translate Clone',
			techStack: [
				'AI',
				'API',
				'Bootstrap',
				'CSS',
				'GPT',
				'HTML',
				'JavaScript',
				'Open Source',
				'React',
				'Side Project',
				'TypeScript',
				'Vite',
				'Vitest'
			],
			description:
				'This is a simple API that uses the OpenAI GPT-4-vision-preview model to generate code from images.',
			link: {
				label: 'github.com/emapeire/google-translate-clone',
				href: 'https://github.com/emapeire/google-translate-clone'
			}
		},
		{
			title: 'Image 2 Code',
			techStack: [
				'GPT',
				'Next.js',
				'Open Source',
				'OpenAI',
				'React',
				'Shadcn/ui',
				'Side Project',
				'Tailwind CSS',
				'TypeScript'
			],
			description:
				'This is a tool that converts images to code. It uses AI to generate code from images. It is based on the GPT-4-vision-preview model.',
			link: {
				label: 'github.com/emapeire/image-to-code',
				href: 'https://github.com/emapeire/image-to-code'
			}
		},
		{
			title: 'React GPT',
			techStack: ['GPT', 'Open Source', 'OpenAI', 'React', 'Side Project'],
			description: 'An AI-driven web engineering expert for React community.',
			link: {
				label: 'chat.openai.com/g/g-HNcbE0A5n-reactgpt',
				href: 'https://chat.openai.com/g/g-HNcbE0A5n-reactgpt'
			}
		},
		{
			title: 'Screen Recorder',
			techStack: ['API', 'CSS', 'HTML', 'JavaScript', 'Open Source', 'Side Project'],
			description: 'Native screen recorder made with MediaRecorder web-api',
			link: {
				label: 'github.com/emapeire/screen-recorder',
				href: 'https://github.com/emapeire/screen-recorder'
			}
		},
		{
			title: 'Spotify Clone',
			techStack: [
				'Astro',
				'Bun',
				'JavaScript',
				'Open Source',
				'React',
				'Side Project',
				'Svelte',
				'Tailwind CSS',
				'TypeScript'
			],
			description: 'An open-source Spotify clone built with Svelte and Astro.',
			link: {
				label: 'github.com/emapeire/spotify-clone',
				href: 'https://github.com/emapeire/spotify-clone'
			}
		},
		{
			title: 'SWC Router',
			techStack: [
				'CSS',
				'HTML',
				'JavaScript',
				'Open Source',
				'React',
				'SWC',
				'Side Project',
				'Vite'
			],
			description:
				'Simple single-page applications (SPA) with ease using swc-router. This lightweight routing solution for React applications leverages the speed of SWC.',
			link: { label: 'npmjs.com/package/swc-router', href: 'https://npmjs.com/package/swc-router' }
		},
		{
			title: 'View Transitions API',
			techStack: ['API', 'Astro', 'JavaScript', 'Open Source', 'Side Project'],
			description:
				'This is a sample project that demonstrates how to use the View Transitions API with Astro.',
			link: {
				label: 'github.com/emapeire/view-transitions-api',
				href: 'https://github.com/emapeire/view-transitions-api'
			}
		},
		{
			title: 'TODO App TS',
			techStack: [
				'CSS',
				'HTML',
				'JavaScript',
				'Open Source',
				'React',
				'Side Project',
				'TypeScript',
				'Vite'
			],
			description: 'A simple todo app made with React and TypeScript.',
			link: {
				label: 'github.com/emapeire/todo-app-ts',
				href: 'https://github.com/emapeire/todo-app-ts'
			}
		}
	]
}
