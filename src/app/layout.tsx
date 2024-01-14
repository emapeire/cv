import React from 'react'
import { HeadIcons } from '@/components/head-icons'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { Analytics } from '@vercel/analytics/react'

const metadata: Metadata = {
	title: 'CV - Emanuel Peire',
	description:
		'Frontend Engineer, OSS Developer, LLMs technical researcher and DX Architect. Always influenced by design.'
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${inter.className}`}>
			<HeadIcons metadata={metadata} />
			<body>
				{children}
				{/* <Analytics /> */}
			</body>
		</html>
	)
}
