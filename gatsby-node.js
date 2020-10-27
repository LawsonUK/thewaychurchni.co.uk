const fetch = require(`node-fetch`)

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
      const prevMedia = medias[index - 1] ? medias[index - 1].node : false
      const nextMedia = medias[index + 1] ? medias[index + 1].node : false

      // fetch any audio file url.
      let response
      let audioUrl
      let featuredImage
      try {
        response = await fetch(
          `https://thewaychurch.herokuapp.com/media-posts/${media.node.strapiId}`
        )
        const data = await response.json()
        audioUrl = data.audioFile ? data.audioFile.url : ""
        featuredImage = data.featuredImage.url
      } catch (error) {
        console.log(error)
      }

      createPage({
        path: `/media/${media.node.slug}`,
        component: require.resolve("./src/templates/media-template.js"),
        context: {
          slug: media.node.slug,
          prevMedia,
          nextMedia,
          audioUrl,
          featuredImage,
        },
      })
    })
    await Promise.all(promises)
  }
}
