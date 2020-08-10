import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

const ContactPage = ({ data }) => {
  const church1Url = data.church1.nodes[0].fluid
  const church2Url = data.church2.nodes[0].fluid
  const church3Url = data.church3.nodes[0].fluid
  const church4Url = data.church4.nodes[0].fluid
  const church5Url = data.church5.nodes[0].fluid

  return (
    <Layout>
      <SEO title="Church" />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 md:mb-24 flex flex-col">
        <div className="w-full">
          <h3 className="mb-3">Contact</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            Feel free to get in touch
          </h1>
          <p>It would be great to see you! Why not come along some Sunday</p>
        </div>
      </section>
      <section className="contact-details max-w-screen-xl m-auto grid md:grid-cols-3 text-center">
        <div className="mb-12">
          <h3 className="text-black text-2xl font-bold mb-4">Details</h3>
          <a className="link" href="mailTo:info@thewaychurchni.co.uk">
            info@thewaychurchni.co.uk
          </a>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-black">Visit Us</h3>
          <p className="mb-0">Ballyclare town hall</p>
          <p className="mb-0">BT39 9BB</p>
          <p>
            <a
              className="link"
              href="https://goo.gl/maps/8svpGszzstGSKYmz7"
              target="_blank"
              rel="noopener"
            >
              Get Directions
            </a>
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-black text-2xl font-bold mb-4">
            Connect with us
          </h3>
          <ul className="flex mt-5 md:mt-0 justify-center">
            <li className="mr-2">
              <a href="https://twitter.com/thewaychurch4">
                <Icon
                  icon={twitterCircleFilled}
                  style={{ fontSize: "35.259260177612305px", color: "#000000" }}
                />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.facebook.com/thewaychurchni">
                <Icon
                  icon={facebookIcon}
                  style={{ fontSize: "32.851852416992188px", color: "#000000" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thewaychurchni/">
                <Icon
                  icon={circleinstagramIcon}
                  style={{ fontSize: "33.851852416992188px", color: "#000000" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ul className="max-w-screen-xl m-auto grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 p-4 shadow-lg">
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
        fluid(maxWidth: 640, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church2: allImageSharp(
      filter: { fluid: { originalName: { eq: "church2.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church3: allImageSharp(
      filter: { fluid: { originalName: { eq: "church3.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church4: allImageSharp(
      filter: { fluid: { originalName: { eq: "church4.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church5: allImageSharp(
      filter: { fluid: { originalName: { eq: "church5.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
