import React, { useState, useEffect } from "react"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import ReactPlayer from "react-player/lazy"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

const MediaTemplate = ({ data, pageContext, location }) => {
  const media = data.strapiMediaPosts
  let stateFormat = "Video"
  if (location) {
    if (location.state) {
      if (location.state.format) {
        stateFormat = location.state.format
      }
    }
  }
  // check if location contains a format parameter
  const [format, setFormat] = useState(stateFormat)

  const [url, setUrl] = useState(
    format === "Video" ? media.videoLink : media.audioFile.publicURL
  )

  const handlePlayer = event => {
    event.preventDefault()

    const format =
      event.currentTarget.outerText === "Video"
        ? event.currentTarget.outerText
        : "Audio"

    setFormat(format)
  }

  useEffect(() => {
    const url = format === "Video" ? media.videoLink : pageContext.audioUrl
    setUrl(url)
  }, [format, media, pageContext.audioUrl])

  const prevMediaLink = pageContext.prevMedia ? (
    <Link
      className="link mb-8 lg:mb-0"
      to={`/media/${pageContext.prevMedia.slug}`}
    >
      {pageContext.prevMedia.title}
    </Link>
  ) : (
    ""
  )
  const nextMediaLink = pageContext.nextMedia ? (
    <Link className="link" to={`/media/${pageContext.nextMedia.slug}`}>
      {pageContext.nextMedia.title}
    </Link>
  ) : (
    ""
  )

  return (
    <Layout>
      <SEO title={media.title} />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-2 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full">
          <Link to="/media" className="link mb-3">
            Media
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            {media.title}
          </h1>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto flex justify-center px-6 items-center flex-col text-sm">
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
        <span className="py-4">Published On: {media.publishedOn}</span>
        <div>
          <EmailShareButton
            url={`https://www.thewaychurchni.co.uk/media/${media.slug}`}
            quote={media.title}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <TwitterShareButton
            url={`https://www.thewaychurchni.co.uk/media/${media.slug}`}
            quote={media.title}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://www.thewaychurchni.co.uk/media/${media.slug}`}
            quote={media.title}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={`https://www.thewaychurchni.co.uk/media/${media.slug}`}
            quote={media.title}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        <div className="mt-4 mb-12">
          {media.videoLink && (
            <button
              onClick={handlePlayer}
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center cursor-pointer"
            >
              Video
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="video-camera w-4 h-4 ml-1"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
            </button>
          )}
          {media.audioFile && (
            <button
              onClick={handlePlayer}
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
            >
              Audio
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="microphone w-4 h-4 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </section>
      <section className="player pt-12 pb-12 bg-light mb-16">
        {format === "Video" ? (
          <div className="max-w-4xl m-auto pl-4 pr-4 player-wrapper">
            <ReactPlayer
              key={url}
              url={url}
              className="react-player"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 1,
                  },
                },
              }}
            />
          </div>
        ) : (
          <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center">
            <audio controls="true" src={url} className="w-full"></audio>
          </div>
        )}
      </section>
      <article className="article max-w-screen-lg m-auto px-6">
        <ReactMarkdown source={media.description} />
      </article>
      <section className="links max-w-screen-xl m-auto flex flex-col lg:flex-row lg:justify-between text-center px-6 py-6 xl:px-0 pt-16">
        {prevMediaLink} {nextMediaLink}
      </section>
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
