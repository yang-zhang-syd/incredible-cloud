const path = require('path')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-graphql",
      options: {
          // This type will contain the remote schema Query type
          typeName: "AWSAppSync",
          // This is the field under which it's accessible
          fieldName: "events",
          // URL to query from
          url: process.env.APPSYNC_API_URL,
          headers: {
              "x-api-key": process.env.APPSYNC_API_KEY
          },
          refetchInterval: 10,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/contents/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aws`,
        path: `${__dirname}/contents/aws`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/contents/books`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.incredible.cloud',
        enableS3StaticWebsiteHosting: false
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
  ],
}
