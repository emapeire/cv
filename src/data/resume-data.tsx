import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Emanuel Peire',
	initials: 'EP',
	location: 'Rosario, Argentina',
	locationLink: 'https://www.google.com/maps/place/Rosario',
	about:
		'Frontend Engineer, Developer Relations and AI research enthusiast. Always influenced by design.',
	summary: `Specialized in web development. My passion lies in crafting innovative solutions that blend technology and design with a focus on social impact,
	aiming to make a meaningful difference in people's lives.
	I'm dedicated to utilizing the most recent and advanced frontend technologies to improve user accessibility and maximize web application performance.
	My goal is to provide a smooth and effective user experience.`,
	avatar: '/assets/avatar.webp',
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
			at: 'hi@emapeire.xyz'
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
			degree: "Bachelor's Degree, Industrial Design",
			start: 'Feb, 2019',
			end: 'Dec, 2021',
			description: [
				'Gained a comprehensive understanding of product design and development processes.',
				'Studied core subjects such as ergonomics, materials science, and manufacturing techniques.',
				'Developed skills in 3D modeling, prototyping, and CAD software.',
				'Worked on projects that combined aesthetics, functionality, and sustainability.',
				'Engaged in collaborative projects to solve real-world design challenges.'
			]
		}
	],
	work: [
		{
			company: 'Frontend Lab',
			link: 'https://github.com/thefrontendlab',
			badges: ['Hybrid'],
			jobs: [
				{
					title: 'Frontend Developer & Technical Researcher',
					start: 'Aug, 2023',
					end: 'Present',
					description: [
						'Researched and implemented new frontend technologies and tools.',
						'Developed innovative solutions to improve the frontend community.',
						'Conducted technical research to stay ahead of industry trends.',
						'Created and maintained open-source projects.',
						'Collaborated with team members to enhance project outcomes.'
					]
				},
				{
					title: 'Technical Researcher & Content Developer',
					start: 'Jul, 2021',
					end: 'Aug, 2023',
					description: [
						'Created technical content to educate and engage the frontend community.',
						'Developed tutorials and guides on the latest frontend technologies.',
						'Managed the content strategy to align with community needs and trends.',
						'Collaborated with experts to produce high-quality, informative content.',
						'Utilized various platforms to distribute content and maximize reach.'
					]
				}
			]
		},
		{
			company: 'Next.js Argentina',
			link: 'https://github.com/nextjsargentina',
			badges: ['Hybrid'],
			jobs: [
				{
					title: 'Developer Experience Architect',
					start: 'Aug, 2023',
					end: 'Present',
					description: [
						'Built and nurtured a non-profit open community for Next.js enthusiasts.',
						'Developed resources to enhance the developer experience with Next.js.',
						'Organized community events and workshops.',
						'Provided mentorship and support to community members.',
						'Collaborated with other community leaders to expand the community reach.'
					]
				}
			]
		},
		{
			company: 'Invisible Technologies',
			link: 'https://invisible.co',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Operator & Advanced AI Trainer',
					start: 'May, 2024',
					end: 'Jun, 2024',
					description: [
						'Managed AI system operations to ensure optimal performance.',
						'Trained advanced AI models to improve system accuracy.',
						'Collaborated with cross-functional teams to develop AI solutions.',
						'Analyzed data to enhance AI training methodologies.',
						'Implemented feedback to refine AI models continuously.'
					]
				}
			]
		},
		{
			company: 'BaseHub',
			link: 'https://basehub.com',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Developer Relations',
					start: 'Mar, 2024',
					end: 'May, 2024',
					description: [
						'Assisted developers in building applications using BaseHub CMS and native AI.',
						'Provided technical support and guidance to developers.',
						'Created documentation and tutorials for better product understanding.',
						'Organized and conducted webinars and workshops.',
						'Engaged with the developer community to gather feedback and improve the product.'
					]
				}
			]
		},
		{
			company: 'Smat.io',
			link: 'https://smat.io',
			badges: ['Remote'],
			jobs: [
				{
					title: 'QA Tester & Frontend Developer',
					start: 'Aug, 2022',
					end: 'Aug, 2023',
					description: [
						"Led QA testing using Jest and Playwright to ensure web applications' quality.",
						'Implemented Test-Driven Development (TDD) practices.',
						'Developed user-friendly interfaces with React.js.',
						'Collaborated with developers to optimize code quality.',
						'Conducted bug tracking and troubleshooting.'
					]
				}
			]
		},
		{
			company: 'Maker DAO',
			link: 'https://makerdao.com',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Technical Writer and Translator',
					start: 'Feb, 2022',
					end: 'Aug, 2022',
					description: [
						'Authored technical documentation, including whitepapers, guides, and tutorials.',
						'Translated complex technical content for diverse audiences.',
						'Facilitated user understanding of blockchain and DeFi concepts.',
						'Collaborated with subject matter experts to ensure accuracy.',
						'Maintained and updated documentation as needed.'
					]
				}
			]
		},
		{
			company: 'El Chaperón',
			badges: ['On-site'],
			jobs: [
				{
					title: 'Web Designer & Community Manager',
					start: 'Jan, 2019',
					end: 'Dec, 2021',
					description: [
						'Developed and designed responsive websites using WordPress.',
						'Managed online tourist services for the city of Rosario.',
						'Coordinated with the Rosario Hotel Association and Tourist Entity (ETUR).',
						'Created engaging content for community outreach.',
						'Implemented SEO strategies to improve website visibility.'
					]
				},
				{
					title: 'Commercial Advisor',
					start: 'Jan, 2016',
					end: 'Dec, 2018',
					description: [
						'Maintained customer database for accuracy.',
						'Executed marketing strategies to attract customers.',
						'Managed services and ensured customer satisfaction.',
						'Designed and implemented promotional campaigns with the marketing team.',
						'Analyzed feedback and trends to improve services and marketing.'
					]
				}
			]
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
			title: "Morty's characters",
			techStack: [
				'API',
				'Apollo',
				'CSS',
				'GraphQL',
				'JavaScript',
				'React',
				'Tailwind CSS',
				'TypeScript'
			],
			description:
				"A simple app that lists all Morty's characters. Built with Next.js and GraphQL.",
			link: {
				label: 'github.com/emapeire/nextjs-graphql',
				href: 'https://github.com/emapeire/nextjs-graphql'
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
