require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     apiToken: process.env.DATO_API_TOKEN,
    //   },
    // },
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
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.incredible.cloud',
        enableS3StaticWebsiteHosting: false
      }
    }
  ],
}
