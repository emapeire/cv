import React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import './globals.css'

const metadata: Metadata = {
	title: `CV | ${RESUME_DATA.name}`,
	description: `${RESUME_DATA.about}`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={cn(
				'min-h-screen bg-background font-sans antialiased',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<Head metadata={metadata} />
			<body>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	)
}
