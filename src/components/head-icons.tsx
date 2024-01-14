import Head from 'next/head'
import { type Metadata } from 'next'

export function HeadIcons({ metadata }: { metadata: Metadata }) {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='title' title={metadata.title?.toString()} />
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
			<link rel='icon' type='image/png' sizes='192x192' href='/icons/android-chrome-192x192.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
			<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
			<link rel='manifest' href='/icons/site.webmanifest' />
			<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#000000' />
		</Head>
	)
}
