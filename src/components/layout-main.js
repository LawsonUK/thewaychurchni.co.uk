import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const LayoutMain = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryMain {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="banner p-4 xl:p-0">
      <Header siteTitle={data.site.siteMetadata.title} absolute={false} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain
