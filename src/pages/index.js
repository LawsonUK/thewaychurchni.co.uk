import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import LatestMedia from "../components/latest-media"
import Card from "../components/card"

import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const indexPage = data.indexpage.nodes[0] ? data.indexpage.nodes[0] : false
  const message = data.message.nodes[0] ? data.message.nodes[0] : false
  const firstPost = data.firstPost.nodes[0] ? data.firstPost.nodes[0] : false
  const posts = data.posts.nodes ? data.posts.nodes : false

  return (
    <Layout absolute="true">
      <SEO title="Home" />

      <BackgroundImage
        className="banner-background"
        fluid={indexPage.bannerImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-white opacity-50 z-0 transition-opacity duration-200 lg:opacity-0"></div>
        <section className="banner max-w-screen-xl m-auto flex flex-grow p-4 xl:p-0 relative z-10">
          <div className="pl-4 pr-4 xl:pl-0 xl:pr-0 mt-16 sm:mt-0">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-8 mt-10">
              <pre className="heading font-sans">{indexPage.bannerText}</pre>
            </h1>
            <div className="absolute">
              <Link
                to="/church"
                className="text-gray-100 bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md mr-4"
              >
                Learn more
              </Link>
              <Link
                to="/contact"
                className="bg-gray-100 text-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </BackgroundImage>

      {message && <LatestMedia media={message} />}

      <div className="bg-light">
        <section className="latest-blog max-w-screen-xl m-auto p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <Link className="link text-red-600" to="/blog">
              <h2 className="text-2xl font-bold">Latest from the Blog</h2>
            </Link>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {firstPost && (
              <li className="flex flex-col md:col-span-2 xl:col-span-1">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Link to={`/blog/${firstPost.slug}`}>
                    <Img
                      className="w-full h-64 mb-4 rounded"
                      fluid={firstPost.featuredImage.childImageSharp.fluid}
                    />
                  </Link>

                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to={`/blog/${firstPost.slug}`}
                  >
                    {firstPost.title}
                  </Link>
                  <span className="text-gray-600">{firstPost.publishedOn}</span>
                  <pre className="mt-2 mb-8">
                    {firstPost.excerpt.split(" ").splice(0, 20).join(" ")}...{" "}
                  </pre>
                  <div className="flex items-center mb-3">
                    <span>
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={firstPost.author.avatar.childImageSharp.fluid}
                        alt={firstPost.author.name}
                      />
                    </span>
                    <span className="text-gray-700 font-bold" to="/">
                      {firstPost.author.name}
                    </span>
                  </div>
                </div>
              </li>
            )}

            {posts &&
              posts.map(post => {
                return (
                  <li className="flex flex-col" key={post.strapiId}>
                    <Card data={post} />
                  </li>
                )
              })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    indexpage: allStrapiHomePage {
      nodes {
        bannerText
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    message: allStrapiMediaPosts(
      limit: 1
      sort: { order: DESC, fields: publishedOn }
    ) {
      nodes {
        title
        videoLink
        publishedOn(formatString: "Do MMM Y")
        slug
        description
        excerpt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 620, maxHeight: 373, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        audioFile {
          publicURL
        }
        teacher {
          avatar {
            childImageSharp {
              fluid(maxWidth: 40, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
        }
        media_type {
          type
        }
      }
    }
    firstPost: allStrapiBlogPosts(
      limit: 1
      sort: { fields: publishedOn, order: DESC }
    ) {
      nodes {
        slug
        title
        author {
          avatar {
            childImageSharp {
              fluid(maxWidth: 40, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 373, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        publishedOn(formatString: "Do MMM Y")
        excerpt
      }
    }
    posts: allStrapiBlogPosts(
      limit: 2
      sort: { fields: publishedOn, order: DESC }
      skip: 1
    ) {
      nodes {
        strapiId
        slug
        title
        author {
          name
          avatar {
            childImageSharp {
              fluid(maxWidth: 40, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 373, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        publishedOn(formatString: "Do MMM Y")
        excerpt
      }
    }
  }
`

export default IndexPage
