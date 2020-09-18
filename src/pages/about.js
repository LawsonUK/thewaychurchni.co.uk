import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutPage = ({ data }) => {
  const aboutPage = data.aboutPage.nodes[0]
  const gallery = aboutPage.gallery[0]
  const image1 = gallery.image1.childImageSharp.fluid
  const image2 = gallery.image2.childImageSharp.fluid
  const image3 = gallery.image3.childImageSharp.fluid
  const image4 = gallery.image4.childImageSharp.fluid
  const image5 = gallery.image5.childImageSharp.fluid

  let teamCount = 0
  const team = aboutPage.team.map(member => {
    const html =
      teamCount === 0 ? (
        <li
          key={member.id}
          className="flex flex-col md:col-span-2 xl:col-span-1"
        >
          <div className="rounded flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white pt-8 pb-8 md:px-8">
            <div className="flex items-center mb-6 md:px-20 xl:px-0">
              <Img
                className="rounded-full w-20 mr-6"
                fluid={member.image.childImageSharp.fluid}
                alt={member.title}
              />
              <h3 className="text-2xl text-wayblue">{member.title}</h3>
            </div>
            <div className="px-2 md:px-20 xl:px-0">
              <pre>{member.body}</pre>
            </div>
          </div>
        </li>
      ) : (
        <li key={member.id} className="flex flex-col">
          <div className="rounded flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white pt-8 pb-8 md:pl-8 md:pr-8">
            <div className="flex items-center mb-6">
              <Img
                className="rounded-full w-20 mr-6"
                fluid={member.image.childImageSharp.fluid}
                alt={member.title}
              />
              <h3 className="text-2xl text-wayblue">{member.title}</h3>
            </div>
            <pre>{member.body}</pre>
          </div>
        </li>
      )
    teamCount++
    return html
  })

  let halfCount = 0
  let leftColBeliefs = false
  let rightColBeliefs = false

  if (aboutPage.whatWeBelieve) {
    halfCount = aboutPage.whatWeBelieve.length / 2 + 1
  }

  if (halfCount > 0) {
    let countLeft = 0
    leftColBeliefs = aboutPage.whatWeBelieve.map(belief => {
      const html =
        countLeft <= halfCount ? (
          <div key={belief.id}>
            <h3 className="text-xl mb-4 mt-4">{belief.title}</h3>
            <pre>{belief.text}</pre>
          </div>
        ) : (
          ""
        )

      countLeft++
      return html
    })

    let countRight = 0
    rightColBeliefs = aboutPage.whatWeBelieve.map(belief => {
      const html =
        countRight > halfCount ? (
          <div key={belief.id}>
            <h3 className="text-xl mb-4 mt-4">{belief.title}</h3>
            <pre>{belief.text}</pre>
          </div>
        ) : (
          ""
        )

      countRight++
      return html
    })
  }

  return (
    <Layout absolute="true">
      <SEO title="About" />
      <section
        id="our-story"
        className="banner text-center mt-24 mb-8 flex flex-col max-w-screen-xl m-auto"
      >
        <div className="w-full">
          <h3 className="mb-3 ">About</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-wayblue">
            {aboutPage.title}
          </h1>
        </div>

        <ul className="gallery grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 w-full p-4 shadow-lg px-6">
          <li className="bg-red-800 col-span-2 row-span-2 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image1}
              alt="banner image 1"
            />
          </li>
          <li className="bg-red-600 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image2}
              alt="banner image 2"
            />
          </li>
          <li className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1">
            <Img
              className="flex flex-grow"
              fluid={image3}
              alt="banner image 3"
            />
          </li>
          <li className="bg-red-200 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image4}
              alt="banner image 4"
            />
          </li>
          <li className="bg-red-100 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={image5}
              alt="banner image 5"
            />
          </li>
        </ul>
      </section>

      <section className="flex flex-col lg:max-w-4xl lg:ml-auto lg:mr-auto lg:mt-12 p-4 px-6 lg:p-12 pb-12 lg:mb-16 shadow-lg">
        <div>
          <h2 className="mb-4 text-wayblue">{aboutPage.ourStoryTitle}</h2>
          <pre>{aboutPage.ourStoryText}</pre>
        </div>
      </section>

      <section
        id="core-values"
        className="flex flex-col mb-4 lg:mb-16 bg-light px-6"
      >
        <div className="max-w-screen-xl ml-auto mr-auto pb-20">
          <h2 className="mt-12 lg:mt-16 mb-4 xl:pl-0 text-wayblue lg:max-w-4xl">
            {aboutPage.beliefsTitle}
          </h2>
          <div className="lg:m-auto xl:p-0 grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div>{leftColBeliefs}</div>
            <div>{rightColBeliefs}</div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:max-w-4xl lg:ml-auto lg:mr-auto mt-12 p-4 px-6 pb-24 lg:p-12 lg:mb-16 shadow-lg">
          <h2 className="mb-4 text-wayblue xl:text-center xl:pb-8">
            {aboutPage.whatToExpectTitle}
          </h2>
          <pre>{aboutPage.whatToExpectText}</pre>
        </div>
      </section>
      <section
        id="eldership"
        className="bg-light p-4 pt-12 pb-16 md:pt-8 md:pb-16"
      >
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-3xl font-bold text-wayblue mt-0 md:mt-6 md:text-center mb-8">
            Eldership
          </h2>
          <ul className="grid gap-4 xl:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {team}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    aboutPage: allStrapiChurchPage {
      nodes {
        ourStoryText
        ourStoryTitle
        beliefsTitle
        whatWeBelieve {
          text
          title
          id
        }
        whatToExpectText
        whatToExpectTitle
        title
        team {
          id
          title
          body
          image {
            childImageSharp {
              fluid(maxWidth: 80, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        gallery {
          image1 {
            childImageSharp {
              fluid(maxWidth: 620, maxHeight: 466, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 306, maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image4 {
            childImageSharp {
              fluid(maxWidth: 306, maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          image5 {
            childImageSharp {
              fluid(maxWidth: 306, maxHeight: 229, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default AboutPage
