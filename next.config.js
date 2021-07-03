// next.config.js

const securityHeaders = [
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},

	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'X-Frame-Options',
		value: 'ALLOW-FROM https://www.facebook.com/ https://www.messenger.com/',
	},
	{
		key: 'Content-Security-Policy',
		value: 'nonace',
	},
];

module.exports = {
	images: {
		domains: ['vincent-backend.herokuapp.com'],
	},
	image: {
		domains: ['vincent-backend.herokuapp.com'],
	},

	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
};
