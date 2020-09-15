/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const crypto = require(`crypto`)
const slugify = require("slugify")

const buildSlug = node => {
  let slug = slugify(node.title, { lower: true })
  if (node.categories) {
    slug += `/${node.categories
      .split(",")
      .map(n => _.trim(n))
      .join("/")}`
  }
  return slug
}

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
              title
            }
          }
        }
        media: allStrapiMediaPosts {
          edges {
            node {
              slug
              title
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
      const prevPost = posts[index - 1] ? posts[index - 1].node : false
      const nextPost = posts[index + 1] ? posts[index + 1].node : false
      createPage({
        path: `/blog/${post.node.slug}`,
        component: require.resolve("./src/templates/blog-post-template.js"),
        context: {
          slug: post.node.slug,
          prevPost,
          nextPost,
        },
      })
    })

  // Create media pages
  const medias = result.data.media.edges

  medias &&
    medias.forEach((media, index) => {
      const prevMedia = medias[index - 1] ? medias[index - 1].node : false
      const nextMedia = medias[index + 1] ? medias[index + 1].node : false
      createPage({
        path: `/media/${media.node.slug}`,
        component: require.resolve("./src/templates/media-template.js"),
        context: {
          slug: media.node.slug,
          prevMedia,
          nextMedia,
        },
      })
    })
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode } = actions
  if (node.internal.type === "StrapiBlogPosts") {
    createNode({
      ...node,
      slug: buildSlug(node),
      id: node.id + "-markdown",
      parent: node.id,
      children: [],
      internal: {
        type: "BlogPost",
        mediaType: "text/markdown",
        content: node.post,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`),
      },
    })
  }
}
