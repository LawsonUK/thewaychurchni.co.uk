import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const card = ({ data, media = false }) => {
  const url = media ? `/media/${data.slug}` : `/blog/${data.slug}`
  return (
    <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-5 bg-white">
      <Link to={url}>
        <Img
          className="w-full h-64 mb-4 rounded"
          fluid={data.featuredImage.childImageSharp.fluid}
        />
      </Link>
      <Link className="text-xl font-bold block text-red-500 mb-2" to={url}>
        {data.title}
      </Link>
      {media && (
        <span className="text-sm text-gray-600">{data.media_type.type}</span>
      )}
      <span className="text-sm text-gray-600">
        Published On: {data.publishedOn}
      </span>
      <pre className="mt-2 mb-8">
        {data.excerpt.split(" ").splice(0, 20).join(" ")}...
      </pre>
      {media ? (
        <>
          <div className="flex mb-8">
            {data.videoLink && (
              <Link
                to={url}
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
            {data.audioLink && (
              <Link
                to={url}
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
          <div className="flex items-center mb-3">
            <span>
              {data.teacher && data.teacher.avatar && (
                <Img
                  className="rounded-full w-10 mr-4"
                  fluid={data.teacher.avatar.childImageSharp.fluid}
                  alt={data.teacher.name}
                />
              )}
            </span>
            <span className="text-gray-700 font-bold" to="/">
              {data.teacher && data.teacher.name}
            </span>
          </div>
        </>
      ) : (
        <div className="flex items-center mb-3">
          <span>
            <Img
              className="rounded-full w-10 mr-4"
              fluid={data.author.avatar.childImageSharp.fluid}
              alt={data.author.name}
            />
          </span>
          <span className="text-gray-700 font-bold" to="/">
            {data.author.name}
          </span>
        </div>
      )}
    </div>
  )
}

export default card
