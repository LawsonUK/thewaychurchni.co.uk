exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
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
