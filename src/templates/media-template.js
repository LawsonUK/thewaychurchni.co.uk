import React, { useState } from "react"
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
  const siteUrl = data.site.siteMetadata.siteUrl
  let stateFormat = "Video"

  let audioLink = {
    track: "",
    secret_token: "",
  }

  // check url and secret are present
  if (
    media.audioLink &&
    media.audioLink.includes("url") &&
    media.audioLink.includes("secret_token")
  ) {
    audioLink.track = media.audioLink.match(
      new RegExp("url=(.*)%3Fsecret_token")
    )[1]
    audioLink.secret_token = media.audioLink.match(
      new RegExp("secret_token%3D(.*)&color=")
    )[1]
  }

  // check audio exists
  if (location) {
    if (location.state) {
      if (location.state.format) {
        stateFormat = location.state.format
      }
    }
  }
  // check video exists
  if (!media.videoLink) {
    stateFormat = "Audio"
  }
  // check if location contains a format parameter
  const [format, setFormat] = useState(stateFormat)

  const [url, setUrl] = useState(
    format === "Video" ? media.videoLink : audioLink
  )

  const handlePlayer = event => {
    event.preventDefault()

    const format =
      event.currentTarget.outerText === "Video"
        ? event.currentTarget.outerText
        : "Audio"

    setFormat(format)

    const url = format === "Video" ? media.videoLink : audioLink
    setUrl(url)
  }

  const prevMediaLink = pageContext.prevMedia ? (
    <Link
      className="link mb-8 lg:mb-0"
      to={`/media/${pageContext.prevMedia.slug}`}
    >
      {`<< ${pageContext.prevMedia.title}`}
    </Link>
  ) : (
    ""
  )
  const nextMediaLink = pageContext.nextMedia ? (
    <Link className="link" to={`/media/${pageContext.nextMedia.slug}`}>
      {`${pageContext.nextMedia.title} >>`}
    </Link>
  ) : (
    ""
  )

  return (
    <Layout>
      <SEO title={media.title} description={media.excerpt} />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-2 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full">
          <Link to="/media" className="link mb-3">
            Media
          </Link>
          <h1 className="text-2xl md:text-4xl font-extrabold my-6 text-wayblue">
            {media.title}
          </h1>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto flex justify-around items-center flex-col sm:flex-row text-sm mb-8">
        <div>
          <div className="flex items-center justify-center mb-2 sm:mb-0 mr-6">
            <span>
              {media.teacher && media.teacher.avatar && (
                <Img
                  className="rounded-full w-10 mr-4"
                  fluid={media.teacher.avatar.childImageSharp.fluid}
                  alt={media.teacher.name}
                />
              )}
            </span>
            {media.teacher && (
              <span className="text-gray-700 font-bold" to="/">
                {media.teacher.name}
              </span>
            )}
          </div>
        </div>

        <span className="py-4 text-gray-600">
          Published On: {media.publishedOn}
        </span>
        <div className="mt-4 sm:mt-0">
          <EmailShareButton
            url={`${siteUrl}/media/${media.slug}`}
            subject={media.title}
            body={media.description}
            className="mr-2"
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <TwitterShareButton
            url={`${siteUrl}/media/${media.slug}`}
            title={media.title}
            className="mr-2"
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`${siteUrl}/media/${media.slug}`}
            quote={media.title}
            className="mr-2"
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={`${siteUrl}/media/${media.slug}`}
            title={media.title}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </section>
      <section className="player pt-12 pb-12 bg-light mb-16">
        {format === "Video" &&
          (url.includes("facebook") || url.includes("fb.watch")) &&
          media.videoOrientation === "Portrait" && (
            <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center relative">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${url}&show_text=false`}
                height="550px"
                scrolling="no"
                allow="encrypted-media"
                allowFullScreen={true}
                title={media.title}
              ></iframe>
            </div>
          )}

        {format === "Video" &&
          (url.includes("facebook") || url.includes("fb.watch")) &&
          media.videoOrientation !== "Portrait" && (
            <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center relative">
              <ReactPlayer
                key={url}
                url={url}
                controls
                height="489px"
                className="contents"
              />
            </div>
          )}

        {format === "Video" && !url.includes("facebook") && (
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
        )}

        {format === "Audio" &&
          url.track &&
          url.secret_token &&
          media.audioLink && (
            <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                title="Audio Player"
                src={`https://w.soundcloud.com/player/?url=${url.track}%3Fsecret_token%3D${url.secret_token}&color=%2354b0b1&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
              ></iframe>
              <div
                style={{
                  fontSize: "10px",
                  color: "#cccccc",
                  lineBreak: "anywhere",
                  wordBreak: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                  fontWeight: "100",
                }}
              ></div>
            </div>
          )}
        <div
          data-sal="fade"
          className="max-w-4xl m-auto mt-8 flex justify-center items-center"
        >
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
          {audioLink && media.audioLink && (
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    strapiMediaPosts(slug: { eq: $slug }) {
      title
      videoLink
      videoOrientation
      slug
      publishedOn(formatString: "Do MMM Y")
      media_type {
        type
      }
      description
      excerpt
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
    }
  }
`

export default MediaTemplate
