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
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Ranger Mel - Megafauna`,
        subtitle: `Big, Bad and Back Again`,
        description: `A uniquely Australian audio drama set in 2025. Ranger Mel is brought into a scheme to bring back Australian Megafauna `,
        summary: `Podcast summary`,
        podcastType: `drama`,
        siteUrl: `https://podcast.com`,
        imageUrl: `https://podcast.com/podcast-image/png`,
        feedUrl: `https://podcast.com/pocast-rss-feed.xml`,
        language: `en-au`,
        copyright: `Copyright © 2020 Amelia Travers`,
        authorName: `Amelia Travers`,
        ownerName: `Amelia Travers`,
        ownerEmail: `amy.tee42@gmail.com`,
        managingEditor: `amy.tee42@gmail.com`,
        webMaster: `amy.tee42@gmail.com`,
        explicit: `yes`,
        publicationDate: `Jan 25, 2020 10:00:00 GMT`,
        category1: `Drama`,
        subCategory1: `Australian`,
        category2: `Education`,
        subCategory2: `Megafauna`,
        category3: `Radio Drama`,
        subCategory3: `Drama`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ranger Mel and the Megafauna`,
        short_name: `Ranger Mel`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
