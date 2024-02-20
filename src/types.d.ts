export interface SocialLink {
	name: string
	url: string
	icon: React.ComponentType
}

export interface ContactInfo {
	email: string
	tel: string
	social: SocialLink[]
}

export interface EducationEntry {
	school: string
	degree: string
	start: string
	end: string
}

export interface WorkEntry {
	company: string
	link?: string
	badges: string[]
	title: string
	start: string
	end: string
	description: string
}

export interface ProjectLink {
	label: string
	href: string
}

export interface Project {
	title: string
	techStack: string[]
	description: string
	link: ProjectLink
}

export interface ResumeData {
	name: string
	initials: string
	location: string
	locationLink: string
	about: string
	summary: string
	avatar: string
	personalWebsiteUrl: string
	contact: ContactInfo
	education: EducationEntry[]
	work: WorkEntry[]
	skills: string[]
	projects: Project[]
}
