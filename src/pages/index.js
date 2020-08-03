import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const bannerUrl = data.allImageSharp.nodes[0].fluid
  return (
    <Layout>
      <SEO title="Home" />

      <BackgroundImage
        Tag="section"
        className="banner-background"
        fluid={bannerUrl}
        backgroundColor={`#040e18`}
      >
        <section className="banner max-w-screen-xl m-auto flex flex-grow">
          <div className=" pl-4 pr-4 xl:pl-0 xl:pr-0">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-12">
              Proclaiming Jesus as the way <br />
              and living as people of the way
            </h1>
            <div className="absolute">
              <button className="text-gray-100 bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md mr-4">
                Learn more
              </button>
              <button className="bg-gray-100 text-red-500 pt-3 pb-3 pl-6 pr-6 rounded shadow-md">
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <section className="featured-message max-w-screen-xl m-auto">
        <div></div>
        <div>
          <span>Message</span>
          <h2>The Passover Lamb</h2>
          <p>
            Passover was the first & most important meal in Israel’s religious
            life, but as Jesus celebrates it with his disciples he changes the
            script as he reveals Passover’s true meaning.
          </p>
          <div>
            <img src="" alt="johnny" />
            <span>Johnny Carson</span>
          </div>
        </div>
      </section>
      <section className="latest-blog max-w-screen-xl m-auto">
        <div>
          <h2>Latest from the Blog</h2>
          <a href="/blog">Blog</a>
        </div>
        <ul>
          <li>
            <h2>Don't Face Unbelief Alone</h2>
            <span>Mar 7, 2020</span>
            <p>
              Unbelief can become a vicious cycle, leaving us isolated and
              increasingly vulnerable to more and more deception.
            </p>
            <div>
              <img src="" alt="Johnny Carson" />
              <span>Johnny Carson</span>
            </div>
          </li>
          <li>
            <h2>No God but One</h2>
            <span>Mar 7, 2020</span>
            <p>
              Unbelief can become a vicious cycle, leaving us isolated and
              increasingly vulnerable to more and more deception.
            </p>
            <div>
              <img src="" alt="Johnny Carson" />
              <span>Johnny Carson</span>
            </div>
          </li>
          <li>
            <h2>Battling Anxiety with Thankful Prayer</h2>
            <span>Mar 7, 2020</span>
            <p>
              Unbelief can become a vicious cycle, leaving us isolated and
              increasingly vulnerable to more and more deception.
            </p>
            <div>
              <img src="" alt="Johnny Carson" />
              <span>Johnny Carson</span>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allImageSharp(filter: { fluid: { originalName: { eq: "banner.jpg" } } }) {
      nodes {
        fluid(maxWidth: 1440, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
