import { MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { type ResumeData } from '@/types'

export function ButtonLink({ data }: { data: ResumeData }) {
	return (
		<section>
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
								<a href={`tel:${data.contact.tel.phoneNumber}`} target='_blank' rel='noreferrer'>
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
							<Button key={social.name} className='size-8' variant='outline' size='icon' asChild>
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
		</section>
	)
}
