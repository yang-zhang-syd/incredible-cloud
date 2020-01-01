const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query ListPages {
        events {
          listEvents {
            items {
              id
            }
          }
        }
        allFile(filter: {sourceInstanceName: {in: ["blogs", "aws"]}}) {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {

      result.data.events.listEvents.items.map((item, idx) => {
        createPage({
          path:`event/${item.id}`,
          component: path.resolve(`./src/templates/event.mdx`),
          context: {
            id: item.id
          }
        })
      })

      result.data.allFile.edges.map((file, idx) => {
        createPage({
          path: `post/${file.node.id}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            id: file.node.id
          }
        })
      })

      resolve()
    })
  })
}
