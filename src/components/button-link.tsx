import { MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { type ResumeData } from '@/types'

export function ButtonLink({ data }: { data: ResumeData }) {
	const linkData = [
		{ url: data.personalWebsiteUrl?.url, icon: AppWindowIcon, name: data.personalWebsiteUrl?.name },
		{ url: `mailto:${data.contact.email?.at}`, icon: MailIcon, name: data.contact.email?.name },
		{ url: `tel:${data.contact.tel?.phoneNumber}`, icon: PhoneIcon, name: data.contact.tel?.name },
		...data.contact.social.map((social) => ({
			url: social.url,
			icon: social.icon,
			name: social.name
		})),
		{ url: data.contact.link?.url, icon: LinkIcon, name: data.contact.link?.name }
	]

	return (
		<section>
			<div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
				{linkData
					.filter((link) => link.url)
					.map((link, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<Button className='size-8' variant='outline' size='icon' asChild>
									<a href={link.url} target='_blank' rel='noreferrer'>
										<link.icon className='size-4' />
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p className='text-xs'>{link.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
			</div>

			<div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
				{linkData
					.filter((link) => link.url)
					.map((link, index) => (
						<a key={index} href={link.url} target='_blank' rel='noreferrer'>
							<span className='underline'>{link.url}</span>
						</a>
					))}
			</div>
		</section>
	)
}
