module.exports = {
	siteMetadata: {
		title: `My Portfolio 2022`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
	],
};
