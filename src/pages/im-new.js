import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const imNewPage = ({ data }) => {
  debugger
  const imNewPage = data.imNewPage.nodes[0]
  const gallery = imNewPage.gallery
  const image1 = gallery.image1.childImageSharp.fluid
  const image2 = gallery.image2.childImageSharp.fluid
  const image3 = gallery.image3.childImageSharp.fluid
  const image4 = gallery.image4.childImageSharp.fluid
  const image5 = gallery.image5.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="I'm New" />
      <section
        id="im-new"
        className="banner text-center mt-24 mb-20 flex flex-col max-w-screen-xl m-auto"
      >
        <div className="w-full">
          <h3 className="mb-3 ">I'm New</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-wayblue">
            {imNewPage.title}
          </h1>
        </div>

        <ul className="gallery grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 w-full p-4 shadow-lg px-6">
          <li className="bg-red-800 col-span-2 row-span-2 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image1}
              alt="banner image 1"
            />
          </li>
          <li className="bg-red-600 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image2}
              alt="banner image 2"
            />
          </li>
          <li className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1">
            <Img
              className="flex flex-grow"
              fluid={image3}
              alt="banner image 3"
            />
          </li>
          <li className="bg-red-200 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image4}
              alt="banner image 4"
            />
          </li>
          <li className="bg-red-100 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image5}
              alt="banner image 5"
            />
          </li>
        </ul>
      </section>
      <section className="w-full ml-auto mr-auto py-8 bg-light">
        <div className="flex flex-col lg:max-w-4xl lg:ml-auto lg:mr-auto mt-12 p-4 px-6 pb-24 lg:p-12 lg:mb-16 shadow-lg bg-white">
          <pre>{imNewPage.whatToExpectText}</pre>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    imNewPage: allStrapiImNewPage {
      nodes {
        whatToExpectText
        title
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
          image5 {
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

export default imNewPage
