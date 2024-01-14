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
	personalWebsiteUrl: 'https://linktr.ee/emapeire',
	contact: {
		email: 'emapeire@outlook.com',
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
			start: '2019',
			end: '2021'
		}
	],
	work: [
		{
			company: 'Smat SA.',
			link: 'https://smat.io',
			badges: ['Remote'],
			title: 'QA Tester and Frontend Developer',
			logo: 'https://assets-global.website-files.com/63055fe72615549c6cfae8e0/63c55f389bcbb423249e730f_Frame%20560.png',
			start: '2022',
			end: '2023',
			description: `Spearheaded comprehensive QA testing processes, employing tools like Jest, and Playwright to ensure seamless functionality and performance of web applications.
			Collaborated with cross-functional teams to implement Test-Driven Development (TDD) methodologies, optimizing code quality and reducing bugs.
			Contributed to the frontend development of user-centric interfaces using React.js, enhancing user experiences through intuitive designs and responsive layouts.`
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
			logo: '',
			link: {
				label: 'npmjs.com/package/swc-router',
				href: 'https://npmjs.com/package/swc-router'
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
				'In this app you will be able to interact with a intelligent llama that will answer your questions about JavaScript.',
			logo: '',
			link: {
				label: 'github.com/emapeire/eloquent-js-chat',
				href: 'https://github.com/emapeire/eloquent-js-chat'
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
			logo: '',
			link: {
				label: 'github.com/emapeire/image-to-code',
				href: 'https://github.com/emapeire/image-to-code'
			}
		}
	]
} as const
