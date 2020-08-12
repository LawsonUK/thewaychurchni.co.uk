import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import ReactPlayer from "react-player/lazy"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

const LivePage = () => {
  return (
    <Layout>
      <SEO title="Live" />
      <section className="banner max-w-screen-xl m-auto text-center mt-24 mb-8 flex flex-col pr-4 pl-4 pt-0 xl:p-0">
        <div className="w-full">
          <h3 className="mb-3">Live</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-wayblue">
            We're Streaming Now
          </h1>
          <p>Why not join us for our Sunday service.</p>
        </div>
      </section>
      <section className="player pt-12 pb-12 bg-light mb-24">
        <div className="max-w-4xl m-auto pl-4 pr-4 player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LI5dBkIG5EI"
            className="react-player"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
      </section>
      <section className="contact-details max-w-screen-xl m-auto grid md:grid-cols-3 text-center">
        <div className="mb-12">
          <h3 className="text-black text-2xl font-bold mb-4">Details</h3>
          <a className="link" href="mailTo:info@thewaychurchni.co.uk">
            info@thewaychurchni.co.uk
          </a>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-black">Visit Us</h3>
          <p className="mb-0">Ballyclare town hall</p>
          <p className="mb-0">BT39 9BB</p>
          <p>
            <a
              className="link"
              href="https://goo.gl/maps/8svpGszzstGSKYmz7"
              target="_blank"
              rel="noopener"
            >
              Get Directions
            </a>
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-black text-2xl font-bold mb-4">
            Connect with us
          </h3>
          <ul className="flex mt-5 md:mt-0 justify-center">
            <li className="mr-2">
              <a href="https://twitter.com/thewaychurch4">
                <Icon
                  icon={twitterCircleFilled}
                  style={{ fontSize: "35.259260177612305px", color: "#000000" }}
                />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.facebook.com/thewaychurchni">
                <Icon
                  icon={facebookIcon}
                  style={{ fontSize: "32.851852416992188px", color: "#000000" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thewaychurchni/">
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

export default LivePage
