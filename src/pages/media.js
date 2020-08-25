import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import LayoutMain from "../components/layout-main"
import SEO from "../components/seo"
import LatestMedia from "../components/latest-media"
import Card from "../components/card"

const MediaPage = ({ data }) => {
  const mediaPage = data.mediaPage.nodes[0] ? data.mediaPage.nodes[0] : false
  const latestMedia = data.latestMedia.nodes[0]
    ? data.latestMedia.nodes[0]
    : false
  const allMedia = data.media.nodes ? data.media.nodes : false
  const [filteredMedia, setFilteredMedia] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const filteredMedia = allMedia.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    searchTerm === ""
      ? setFilteredMedia(allMedia)
      : setFilteredMedia(filteredMedia)
  }, [searchTerm, allMedia])

  return (
    <LayoutMain>
      <SEO title="Media"></SEO>
      <div className="max-w-screen-xl m-auto mt-24 text-center">
        <h3 className="mb-3">Media</h3>
        <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-4 px-24">
          {mediaPage.title}
        </h1>
        <pre className="font-sans whitespace-pre-wrap mb-6">
          {mediaPage.subTitle}
        </pre>
      </div>
      {latestMedia && <LatestMedia media={latestMedia} />}

      <div className="bg-light pb-2 pt-8">
        <div className="p-4 xl:p-0">
          <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-6">
            <div className="relative mx-auto text-gray-600 mb-10 flex justify-center">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full md:w-1/2"
                type="search"
                placeholder="Filter Media"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredMedia &&
                filteredMedia.map(media => {
                  return (
                    <li className="flex flex-col" key={media.strapiId}>
                      <Card data={media} media={true} />
                    </li>
                  )
                })}
            </ul>
          </section>
        </div>
      </div>
    </LayoutMain>
  )
}

export const query = graphql`
  {
    mediaPage: allStrapiMediaPage {
      nodes {
        title
        subTitle
      }
    }
    latestMedia: allStrapiMediaPosts(
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
    media: allStrapiMediaPosts(
      sort: { order: DESC, fields: publishedOn }
      skip: 1
    ) {
      nodes {
        strapiId
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
  }
`

export default MediaPage
