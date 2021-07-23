// next.config.js
const { withSentryConfig } = require('@sentry/nextjs');

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
		value: 'nonce',
	},
];

const moduleExports = {
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

const SentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore

	silent: true, // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
