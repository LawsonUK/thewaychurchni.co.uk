import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Card from "../components/card"

const BlogPage = ({ data }) => {
  const blogPage = data.blogPage.nodes[0] ? data.blogPage.nodes[0] : false
  const allPosts = data.posts.nodes ? data.posts.nodes : false
  const firstPost = data.firstPost.nodes[0] ? data.firstPost.nodes[0] : false
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const posts = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    searchTerm === "" ? setFilteredPosts(allPosts) : setFilteredPosts(posts)
  }, [searchTerm, allPosts])

  return (
    <Layout>
      <SEO title="Blog"></SEO>

      <section className="banner max-w-screen-xl m-auto mt-24 mb-8 md:mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 pr-4 pl-4 pt-0 xl:p-0 pb-6">
        <div className="w-full text-center">
          <h3 className="mb-3">Blog</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-8">
            {blogPage.title}
          </h1>
          <pre className="mb-12 px-6">{blogPage.subTitle}</pre>
        </div>
        {firstPost && (
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
              {firstPost.excerpt.split(" ").splice(0, 20).join(" ")}...
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
        )}
      </section>

      <div className="bg-light pb-2 pt-8">
        <div className="p-4 xl:p-0">
          <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-6">
            <div className="relative mx-auto text-gray-600 mb-10 flex justify-center">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full md:w-1/2"
                type="search"
                placeholder="Filter Blog"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredPosts &&
                filteredPosts.map(post => {
                  return (
                    <li className="flex flex-col" key={post.strapiId}>
                      <Card data={post} />
                    </li>
                  )
                })}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    blogPage: allStrapiBlogPage {
      nodes {
        title
        subTitle
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
              fluid(maxWidth: 40, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 542, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        publishedOn(formatString: "Do MMM Y")
        excerpt
      }
    }
    posts: allStrapiBlogPosts(
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
              fluid(maxWidth: 40, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 373, quality: 80) {
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

export default BlogPage
