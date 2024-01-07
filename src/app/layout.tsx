import React from 'react'
import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'

export const metadata: Metadata = {
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
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				{children}
				{/* <Analytics /> */}
			</body>
		</html>
	)
}
