/** @type {import('next').NextConfig} */

const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Permissions-Policy',
						value: 'interest-cohort=()'
					}
				]
			}
		]
	}
}

module.exports = nextConfig
