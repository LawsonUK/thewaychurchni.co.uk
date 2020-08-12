import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./../images/logo.svg"

const Header = ({ absolute, live }) => {
  const liveMenuItem = (
    <li className="mr-6 md:mr-4 lg:mr-8 flex">
      <Link className="link mr-2" to="/live">
        Live
      </Link>
      <svg
        id="icon-camera"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2a2a31"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle class="capture" stroke="#ea3970" cx="12" cy="13" r="4"></circle>
      </svg>
    </li>
  )
  return (
    <div className={`${absolute && "absolute"} z-10 w-full pt-4`}>
      <header
        className={`p-4 flex relative justify-between items-center max-w-screen-xl m-auto xl:p-0 xl:pt-4`}
      >
        <Link className="-mt-4 " to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex ml-24">
          <ul className="flex">
            {live && liveMenuItem}
            <li className="mr-8 md:mr-4 lg:mr-8">
              <Link className="link" to="/church">
                Church
              </Link>
            </li>
            <li className="mr-8 md:mr-4 lg:mr-8">
              <Link className="link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="mr-8 md:mr-4 lg:mr-8">
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
        className={`flex justify-end md:hidden mt-3 pr-4 relative z-10 -mt-1"`}
      >
        <ul className="flex">
          {live && liveMenuItem}
          <li className="mr-6">
            <Link className="link" to="/church">
              Church
            </Link>
          </li>
          <li className="mr-6">
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="mr-6">
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
