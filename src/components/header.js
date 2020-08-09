import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./../images/logo.svg"

const Header = ({ absolute }) => {
  return (
    <div className={`${absolute && "absolute"} z-10 w-full pt-4`}>
      <header
        className={`${
          absolute && "p-4"
        } flex relative justify-between items-center max-w-screen-xl m-auto xl:p-0 xl:pt-4`}
      >
        <Link className="-mt-4 " to="/">
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
        <span className="font-extrabold mt-6 md:mt-0 text-black">
          Every Sunday @ 11AM
        </span>
      </header>

      <nav
        className={`flex justify-end md:hidden mt-3 ${
          absolute && "pr-4 relative z-10 -mt-1"
        }`}
      >
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
