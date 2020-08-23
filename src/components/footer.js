import React from "react"
import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"
import { Link } from "gatsby"
import Logo from "./../images/logo.svg"

const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto mt-8 p-4 xl:p-0 xl:pt-4 mb-10">
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
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/church"
              >
                Church
              </Link>
            </li>
            <li className="mr-8">
              <Link
                className="link"
                activeClassName="link-active"
                partiallyActive={true}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="mr-8">
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
      <hr />
      <div className="mt-6 sm:flex sm:justify-between sm:items-center sm:mt-3">
        <span className="text-xs">
          Copyright © {new Date().getFullYear()} The Way Church. All Rights
          Reserved
        </span>
        <ul className="flex mt-5 md:mt-0">
          <li className="mr-2">
            <a href="https://twitter.com/thewaychurch4">
              <Icon
                icon={twitterCircleFilled}
                style={{ fontSize: "27.259260177612305px", color: "#000000" }}
              />
            </a>
          </li>
          <li className="mr-2">
            <a href="https://www.facebook.com/thewaychurchni">
              <Icon
                icon={facebookIcon}
                style={{ fontSize: "24.851852416992188px", color: "#000000" }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/thewaychurchni">
              <Icon
                icon={circleinstagramIcon}
                style={{ fontSize: "25.851852416992188px", color: "#000000" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
