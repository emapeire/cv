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
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta title={metadata.title?.toString()} />
				<meta name='description' content={metadata.description?.toString()} />
				<meta name='author' content='Emanuel Peire' />
				<meta name='robots' content='index, follow' />
				<meta name='apple-mobile-web-app-title' content='ep-app' />
				<meta name='application-name' content='ep-app' />
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-TileImage' content='/icons/mstile-144x144.png' />
				<meta name='theme-color' content='#000000' />
				<link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='194x194' href='/icons/favicon-194x194.png' />
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/icons/android-chrome-192x192.png'
				/>
				<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
				<link rel='manifest' href='/icons/site.webmanifest' />
				<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#000000' />
			</Head>
			<body>
				{children}
				{/* <Analytics /> */}
			</body>
		</html>
	)
}
