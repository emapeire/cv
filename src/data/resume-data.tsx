import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Emanuel Peire',
	initials: 'EP',
	location: 'Rosario, Argentina',
	locationLink: 'https://www.google.com/maps/place/Rosario',
	about:
		'Frontend Engineer, Developer Relations and AI research enthusiast. Always influenced by design.',
	summary: `I specialize in web development. My passion lies in crafting innovative solutions that blend technology and design with a focus on social impact,
	aiming to make a meaningful difference in people's lives.
	I'm dedicated to utilizing the most recent and advanced frontend technologies to improve user accessibility and maximize web application performance.
	My goal is to provide a smooth and effective user experience.`,
	avatar: '/images/avatar.png',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://emapeire.xyz'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://link.emapeire.xyz'
		},
		email: {
			name: 'Email',
			at: 'me@emapeire.xyz'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+5493417190449'
		},
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
				name: 'X (Twitter)',
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
			company: 'BaseHub',
			link: 'https://basehub.com',
			badges: ['Remote'],
			title: 'Developer Relations',
			start: 'Mar, 2024',
			end: 'Apr, 2024',
			description: `Working on the product developer team to help developers build better apps with BaseHub CMS and its native AI.`
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
			title: 'BaseHub - Next.js blog',
			techStack: [
				'API',
				'BaseHub',
				'CMS',
				'CSS',
				'Next.js',
				'PNPM',
				'React',
				'Talwind CSS',
				'TypeScript',
				'Vercel'
			],
			description:
				'A starter guide template blog made with Next.js and BaseHub CMS. It uses the BaseHub API to fetch and display posts.',
			link: {
				label: 'github.com/basehub-ai/nextjs-blog',
				href: 'https://github.com/basehub-ai/nextjs-blog'
			}
		},
		{
			title: 'Basement Challenge',
			techStack: ['CSS', 'Next.js', 'PNPM', 'React', 'Talwind CSS', 'TypeScript', 'Zustand'],
			description: 'Basement studio stream challenge.',
			link: {
				label: 'github.com/emapeire/basement-challenge',
				href: 'https://github.com/emapeire/basement-challenge'
			}
		},
		{
			title: 'Chat With Vader',
			techStack: [
				'AI',
				'API',
				'Chat-bot',
				'GPT',
				'JavaScript',
				'Next.js',
				'OpenAI',
				'React',
				'Tailwind CSS',
				'TypeScript'
			],
			description:
				'A simple chat app that uses the OpenAI API and Vercel AI SDK to chat with Darth Vader.',
			link: {
				label: 'github.com/emapeire/chat-with-vader',
				href: 'https://github.com/emapeire/chat-with-vader'
			}
		},
		{
			title: 'Cohere Chat',
			techStack: ['AI', 'API', 'Chat-bot', 'JavaScript', 'Node.js'],
			description: 'A chatbot that uses the Cohere API to generate responses to user input.',
			link: {
				label: 'github.com/emapeire/cohere-chat',
				href: 'https://github.com/emapeire/cohere-chat'
			}
		},
		{
			title: 'Comments App',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'TypeScript', 'Vite'],
			description: 'A simple comments app made with React and Vite.',
			link: {
				label: 'github.com/emapeire/comments-react-query',
				href: 'https://github.com/emapeire/comments-react-query'
			}
		},
		{
			title: 'Crud App',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Vite'],
			description: 'A simple CRUD app made with React and Vite.',
			link: {
				label: 'github.com/emapeire/crud-react-redux',
				href: 'https://github.com/emapeire/crud-react-redux'
			}
		},
		{
			title: 'Eloquent JavaScript Chat',
			techStack: [
				'GPT',
				'Llama2',
				'Next.js',
				'OpenAI',
				'React',
				'Shadcn/ui',
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
			title: 'Google Translate UI',
			techStack: [
				'AI',
				'API',
				'Bootstrap',
				'CSS',
				'GPT',
				'HTML',
				'JavaScript',
				'React',
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
			techStack: ['GPT', 'Next.js', 'OpenAI', 'React', 'Shadcn/ui', 'Tailwind CSS', 'TypeScript'],
			description:
				'This is a tool that converts images to code. It uses AI to generate code from images. It is based on the GPT-4-vision-preview model.',
			link: {
				label: 'github.com/emapeire/image-to-code',
				href: 'https://github.com/emapeire/image-to-code'
			}
		},
		{
			title: 'JavaScript Quiz',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'TypeScript', 'Vite', 'Zustand'],
			description: 'A simple quiz app made with React and Zustand.',
			link: {
				label: 'github.com/emapeire/javascript-quiz',
				href: 'https://github.com/emapeire/javascript-quiz'
			}
		},
		{
			title: 'Mercado Libre Challenge',
			techStack: ['API', 'CSS', 'Next.js', 'PNPM', 'React', 'Talwind CSS', 'TypeScript'],
			description:
				'Challenge to create a product search app using the Mercado Libre API. Built with Next.js and TypeScript.',
			link: {
				label: 'github.com/emapeire/meli-challenge',
				href: 'https://github.com/emapeire/meli-challenge'
			}
		},
		{
			title: 'Mouse Follower',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Vite'],
			description: 'A simple mouse follower app made with React and Vite.',
			link: {
				label: 'github.com/emapeire/mouse-follower',
				href: 'https://github.com/emapeire/mouse-follower'
			}
		},
		{
			title: 'Movie Search App',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Vite'],
			description: 'A simple movie search app made with React and Vite.',
			link: {
				label: 'github.com/emapeire/movie-search-app',
				href: 'https://github.com/emapeire/react-movie-search'
			}
		},
		{
			title: 'Next.js Chat App',
			techStack: [
				'API',
				'CSS',
				'HTML',
				'JavaScript',
				'Next.js',
				'PNPM',
				'React',
				'Shadcn/ui',
				'Talwind CSS',
				'TypeScript'
			],
			description:
				'NextJS-Chat offers beginners a chat-based interface to learn Next.js and best coding practices through an AI expert.',
			link: {
				label: 'github.com/nextjsargentina/next.js-chat',
				href: 'https://github.com/nextjsargentina/next.js-chat'
			}
		},
		{
			title: 'Next.js Releases App',
			techStack: [
				'API',
				'CSS',
				'HTML',
				'JavaScript',
				'Next.js',
				'PNPM',
				'React',
				'Shadcn/ui',
				'Talwind CSS',
				'TypeScript'
			],
			description: "NextJS Releases is an App that tracks new releases on NextJS's GitHub.",
			link: {
				label: 'github.com/nextjsargentina/next.js-releases',
				href: 'https://github.com/nextjsargentina/next.js-releases'
			}
		},
		{
			title: 'React GPT',
			techStack: ['GPT', 'OpenAI', 'React'],
			description: 'An AI-driven web engineering expert for React community.',
			link: {
				label: 'chat.openai.com/g/g-HNcbE0A5n-reactgpt',
				href: 'https://chat.openai.com/g/g-HNcbE0A5n-reactgpt'
			}
		},
		{
			title: 'Screen Recorder',
			techStack: ['API', 'CSS', 'HTML', 'JavaScript'],
			description: 'Native screen recorder made with MediaRecorder web-api.',
			link: {
				label: 'github.com/emapeire/screen-recorder',
				href: 'https://github.com/emapeire/screen-recorder'
			}
		},
		{
			title: 'Shopping Cart',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Vite'],
			description: 'A simple shopping cart app made with React and Vite.',
			link: {
				label: 'github.com/emapeire/shopping-cart',
				href: 'https://github.com/emapeire/shopping-cart'
			}
		},
		{
			title: 'Space X Launches',
			techStack: ['Astro', 'JavaScript', 'TypeScript'],
			description: 'A simple app that lists all SpaceX launches. Built with Astro and TypeScript.',
			link: {
				label: 'github.com/emapeire/spacex-launches',
				href: 'https://github.com/emapeire/spacex-launches'
			}
		},
		{
			title: 'Spotify UI',
			techStack: ['Astro', 'Bun', 'JavaScript', 'React', 'Svelte', 'Tailwind CSS', 'TypeScript'],
			description: 'An open-source Spotify clone built with Svelte and Astro.',
			link: {
				label: 'github.com/emapeire/spotify-clone',
				href: 'https://github.com/emapeire/spotify-clone'
			}
		},
		{
			title: 'SWC Router',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'SWC', 'Vite'],
			description:
				'Simple single-page applications (SPA) with ease using swc-router. This lightweight routing solution for React applications leverages the speed of SWC.',
			link: { label: 'npmjs.com/package/swc-router', href: 'https://npmjs.com/package/swc-router' }
		},
		{
			title: 'View Transitions API',
			techStack: ['API', 'Astro', 'JavaScript'],
			description:
				'This is a sample project that demonstrates how to use the View Transitions API with Astro.',
			link: {
				label: 'github.com/emapeire/view-transitions-api',
				href: 'https://github.com/emapeire/view-transitions-api'
			}
		},
		{
			title: 'Tesla Landing UI',
			techStack: ['Astro', 'JavaScript', 'Tailwind CSS'],
			description: 'An open-source Tesla landing page built with Astro and Tailwind CSS.',
			link: {
				label: 'github.com/emapeire/tesla-landing',
				href: 'https://github.com/emapeire/tesla-landing'
			}
		},
		{
			title: 'Tic Tac Toe',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Vite'],
			description: 'A simple tic-tac-toe game made with React and TypeScript.',
			link: {
				label: 'github.com/emapeire/tic-tac-toe',
				href: 'https://github.com/emapeire/tic-tac-toe'
			}
		},
		{
			title: 'Todo App',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'TypeScript', 'Vite'],
			description: 'A simple todo app made with React and TypeScript.',
			link: {
				label: 'github.com/emapeire/todo-app-ts',
				href: 'https://github.com/emapeire/todo-app-ts'
			}
		},
		{
			title: 'Twitter Follow Card UI',
			techStack: ['CSS', 'HTML', 'JavaScript', 'React', 'Vite'],
			description: 'An open-source Twitter follow card built with React and Vite.',
			link: {
				label: 'github.com/emapeire/twitter-follow-card',
				href: 'https://github.com/emapeire/twitter-follow-card'
			}
		},
		{
			title: 'Twitter UI',
			techStack: ['JavaScript', 'Next.js', 'React', 'Supabase', 'Talwind CSS', 'TypeScript'],
			description: 'An open-source Twitter clone built with Next.js and Supabase.',
			link: {
				label: 'github.com/emapeire/twitter-clone',
				href: 'https://github.com/emapeire/twitter-clone'
			}
		}
	]
}
