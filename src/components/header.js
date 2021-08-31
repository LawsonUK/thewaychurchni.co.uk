import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "./../images/logo.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ absolute, live, headerText }) => {
  const [aboutMenu, setAboutMenu] = useState(false)

  const handleAboutMenu = e => {
    e.preventDefault()
    setAboutMenu(!aboutMenu)
  }

  const liveMenuItem = (
    <li className="mr-6 md:mr-4 lg:mr-8 flex">
      <Link
        className="link flex"
        activeClassName="link-active"
        partiallyActive={true}
        to="/live"
      >
        Live
        <svg
          id="icon-camera"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a2a31"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 -mt-1 md:mt-0"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle
            className="capture"
            stroke="#ea3970"
            cx="12"
            cy="13"
            r="4"
          ></circle>
        </svg>
      </Link>
    </li>
  )
  return (
    <div
      className={`${
        absolute &&
        "absolute bg-gradient-to-b from-gray-100 to-transparent pb-64"
      } z-10 w-full pt-4`}
    >
      <header
        className={`p-4 flex relative justify-between items-center max-w-screen-xl m-auto xl:p-0 xl:pt-4`}
      >
        <Link className="-mt-4" to="/">
          <Logo className="logo" />
        </Link>

        <nav className="hidden md:flex ml-24">
          <ul className="flex text-sm lg:text-base mt-2 h-8">
            {live && liveMenuItem}
            <li className="mr-8 md:mr-6 lg:mr-8 relative">
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/about"
                onClick={handleAboutMenu}
              >
                About
              </Link>
              {aboutMenu && (
                <ul className="absolute w-40 bg-white shadow-md px-6 py-4 rounded mt-2">
                  <li className="mb-4">
                    <Link className="link" to="/about">
                      Our Story
                    </Link>
                  </li>
                  <li className="mb-4">
                    <AnchorLink className="link" to="/about#beliefs">
                      Beliefs
                    </AnchorLink>
                  </li>
                  <li className="mb-4">
                    <AnchorLink
                      className="link"
                      to="/about#distinctives-values"
                    >
                      Distinctives & Values
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink className="link" to="/about#eldership">
                      Eldership
                    </AnchorLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="mr-8 md:mr-6 lg:mr-8">
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/im-new"
              >
                I'm New
              </Link>
            </li>
            <li className="mr-8 md:mr-6 lg:mr-8">
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/media"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <span className="font-extrabold mt-6 md:mt-0 text-black">
          {headerText}
        </span>
      </header>

      <nav
        className={`flex justify-end md:hidden mt-3 pr-4 relative z-10 -mt-1"`}
      >
        <ul className="flex text-sm md:text-base">
          {live && liveMenuItem}
          <li className="mr-6 relative">
            <Link
              className="link"
              activeClassName="link-active"
              partiallyActive={true}
              to="/about"
              onClick={handleAboutMenu}
            >
              About
            </Link>
            {aboutMenu && (
              <ul className="absolute w-40 bg-white shadow-md px-6 py-4 rounded mt-2">
                <li className="mb-4">
                  <Link className="link" to="/about">
                    Our Story
                  </Link>
                </li>
                <li className="mb-4">
                  <AnchorLink className="link" to="/about#beliefs">
                    Beliefs
                  </AnchorLink>
                </li>
                <li className="mb-4">
                  <AnchorLink className="link" to="/about#distinctives-values">
                    Distinctives & Values
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink className="link" to="/about#eldership">
                    Eldership
                  </AnchorLink>
                </li>
              </ul>
            )}
          </li>
          <li className="mr-6">
            <Link
              className="link"
              activeClassName="link-active"
              partiallyActive={true}
              to="/im-new"
            >
              I'm New
            </Link>
          </li>
          <li className="mr-6">
            <Link
              className="link"
              activeClassName="link-active"
              partiallyActive={true}
              to="/media"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClassName="link-active"
              partiallyActive={true}
              to="/contact"
            >
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
