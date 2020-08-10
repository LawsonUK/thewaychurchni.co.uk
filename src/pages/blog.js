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

      <section className="banner max-w-screen-xl m-auto mt-24 mb-8 md:mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 pb-6">
        <div className="w-full text-center">
          <h3 className="mb-3">Blog</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-4">
            Thoughts from <br /> the Pastors
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            sunt ex, error repellat officia sapiente dolorum quas similique!
            Eius sed maxime tempore voluptas repellendus libero ratione
            voluptatem et voluptatibus vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            sunt ex, error repellat officia sapiente dolorum quas similique!
          </p>
        </div>
        <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-6 bg-white">
          <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
          <Link className="text-2xl font-bold block text-red-500 mb-2" to="/">
            Don't Face Unbelief Alone
          </Link>
          <span className="text-gray-600">Mar 7, 2020</span>
          <p className="mt-2">
            Unbelief can become a vicious cycle, leaving us isolated and
            increasingly vulnerable to more and more deception.
          </p>
          <div className="flex items-center mb-3">
            <Link to="/">
              <Img
                className="rounded-full w-10 mr-4"
                fluid={avatarUrl}
                alt="Jonathan Carson"
              />
            </Link>
            <Link className="text-gray-700 font-bold" to="/">
              Jonathan Carson
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-light pb-2 pt-8">
        <div className="rounded">
          <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-8">
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
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
