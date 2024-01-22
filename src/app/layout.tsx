import React from 'react'
import { HeadIcons } from '@/components/head-icons'
import { metadata } from '@/components/metadata'
import { Inter } from 'next/font/google'
import './globals.css'
// import { Analytics } from '@vercel/analytics/react'

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
