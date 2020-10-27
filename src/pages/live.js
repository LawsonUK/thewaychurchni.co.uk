import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import ReactPlayer from "react-player/lazy"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

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

const LivePage = ({ data }) => {
  const live = data.livePage.nodes.length > 0 ? data.livePage.nodes[0] : false
  const contactPage =
    data.contactPage.nodes.length > 0 ? data.contactPage.nodes[0] : false

  return (
    <Layout>
      <SEO title="Live" />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 flex flex-col px-6 pt-0 xl:p-0">
        <div className="w-full">
          <h3 className="mb-3">Live</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            We're Streaming Now
          </h1>
          <p>Why not join us for our live service.</p>
        </div>
        <div>
          <EmailShareButton
            url={`https://www.thewaychurchni.co.uk/live`}
            subject="The Way Church Live Service"
            body="Why not join us for our live service"
            className="mr-2"
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <TwitterShareButton
            url={`https://www.thewaychurchni.co.uk/live`}
            title="The Way Church Live Service"
            className="mr-2"
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://www.thewaychurchni.co.uk/live`}
            quote="The Way Church Live Service"
            className="mr-2"
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={`https://www.thewaychurchni.co.uk/live`}
            title="The Way Church Live Service"
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </section>
      <section className="player pt-12 pb-12 bg-light mb-24">
        {live &&
          live.videoLink.includes("facebook") &&
          live.videoOrientation === "Portrait" && (
            <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center relative">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${live.videoLink}&show_text=false`}
                height="550px"
                scrolling="no"
                allow="encrypted-media"
                allowFullScreen={true}
                title={live.title}
              ></iframe>
            </div>
          )}

        {live &&
          live.videoLink.includes("facebook") &&
          live.videoOrientation !== "Portrait" && (
            <div className="max-w-4xl m-auto pl-4 pr-4 flex justify-center items-center relative">
              <ReactPlayer
                key={live.videoLink}
                url={live.videoLink}
                controls
                height="489px"
                className="contents"
              />
            </div>
          )}

        {live && !live.videoLink.includes("facebook") && (
          <div className="max-w-4xl m-auto pl-4 pr-4 player-wrapper">
            <ReactPlayer
              key={live.videoLink}
              url={live.videoLink}
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
      </section>
      <section className="contact-details max-w-screen-xl m-auto grid md:grid-cols-3 text-center">
        <div className="mb-12 flex flex-col">
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
        <div className="mb-12">
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
        <div className="mb-12">
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
    </Layout>
  )
}

export const query = graphql`
  {
    livePage: allStrapiLivePage {
      nodes {
        strapiId
        subTitle
        title
        liveState
        videoLink
        videoOrientation
      }
    }
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
      }
    }
  }
`

export default LivePage
