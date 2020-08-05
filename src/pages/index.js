import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  console.log("banner", data.banner)
  const bannerUrl = data.banner.nodes[0].fluid
  const messageUrl = data.message.nodes[0].fluid
  const avatarUrl = data.avatar.nodes[0].fluid
  const blog1Url = data.blog1.nodes[0].fluid
  const blog2Url = data.blog2.nodes[0].fluid
  const blog3Url = data.blog3.nodes[0].fluid
  return (
    <Layout>
      <SEO title="Home" />

      <BackgroundImage
        className="banner-background"
        fluid={bannerUrl}
        backgroundColor={`#040e18`}
      >
        <section className="banner max-w-screen-xl m-auto flex flex-grow p-4 xl:p-0">
          <div className=" pl-4 pr-4 xl:pl-0 xl:pr-0">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-8 mt-10">
              Proclaiming Jesus as the way <br />
              and living as people of the way
            </h1>
            <div className="absolute">
              <button className="text-gray-100 bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md mr-4">
                Learn more
              </button>
              <button className="bg-gray-100 text-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md">
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <section className="featured-message max-w-screen-xl m-auto grid gap-12 xl:gap-24 sm:grid-cols-2 p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
        <div>
          <Link to="/">
            <Img className="rounded" fluid={messageUrl} alt="Message" />
          </Link>
        </div>
        <div>
          <span>Message</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            The Passover Lamb
          </h2>
          <p>
            Passover was the first & most important meal in Israel’s religious
            life, but as Jesus celebrates it with his disciples he changes the
            script as he reveals Passover’s true meaning.
          </p>
          <div className="flex items-center mt-8">
            <Link to="/">
              <Img
                className="rounded-full w-10 xl:w-12 mr-4"
                fluid={avatarUrl}
                alt="Johnny Carson"
              />
            </Link>
            <Link className="text-red-600 font-bold" to="/">
              Johnny Carson
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-dark">
        <section className="latest-blog max-w-screen-xl m-auto p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-gray-100">
              Latest from the Blog
            </h2>
            <Link className="link text-red-600" to="/">
              Blog
            </Link>
          </div>
          <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <li className="rounded overflow-hidden">
              <BackgroundImage
                className="p-12 bg-opacity-75"
                fluid={blog1Url}
                backgroundColor={`#242424`}
              >
                <h2 className="text-gray-100 text-2xl font-bold">
                  Don't Face Unbelief Alone
                </h2>
                <span className="text-gray-200">Mar 7, 2020</span>
                <p className="text-gray-100">
                  Unbelief can become a vicious cycle, leaving us isolated and
                  increasingly vulnerable to more and more deception.
                </p>
                <div className="flex items-center mt-8">
                  <Link to="/">
                    <Img
                      className="rounded-full w-10 mr-4"
                      fluid={avatarUrl}
                      alt="Johnny Carson"
                    />
                  </Link>
                  <Link className="text-red-600 font-bold" to="/">
                    Johnny Carson
                  </Link>
                </div>
              </BackgroundImage>
            </li>
            <li className="rounded overflow-hidden">
              <BackgroundImage
                className="p-12 bg-opacity-75"
                fluid={blog2Url}
                backgroundColor={`#242424`}
              >
                <h2 className="text-gray-100 text-2xl font-bold">
                  No God but One
                </h2>
                <span className="text-gray-200">Mar 7, 2020</span>
                <p className="text-gray-100">
                  Unbelief can become a vicious cycle, leaving us isolated and
                  increasingly vulnerable to more and more deception.
                </p>
                <div className="flex items-center mt-8">
                  <Link to="/">
                    <Img
                      className="rounded-full w-10 mr-4"
                      fluid={avatarUrl}
                      alt="Johnny Carson"
                    />
                  </Link>
                  <Link className="text-red-600 font-bold" to="/">
                    Johnny Carson
                  </Link>
                </div>
              </BackgroundImage>
            </li>
            <li className="rounded overflow-hidden">
              <BackgroundImage
                className="p-12 bg-opacity-75"
                fluid={blog3Url}
                backgroundColor={`#242424`}
              >
                <h2 className="text-gray-100 text-2xl font-bold">
                  Battling Anxiety with Thankful Prayer
                </h2>
                <span className="text-gray-200">Mar 7, 2020</span>
                <p className="text-gray-100">
                  Unbelief can become a vicious cycle, leaving us isolated and
                  increasingly vulnerable to more and more deception.
                </p>
                <div className="flex items-center mt-8">
                  <Link to="/">
                    <Img
                      className="rounded-full w-10 mr-4"
                      fluid={avatarUrl}
                      alt="Johnny Carson"
                    />
                  </Link>
                  <Link className="text-red-600 font-bold" to="/">
                    Johnny Carson
                  </Link>
                </div>
              </BackgroundImage>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    banner: allImageSharp(
      filter: { fluid: { originalName: { eq: "banner.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 1440, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    message: allImageSharp(
      filter: { fluid: { originalName: { eq: "message.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: allImageSharp(
      filter: { fluid: { originalName: { eq: "avatar.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog1: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog1.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog2: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog2.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog3: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog3.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
