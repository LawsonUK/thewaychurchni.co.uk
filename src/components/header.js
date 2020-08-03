import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./../images/logo.svg"

const Header = ({ data }) => {
  console.log("data", data)
  return (
    <div className="absolute z-10 w-full pt-4">
      <header className="flex relative items-center max-w-screen-xl m-auto">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex ml-12">
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
        <span className="font-extrabold right-0 absolute">
          Every Sunday @ 11AM
        </span>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
