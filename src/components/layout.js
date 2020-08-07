/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

import Header from "./header"
import Logo from "./../images/logo.svg"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="max-w-screen-xl m-auto mt-12 p-4 xl:p-0 xl:pt-4 mb-10">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-start items-center mb-5">
              <Link to="/">
                <Logo />
              </Link>
              <span className="mt-10 ml-2 text-xs">
                Proclaiming Jesus as the way and living as people of the way
              </span>
            </div>
            <nav className="md:flex md:mt-4 mb-4 md:mb-0">
              <ul className="flex">
                <li className="mr-8">
                  <Link className="link" to="/church">
                    Church
                  </Link>
                </li>
                <li className="mr-8">
                  <Link className="link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="mr-8">
                  <Link className="link" to="/media">
                    Media
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr />
          <div className="mt-6 sm:flex sm:justify-between sm:items-center sm:mt-3">
            <span className="text-xs">
              Copyright © {new Date().getFullYear()} The Way Church. All Rights
              Reserved
            </span>
            <ul className="flex mt-5 md:mt-0">
              <li className="mr-2">
                {/* <a href="/" target="blank"> */}
                <Icon
                  icon={twitterCircleFilled}
                  style={{ fontSize: "27.259260177612305px" }}
                />
                {/* </a> */}
              </li>
              <li className="mr-2">
                {/* <a href="/" target="blank"> */}
                <Icon
                  icon={facebookIcon}
                  style={{ fontSize: "24.851852416992188px" }}
                />
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/" target="blank"> */}
                <Icon
                  icon={circleinstagramIcon}
                  style={{ fontSize: "25.851852416992188px" }}
                />
                {/* </a> */}
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
