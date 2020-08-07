import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./../images/logo.svg"

const Header = ({ absolute }) => {
  return (
    <div className={`${absolute && "absolute"} z-10 w-full pt-4`}>
      <header className="flex relative justify-between items-center max-w-screen-xl m-auto p-4 xl:p-0 xl:pt-4">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex">
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
        <span className="font-extrabold">Every Sunday @ 11AM</span>
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
