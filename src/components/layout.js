/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allStrapiHomePage {
        nodes {
          headerText
        }
      }
      allStrapiLivePage {
        nodes {
          liveState
        }
      }
    }
  `)

  return (
    <div>
      <Header
        siteTitle={data.site.siteMetadata.title}
        absolute={true}
        live={data.allStrapiLivePage.nodes[0].liveState}
        headerText={data.allStrapiHomePage.nodes[0].headerText}
      />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
