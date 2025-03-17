/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true
	},
	experimental: {
		forceSwcTransforms: true,
		babelLoaderOptions: {
			// Your custom Babel options here
		}
	}
}

export default nextConfig
