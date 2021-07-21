module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RangerMel",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `THIS_IS_IT`,
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    `gatsby-plugin-mdx`,
  ],
}
