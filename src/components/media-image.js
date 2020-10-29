import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MediaImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "media-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 620) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img className="mb-4" fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default MediaImage
