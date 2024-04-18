import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CommandMenu } from '@/components/command-menu'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ProjectCard } from '@/components/project-card'
import { GlobeIcon, MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { data } from '@/constants'

export default function Page() {
	return (
		<main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className='text-2xl font-bold'>{data.name}</h1>
						<p className='max-w-md text-pretty font-mono text-sm text-muted-foreground'>
							{data.about}
						</p>
						<p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
							<a
								className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
								href={data.locationLink}
								target='_blank'
								rel='noreferrer'
							>
								<GlobeIcon className='size-3' />
								{data.location}
							</a>
						</p>

						<div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
							{data.personalWebsiteUrl && (
								<Tooltip>
									<TooltipTrigger asChild>
										<Button className='size-8' variant='outline' size='icon' asChild>
											<a href={data.personalWebsiteUrl.url} target='_blank' rel='noreferrer'>
												<AppWindowIcon className='size-4' />
											</a>
										</Button>
									</TooltipTrigger>
									<TooltipContent side='bottom'>
										<p className='text-xs'>{data.personalWebsiteUrl.name}</p>
									</TooltipContent>
								</Tooltip>
							)}
							{data.contact.email && (
								<Tooltip>
									<TooltipTrigger asChild>
										<Button className='size-8' variant='outline' size='icon' asChild>
											<a href={`mailto:${data.contact.email.at}`} target='_blank' rel='noreferrer'>
												<MailIcon className='size-4' />
											</a>
										</Button>
									</TooltipTrigger>
									<TooltipContent side='bottom'>
										<p className='text-xs'>{data.contact.email.name}</p>
									</TooltipContent>
								</Tooltip>
							)}
							{data.contact.tel && (
								<Tooltip>
									<TooltipTrigger asChild>
										<Button className='size-8' variant='outline' size='icon' asChild>
											<a
												href={`tel:${data.contact.tel.phoneNumber}`}
												target='_blank'
												rel='noreferrer'
											>
												<PhoneIcon className='size-4' />
											</a>
										</Button>
									</TooltipTrigger>
									<TooltipContent side='bottom'>
										<p className='text-xs'>{data.contact.tel.name}</p>
									</TooltipContent>
								</Tooltip>
							)}
							{data.contact.social.map((social) => (
								<Tooltip key={social.name}>
									<TooltipTrigger asChild>
										<Button
											key={social.name}
											className='size-8'
											variant='outline'
											size='icon'
											asChild
										>
											<a href={social.url} target='_blank' rel='noreferrer'>
												<social.icon className='size-4' />
											</a>
										</Button>
									</TooltipTrigger>
									<TooltipContent side='bottom'>
										<p className='text-xs'>{social.name}</p>
									</TooltipContent>
								</Tooltip>
							))}
							{data.contact.link && (
								<Tooltip>
									<TooltipTrigger asChild>
										<Button className='size-8' variant='outline' size='icon' asChild>
											<a href={data.contact.link.url} target='_blank' rel='noreferrer'>
												<LinkIcon className='size-4' />
											</a>
										</Button>
									</TooltipTrigger>
									<TooltipContent side='bottom'>
										<p className='text-xs'>{data.contact.link.name}</p>
									</TooltipContent>
								</Tooltip>
							)}
						</div>

						<div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
							{data.personalWebsiteUrl && (
								<a href={data.personalWebsiteUrl.url} target='_blank' rel='noreferrer'>
									<span className='underline'>{data.personalWebsiteUrl.url}</span>
								</a>
							)}
							{data.contact.email && (
								<a href={`mailto:${data.contact.email.at}`} target='_blank' rel='noreferrer'>
									<span className='underline'>{data.contact.email.at}</span>
								</a>
							)}
							{data.contact.tel && (
								<a href={`tel:${data.contact.tel.phoneNumber}`} target='_blank' rel='noreferrer'>
									<span className='underline'>{data.contact.tel.phoneNumber}</span>
								</a>
							)}
						</div>
					</div>

					<a href='https://github.com/emapeire' target='_blank' rel='noreferrer'>
						<Avatar className='size-28 border'>
							<AvatarImage alt={data.name} src={data.avatar} />
							<AvatarFallback className='font-mono font-bold'>{data.initials}</AvatarFallback>
						</Avatar>
					</a>
				</div>

				<Section>
					<h2 className='text-xl font-bold'>About</h2>
					<p className='text-pretty font-mono text-sm text-muted-foreground'>{data.summary}</p>
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Work Experience</h2>
					{data.work.map((work) => {
						return (
							<Card key={work.company}>
								<CardHeader>
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
											{work.link ? (
												<a
													className='hover:underline'
													href={work.link}
													target='_blank'
													rel='noreferrer'
												>
													{work.company}
												</a>
											) : (
												<p>{work.company}</p>
											)}

											<span className='inline-flex gap-x-1'>
												{work.badges.map((badge) => (
													<Badge variant='secondary' className='align-middle text-xs' key={badge}>
														{badge}
													</Badge>
												))}
											</span>
										</h3>
										<div className='text-sm tabular-nums text-neutral-500'>
											{work.start} - {work.end}
										</div>
									</div>

									<h4 className='font-mono text-sm leading-none'>{work.title}</h4>
								</CardHeader>
								<CardContent className='mt-2 text-xs'>{work.description}</CardContent>
							</Card>
						)
					})}
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Education</h2>
					{data.education.map((education) => {
						return (
							<Card key={education.school}>
								<CardHeader>
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='font-semibold leading-none'>{education.school}</h3>
										<div className='text-sm tabular-nums text-neutral-500'>
											{education.start} - {education.end}
										</div>
									</div>
								</CardHeader>
								<CardContent className='mt-2'>{education.degree}</CardContent>
							</Card>
						)
					})}
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Skills</h2>
					<div className='flex flex-wrap gap-1'>
						{data.skills.map((skill) => {
							return <Badge key={skill}>{skill}</Badge>
						})}
					</div>
				</Section>

				<Section className='print-force-new-page scroll-mb-16'>
					<h2 className='text-xl font-bold'>Projects</h2>
					<div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
						{data.projects.map((project) => {
							return (
								<ProjectCard
									key={project.title}
									title={project.title}
									description={project.description}
									tags={project.techStack}
									link={'link' in project ? project.link.href : undefined}
								/>
							)
						})}
					</div>
				</Section>
			</section>

			<CommandMenu
				links={[
					{
						url: data.personalWebsiteUrl.url,
						title: data.personalWebsiteUrl.name
					},
					{
						url: `mailto:${data.contact.email.at}`,
						title: data.contact.email.name
					},
					{
						url: `tel:${data.contact.tel.phoneNumber}`,
						title: data.contact.tel.name
					},
					...data.contact.social.map((socialMediaLink) => ({
						url: socialMediaLink.url,
						title: socialMediaLink.name
					})),
					{
						url: data.contact.link.url,
						title: data.contact.link.name
					}
				]}
			/>
		</main>
	)
}
