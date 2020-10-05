import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const latestMedia = ({ media }) => {
  return (
    <section className="featured-message max-w-screen-xl m-auto grid gap-12 xl:gap-24 sm:grid-cols-2 p-6 pt-16 pb-16 xl:pl-0 xl:pr-0">
      <div
        data-sal="slide-right"
        data-sal-delay="0"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <Link to={`/media/${media.slug}`}>
          <Img
            className="rounded"
            fluid={media.featuredImage.childImageSharp.fluid}
            alt={media.title}
          />
        </Link>
      </div>
      <div
        data-sal="slide-left"
        data-sal-delay="0"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <Link
          to={`/media/${media.slug}`}
          className="block text-2xl md:text-3xl font-bold link"
        >
          {media.title}
        </Link>
        <div className="flex flex-col mb-2">
          <span className="text-sm text-gray-600">{media.media_type.type}</span>
          <span className="text-sm text-gray-600">
            Published On: {media.publishedOn}
          </span>
        </div>
        <pre className="mb-6">
          {media.excerpt.split(" ").splice(0, 20).join(" ")}...
        </pre>

        <div>
          {media.videoLink && (
            <Link
              to={`/media/${media.slug}`}
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
              state={{ format: "Video" }}
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
          {media.audioFile && (
            <Link
              to={`/media/${media.slug}`}
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
              state={{ format: "Audio" }}
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
            </Link>
          )}
        </div>

        <div className="flex items-center mt-8">
          <span>
            <Img
              className="rounded-full w-10 xl:w-12 mr-4"
              fluid={media.teacher.avatar.childImageSharp.fluid}
              alt="Jonathan Carson"
            />
          </span>
          <span className="text-gray-700 font-bold" to="/">
            {media.teacher.name}
          </span>
        </div>
      </div>
    </section>
  )
}

export default latestMedia
