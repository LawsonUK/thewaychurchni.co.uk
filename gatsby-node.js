exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(
    `
      {
        media: allStrapiMediaPosts(sort: { fields: publishedOn, order: DESC }) {
          edges {
            node {
              strapiId
              slug
              title
              publishedOn
            }
          }
        }
      }
    `
  )

  if (results.errors) {
    throw results.errors
  }

  // Create media pages
  const medias = results.data.media.edges

  if (medias) {
    const promises = medias.map(async (media, index) => {
      const prevMedia = medias[index - 1] ? medias[index - 1].node : null
      const nextMedia = medias[index + 1] ? medias[index + 1].node : null

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
    await Promise.all(promises)
  }
}
