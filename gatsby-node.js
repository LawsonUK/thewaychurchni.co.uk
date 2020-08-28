/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        posts: allStrapiBlogPosts {
          edges {
            node {
              slug
            }
          }
        }
        media: allStrapiMediaPosts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  // Create blog post pages.
  const posts = result.data.posts.edges
  posts &&
    posts.forEach((post, index) => {
      // const prevPost = posts[index - 1] ? posts[index - 1].node : false
      // const nextPost = posts[index + 1] ? posts[index + 1].node : false

      createPage({
        path: `/blog/${post.node.slug}`,
        component: require.resolve("./src/templates/blog-post-template.js"),
        context: {
          slug: post.node.slug,
          // prevPost,
          // nextPost,
        },
      })
    })

  // Create media pages
  const medias = result.data.media.edges

  medias &&
    medias.forEach((media, index) => {
      createPage({
        path: `/media/${media.node.slug}`,
        component: require.resolve("./src/templates/media-template.js"),
        context: {
          slug: media.node.slug,
        },
      })
    })
}
