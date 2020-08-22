import React from "react"
import { graphql, Link, useState } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const indexPage = data.indexpage.nodes[0]
  const message = data.message.nodes[0]
  const firstPost = data.firstPost.nodes[0]
  const posts = data.posts.nodes

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
              <pre className="font-sans">{indexPage.bannerText}</pre>
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
      <section className="featured-message max-w-screen-xl m-auto grid gap-12 xl:gap-24 sm:grid-cols-2 p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
        <div>
          <Link to={`/media/${message.slug}`}>
            <Img
              className="rounded"
              fluid={message.featuredImage.childImageSharp.fluid}
              alt="Message"
            />
          </Link>
        </div>
        <div>
          <div className="flex flex-col">
            <span>{message.media_type.type}</span>
            <span className="text-sm text-gray-500">{message.publishedOn}</span>
          </div>
          <Link
            to="/"
            className="block text-2xl md:text-3xl font-bold mb-4 link"
          >
            {message.title}
          </Link>
          <p>{message.excerpt}</p>

          <div>
            {message.videoLink && (
              <Link
                to="/"
                className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
              >
                Video
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="video-camera w-4 h-4 ml-1"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
              </Link>
            )}
            {message.audioFile.publicURL && (
              <Link
                to="/"
                className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
              >
                Audio
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="microphone w-4 h-4 ml-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            )}
          </div>

          <div className="flex items-center mt-8">
            <span>
              <Img
                className="rounded-full w-10 xl:w-12 mr-4"
                fluid={message.teacher.avatar.childImageSharp.fluid}
                alt="Jonathan Carson"
              />
            </span>
            <span className="text-gray-700 font-bold" to="/">
              {message.teacher.name}
            </span>
          </div>
        </div>
      </section>
      <div className="bg-light">
        <section className="latest-blog max-w-screen-xl m-auto p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <Link className="link text-red-600" to="/blog">
              <h2 className="text-2xl font-bold">Latest from the Blog</h2>
            </Link>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <li className="flex flex-col md:col-span-2 xl:col-span-1">
              <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                <Link to="{`/blog/${firstPost.slug}`}">
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
                <p className="mt-2">{firstPost.excerpt.substring(0, 130)}</p>
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
            {posts.map(post => {
              return (
                <li className="flex flex-col">
                  <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                    <Link to="{`/blog/${post.slug}`}">
                      <Img
                        className="w-full h-64 mb-4 rounded"
                        fluid={post.featuredImage.childImageSharp.fluid}
                      />
                    </Link>
                    <Link
                      className="text-xl font-bold block text-red-500 mb-2"
                      to={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                    <span className="text-gray-600">{post.publishedOn}</span>
                    <p className="mt-2">{post.excerpt.substring(0, 130)}</p>
                    <div className="flex items-center mb-3">
                      <span>
                        <Img
                          className="rounded-full w-10 mr-4"
                          fluid={post.author.avatar.childImageSharp.fluid}
                          alt={post.author.name}
                        />
                      </span>
                      <span className="text-gray-700 font-bold" to="/">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
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
            fluid(maxWidth: 1440, jpegQuality: 100) {
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
            fluid(maxWidth: 620, maxHeight: 373, jpegQuality: 100) {
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
              fluid(maxWidth: 40, jpegQuality: 100) {
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
              fluid(maxWidth: 40, jpegQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 373, jpegQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        publishedOn(formatString: "Do MMM Y")
        excerpt
      }
    }
    posts: allStrapiBlogPosts(
      limit: 3
      sort: { fields: publishedOn, order: DESC }
      skip: 1
    ) {
      nodes {
        slug
        title
        author {
          avatar {
            childImageSharp {
              fluid(maxWidth: 40, jpegQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 373, jpegQuality: 100) {
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
