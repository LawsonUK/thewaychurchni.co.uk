import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

const BlogPage = ({ data }) => {
  const bannerUrl = data.banner.nodes[0].fluid
  const avatarUrl = data.avatar.nodes[0].fluid
  const blog1Url = data.blog1.nodes[0].fluid
  const blog2Url = data.blog2.nodes[0].fluid
  const blog3Url = data.blog3.nodes[0].fluid
  return (
    <Layout>
      <SEO title="Blog"></SEO>

      <section className="banner text-center mt-24 mb-8 md:mb-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <h3 className="mb-3">Blog</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-4">
            Thoughts from <br /> the Pastors
          </h1>
          <p className="mb-12">Helping you on</p>
        </div>
        <BackgroundImage
          className="card-light-main p-12 w-full rounded overflow-hidden"
          fluid={blog1Url}
          backgroundColor={`#000000`}
        >
          <div>
            <Link className="text-2xl font-bold block text-red-500 mb-2" to="/">
              Don't Face Unbelief Alone
            </Link>
            <span className="text-gray-200">Mar 7, 2020</span>
            <p className="text-gray-100 mt-4">
              Unbelief can become a vicious cycle, leaving us isolated and
              increasingly vulnerable to more and more deception.
            </p>
            <div className="flex items-center justify-center mt-8">
              <Link to="/">
                <Img
                  className="rounded-full w-10 mr-4"
                  fluid={avatarUrl}
                  alt="Johnny Carson"
                />
              </Link>
              <Link className="text-red-500 font-bold" to="/">
                Johnny Carson
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </section>

      <h2 className="max-w-screen-xl m-auto text-2xl font-bold text-wayblue">
        Latest Posts
      </h2>
      <div className="rounded">
        <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-8">
          <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <li className="flex flex-col md:col-span-2 xl:col-span-1">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 w-full"
                  fluid={blog1Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 bg-opacity-75"
                  fluid={blog2Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 bg-opacity-75"
                  fluid={blog3Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <h2 className="max-w-screen-xl m-auto text-2xl font-bold text-wayblue ">
        Featured Posts
      </h2>
      <div className="rounded">
        <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-8">
          <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <li className="flex flex-col md:col-span-2 xl:col-span-1">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 w-full"
                  fluid={blog1Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 bg-opacity-75"
                  fluid={blog2Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded overflow-hidden flex flex-grow">
                <BackgroundImage
                  className="card-light-bg p-12 bg-opacity-75"
                  fluid={blog3Url}
                  backgroundColor={`#000000`}
                >
                  <Link
                    className="text-2xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-200">Mar 7, 2020</span>
                  <p className="text-gray-100 mt-4">
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
                    <Link className="text-red-500 font-bold" to="/">
                      Johnny Carson
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
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

export default BlogPage
