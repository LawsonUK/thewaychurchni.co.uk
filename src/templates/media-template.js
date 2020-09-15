import React from "react"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import ReactPlayer from "react-player/lazy"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

const MediaTemplate = ({ data }) => {
  const media = data.strapiMediaPosts
  return (
    <Layout>
      <SEO title={media.title} />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full">
          <Link to="/media" className="link mb-3">
            Media
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            {media.title}
          </h1>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto flex justify-center px-6 items-center mb-12 flex-col sm:flex-row text-sm">
        <div className="flex items-center justify-center mb-6 sm:mb-0 mr-6">
          <span>
            <Img
              className="rounded-full w-10 mr-4"
              fluid={media.teacher.avatar.childImageSharp.fluid}
              alt={media.teacher.name}
            />
          </span>
          <span className="text-gray-700 font-bold" to="/">
            {media.teacher.name}
          </span>
        </div>
        <span>Published On: {media.publishedOn}</span>
      </section>
      <section className="player pt-12 pb-12 bg-light mb-16">
        <div className="max-w-4xl m-auto pl-4 pr-4 player-wrapper">
          <ReactPlayer
            url={media.videoLink}
            className="react-player"
            width="100%"
            height="100%"
            controls="true"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              facebook: {
                appId: "",
              },
            }}
          />
        </div>
      </section>
      <article className="article max-w-screen-lg m-auto px-6">
        <ReactMarkdown source={media.description} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query MediaQuery($slug: String!) {
    strapiMediaPosts(slug: { eq: $slug }) {
      title
      videoLink
      slug
      publishedOn(formatString: "Do MMM Y")
      media_type {
        type
      }
      description
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
    }
  }
`

export default MediaTemplate
