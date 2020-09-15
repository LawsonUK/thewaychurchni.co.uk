import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.blogPost
  const prevPostLink = pageContext.prevPost ? (
    <Link
      className="link mb-8 lg:mb-0"
      to={`/blog/${pageContext.prevPost.slug}`}
    >
      {pageContext.prevPost.title}
    </Link>
  ) : (
    ""
  )
  const nextPostLink = pageContext.nextPost ? (
    <Link className="link" to={`/blog/${pageContext.nextPost.slug}`}>
      {pageContext.nextPost.title}
    </Link>
  ) : (
    ""
  )

  return (
    <Layout>
      <SEO title={post.title}></SEO>

      <section className="banner max-w-screen-xl m-auto text-center mt-24 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full flex flex-col">
          <Link to="/blog" className="link mb-3">
            Blog
          </Link>
          <h1 className="text-3xl md:text-3xl font-extrabold mt-4 mb-8 text-wayblue">
            {post.title}
          </h1>
        </div>
        <Img
          className="w-full blog-image mb-4 rounded"
          fluid={post.featuredImage.childImageSharp.fluid}
        />
      </section>
      <section className="max-w-screen-xl m-auto flex justify-between px-6 items-center mb-12 flex-col sm:flex-row text-sm">
        <div className="flex items-center justify-center mb-6 sm:mb-0">
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
        <span>Published On: {post.publishedOn}</span>
      </section>
      <article className="article max-w-screen-lg m-auto px-6">
        <div
          dangerouslySetInnerHTML={{
            __html: post.childMarkdownRemark.html,
          }}
        ></div>
      </article>
      <section className="links max-w-screen-xl m-auto flex flex-col lg:flex-row lg:justify-between text-center px-6 py-6 xl:px-0 pt-16">
        {prevPostLink} {nextPostLink}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    blogPost(slug: { eq: $slug }) {
      strapiId
      title
      excerpt
      publishedOn(formatString: "Do MMM Y")
      slug
      childMarkdownRemark {
        html
      }
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
    }
  }
`

export default BlogPostTemplate
