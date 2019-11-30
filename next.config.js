// const path = require('path')
const withPlugins = require('next-compose-plugins')
// const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
// const withPino = require('next-pino')
// const withProgressBar = require('next-progressbar')
// const withSize = require('next-size')
// const withSourceMaps = require('@zeit/next-source-maps')

dotenvLoad()

const nextConfig = {
  // target: 'serverless',
  env: {},
  webpack: config => {
    // config.node = {
    // 	fs: 'empty'
    // }
    // config.output = {
    // 	publicPath: ''
    // }
    // Some variants to absolute import
    // config.resolve.alias['components'] = path.join(__dirname, 'components')
    // config.resolve.modules.push(path.resolve('./'))
    return config
  }
  // exportPathMap: async (
  // 	defaultPathMap,
  // 	{ dev, dir, outDir, distDir, buildId }
  // ) => {
  // 	console.log(defaultPathMap)
  //
  // 	// const pages = postList.reduce(
  // 	// 	(pages, post) =>
  // 	// 		Object.assign({}, pages, {
  // 	// 			[`/post/${post.id}`]: {
  // 	// 				page: '/post',
  // 	// 				query: { id: post.id }
  // 	// 			}
  // 	// 		}),
  // 	// 	{}
  // 	// )
  // 	const pages = []
  //
  // 	// combine the map of post pages with the home
  // 	return Object.assign({}, pages, {
  // 		'/': { page: '/' }
  // 	})
  // }
}

module.exports = withPlugins(
  [
    nextEnv(),
    // [
    //   optimizedImages,
    //   {
    //     // responsive: {
    //     // 	options: {
    //     // 		sizes: ['320', '480', '720', '1200'],
    //     // 		// max: 1800,
    //     // 		// quality: 85,
    //     // 		// format: 'jpg',
    //     // 		// placeholder: true
    //     // 	}
    //     // },
    //     defaultImageLoader: 'image-trace-loader',
    //     imagesFolder: 'images',
    //     imagesName: '[name]-[hash].[ext]',
    //     // handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
    //     optimizeImages: true,
    //     optimizeImagesInDev: false,
    //     mozjpeg: {
    //       quality: 80
    //     },
    //     optipng: {
    //       optimizationLevel: 3
    //     },
    //     webp: {
    //       preset: 'default',
    //       quality: 75
    //     },
    //     imageTrace: {
    //       // color: '#ecdfb7',
    //       color: 'COLOR_AUTO',
    //       alphaMax: 0.01,
    //       optTolerance: 0.001,
    //       turdSize: 10000
    //     }
    //   }
    // ],
    [withOffline]
    // [withBundleAnalyzer],
    // [withPino],
    // [
    //   withProgressBar,
    //   {
    //     progressBar: {
    //       profile: false
    //     }
    //   }
    // ],
    // [withSize],
    // [withSourceMaps]
  ],
  nextConfig
)
