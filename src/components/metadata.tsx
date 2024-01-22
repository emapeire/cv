import { RESUME_DATA } from '@/data/resume-data'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
	description: RESUME_DATA.summary
}
