import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout-main"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({ data }) => {
  const notFoundPage = data.notFoundPage.nodes[0]
  const gallery = notFoundPage.gallery
  const image1 = gallery.image1.childImageSharp.fluid
  const image2 = gallery.image2.childImageSharp.fluid
  const image3 = gallery.image3.childImageSharp.fluid
  const image4 = gallery.image4.childImageSharp.fluid
  // const image5 = gallery.image5.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="max-w-screen-xl m-auto my-24 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-4 px-24">
          NOT FOUND
        </h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="link">
          Please return to the homepage
        </Link>
      </div>
      <ul className="gallery max-w-screen-xl m-auto grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 p-4 shadow-lg">
        <li className="bg-red-800 col-span-2 row-span-2 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={image1}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-600 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={image2}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1">
          <Img
            className="flex flex-grow"
            fluid={image3}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-200 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={image4}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-100 rounded overflow-hidden flex flex-col">
          {/* <Img
            className="flex flex-grow"
            fluid={image5}
            alt="Jonathan Carson"
          /> */}
        </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    notFoundPage: allStrapiContactPage {
      nodes {
        gallery {
          image1 {
            childImageSharp {
              fluid(maxWidth: 620, maxHeight: 466, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 306, maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image4 {
            childImageSharp {
              fluid(maxWidth: 306, maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default NotFoundPage
