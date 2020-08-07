/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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
        <footer className="max-w-screen-xl m-auto mt-12 p-4 xl:p-0 xl:pt-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center mb-2">
              <Link to="/">
                <Logo />
              </Link>
              <span className="text-sm mt-6">
                Proclaiming Jesus as the way and living as people of the way
              </span>
            </div>
            <nav className="hidden md:flex mt-4">
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
          <div></div>© {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
