import React from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RESUME_DATA } from '@/data/resume-data'
import { Head } from '@/components/head'
// import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const metadata: Metadata = {
	title: `CV | ${RESUME_DATA.name}`,
	description: `${RESUME_DATA.about}`
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${inter.className}`}>
			<Head metadata={metadata} />
			<body>
				{children}
				{/* <Analytics /> */}
			</body>
		</html>
	)
}
