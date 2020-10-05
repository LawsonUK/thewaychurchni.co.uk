import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import AOS from "aos"
import "aos/dist/aos.css"
import "./layout.css"

const LayoutMain = ({ children }) => {
  AOS.init({
    once: true,
    delay: 300,
    offset: 0,
    duration: 700,
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQueryMain {
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
    <div className="banner p-0">
      <Header
        siteTitle={data.site.siteMetadata.title}
        absolute={false}
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

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain
