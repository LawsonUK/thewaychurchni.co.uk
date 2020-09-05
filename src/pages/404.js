import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout-main"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({ data }) => {
  const church1Url = data.church1.nodes[0].fluid
  const church2Url = data.church2.nodes[0].fluid
  const church3Url = data.church3.nodes[0].fluid
  const church4Url = data.church4.nodes[0].fluid
  const church5Url = data.church5.nodes[0].fluid
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
            fluid={church1Url}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-600 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={church2Url}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1">
          <Img
            className="flex flex-grow"
            fluid={church3Url}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-200 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={church4Url}
            alt="Jonathan Carson"
          />
        </li>
        <li className="bg-red-100 rounded overflow-hidden flex flex-col">
          <Img
            className="flex flex-grow"
            fluid={church5Url}
            alt="Jonathan Carson"
          />
        </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    church1: allImageSharp(
      filter: { fluid: { originalName: { eq: "church1.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 640, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church2: allImageSharp(
      filter: { fluid: { originalName: { eq: "church2.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church3: allImageSharp(
      filter: { fluid: { originalName: { eq: "church3.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church4: allImageSharp(
      filter: { fluid: { originalName: { eq: "church4.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church5: allImageSharp(
      filter: { fluid: { originalName: { eq: "church5.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default NotFoundPage
