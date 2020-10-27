import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

const ContactPage = ({ data }) => {
  const contactPage = data.contactPage.nodes[0]
  const gallery = contactPage.gallery
  const image1 = gallery.image1.childImageSharp.fluid
  const image2 = gallery.image2.childImageSharp.fluid
  const image3 = gallery.image3.childImageSharp.fluid
  const image4 = gallery.image4.childImageSharp.fluid
  const image5 = gallery.image5.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 md:mb-24 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full">
          <h3 className="mb-3">Contact</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            {contactPage.title}
          </h1>
          <pre>{contactPage.subTitle}</pre>
        </div>
      </section>
      <section className="contact-details max-w-screen-xl m-auto grid md:grid-cols-3 text-center">
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="mb-12 flex flex-col"
        >
          <h3 className="text-black text-2xl font-bold mb-4">Details</h3>
          <a
            className="link mb-2"
            href={"mailto:" + contactPage.email + "?subject=Hi There"}
          >
            {contactPage.email}
          </a>
          <a href={"tel:" + contactPage.telephone + ""} className="link">
            {contactPage.telephone}
          </a>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-black">Visit Us</h3>
          <pre>{contactPage.address}</pre>
          <a
            className="link"
            href={contactPage.directionsLink}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="mb-12"
        >
          <h3 className="text-black text-2xl font-bold mb-4">
            Connect with us
          </h3>
          <ul className="flex mt-5 md:mt-0 justify-center">
            <li className="mr-2">
              <a href={contactPage.twitterLink}>
                <Icon
                  icon={twitterCircleFilled}
                  style={{ fontSize: "35.259260177612305px", color: "#000000" }}
                />
              </a>
            </li>
            <li className="mr-2">
              <a href={contactPage.facebookLink}>
                <Icon
                  icon={facebookIcon}
                  style={{ fontSize: "32.851852416992188px", color: "#000000" }}
                />
              </a>
            </li>
            <li>
              <a href={contactPage.InstagramLink}>
                <Icon
                  icon={circleinstagramIcon}
                  style={{ fontSize: "33.851852416992188px", color: "#000000" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ul className="gallery max-w-screen-xl m-auto grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 p-4 shadow-lg px-6">
        <li
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="bg-red-800 col-span-2 row-span-2 rounded overflow-hidden flex flex-col"
        >
          <Img className="flex flex-grow" fluid={image1} alt="Image 1" />
        </li>
        <li
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="bg-red-600 rounded overflow-hidden flex flex-col"
        >
          <Img className="flex flex-grow" fluid={image2} alt="Image 2" />
        </li>
        <li
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1"
        >
          <Img className="flex flex-grow" fluid={image3} alt="Image 3" />
        </li>
        <li
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="bg-red-200 rounded overflow-hidden flex flex-col"
        >
          <Img className="flex flex-grow" fluid={image4} alt="Image 4" />
        </li>
        <li
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="bg-red-100 rounded overflow-hidden flex flex-col"
        >
          <Img className="flex flex-grow" fluid={image5} alt="Image 5" />
        </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    contactPage: allStrapiContactPage {
      nodes {
        title
        subTitle
        email
        telephone
        address
        directionsLink
        twitterLink
        facebookLink
        InstagramLink
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

export default ContactPage
