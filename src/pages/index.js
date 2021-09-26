import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestMedia from "../components/latest-media"
import Card from "../components/card"
import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const indexPage = data.indexpage.nodes[0] ? data.indexpage.nodes[0] : false
  console.log("indexPage", indexPage)
  const message = data.message.nodes[0] ? data.message.nodes[0] : false
  const medias = data.media.nodes ? data.media.nodes : false

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
          <div
            className={`pl-4 pr-4 xl:pl-0 xl:pr-0 mt-16 sm:mt-0`}
            style={
              !indexPage.bannerText
                ? { marginTop: "350px" }
                : { marginTop: "0px" }
            }
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-8 mt-10">
              <pre className="heading font-sans">{indexPage.bannerText}</pre>
            </h1>
            <div className="absolute">
              {indexPage.moreLink ? (
                <a
                  className="text-gray-100 bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md mr-4"
                  href={`${indexPage.moreLink}`}
                >
                  Learn more
                </a>
              ) : (
                <Link
                  to="/about"
                  className="text-gray-100 bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md mr-4"
                >
                  Learn more
                </Link>
              )}

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
          <div className="flex justify-between items-center mb-8">
            <Link className="link text-red-600" to="/blog">
              <h2 className="text-2xl font-bold">Featured Media</h2>
            </Link>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {medias &&
              medias.map(media => {
                return (
                  <li className="flex flex-col" key={media.strapiId}>
                    <Card data={media} media={true} />
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
        moreLink
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    message: allStrapiMediaPosts(
      limit: 1
      sort: { order: DESC, fields: publishedOn }
      filter: { published: { eq: true } }
    ) {
      nodes {
        title
        videoLink
        publishedOn(formatString: "Do MMM Y")
        published
        featured
        slug
        description
        excerpt
        mediaImage {
          childImageSharp {
            fluid(maxWidth: 620, maxHeight: 373, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        audioLink
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
    media: allStrapiMediaPosts(
      limit: 3
      sort: { order: DESC, fields: publishedOn }
      filter: { published: { eq: true }, featured: { eq: true } }
    ) {
      nodes {
        strapiId
        title
        videoLink
        publishedOn(formatString: "Do MMM Y")
        published
        featured
        slug
        description
        excerpt
        mediaImage {
          childImageSharp {
            fluid(maxWidth: 620, maxHeight: 373, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        audioLink
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
  }
`

export default IndexPage
