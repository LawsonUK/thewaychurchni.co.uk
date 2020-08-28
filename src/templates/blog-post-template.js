import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

const BlogPostTemplate = ({ data }) => {
  const post = data.strapiBlogPosts
  return (
    <Layout>
      <SEO title="Blog"></SEO>

      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full flex flex-col">
          <Link to="/blog" className="link mb-3">
            Blog
          </Link>
          <span className="text-gray-600">{post.publishedOn}</span>
          <h1 className="text-3xl md:text-3xl font-extrabold mt-4 mb-12 text-wayblue">
            {post.title}
          </h1>
        </div>
        <Img
          className="w-full blog-image mb-4 rounded"
          fluid={post.featuredImage.childImageSharp.fluid}
        />
      </section>
      <article className="max-w-screen-xl m-auto px-6">
        <ReactMarkdown source={post.post} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    strapiBlogPosts(slug: { eq: $slug }) {
      strapiId
      title
      excerpt
      publishedOn(formatString: "Do MMM Y")
      slug
      post
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
