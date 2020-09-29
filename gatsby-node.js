exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        media: allStrapiMediaPosts {
          edges {
            node {
              id
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
    medias.forEach(async (media, index) => {
      const prevMedia = medias[index - 1] ? medias[index - 1].node : false
      const nextMedia = medias[index + 1] ? medias[index + 1].node : false

      // fetch any audio file url.
      let audioUrl = ""
      if (media.audioFile) {
        json = await fetch(
          `https://thewaychurch.herokuapp.com/media-posts/${media.id}`
        )
        data = json.json()
        audioUrl = data.audioFile.url
      }

      createPage({
        path: `/media/${media.node.slug}`,
        component: require.resolve("./src/templates/media-template.js"),
        context: {
          slug: media.node.slug,
          prevMedia,
          nextMedia,
          audioUrl,
        },
      })
    })
}
