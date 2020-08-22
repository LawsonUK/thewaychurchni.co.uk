import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import LayoutMain from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const MediaPage = ({ data }) => {
  // const [mediaList, setmediaList] = useState(initialState)
  const messageUrl = data.message.nodes[0].fluid
  const avatarUrl = data.avatar.nodes[0].fluid
  const blog1Url = data.blog1.nodes[0].fluid
  const blog2Url = data.blog2.nodes[0].fluid
  const blog3Url = data.blog3.nodes[0].fluid
  return (
    <LayoutMain>
      <SEO title="Media"></SEO>
      <div className="max-w-screen-xl m-auto mt-24 text-center">
        <h3 className="mb-3">Media</h3>
        <h1 className="text-3xl md:text-4xl font-extrabold text-wayblue mb-4">
          Check out
          <br /> our latest media
        </h1>
        <p>Messages, testimonies and more!</p>
      </div>
      <section className="featured-message max-w-screen-xl m-auto grid gap-12 xl:gap-24 sm:grid-cols-2 p-6 pt-16 xl:pl-0 xl:pr-0 pb-20">
        <div>
          <Link to="/">
            <Img className="rounded" fluid={messageUrl} alt="Message" />
          </Link>
        </div>
        <div>
          <span>Message</span>
          <Link
            to="/"
            className="block text-2xl md:text-3xl font-bold mb-4 link"
          >
            The Passover Lamb
          </Link>
          <p>
            Passover was the first & most important meal in Israel’s religious
            life, but as Jesus celebrates it with his disciples he changes the
            script as he reveals Passover’s true meaning.
          </p>

          <div>
            <Link
              to="/"
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
            >
              Video
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="video-camera w-4 h-4 ml-1"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
            </Link>
            <Link
              to="/"
              className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
            >
              Audio
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="microphone w-4 h-4 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="flex items-center mt-8">
            <Link to="/">
              <Img
                className="rounded-full w-10 xl:w-12 mr-4"
                fluid={avatarUrl}
                alt="Jonathan Carson"
              />
            </Link>
            <Link className="text-gray-700 font-bold" to="/">
              Jonathan Carson
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-light pb-2 pt-8">
        <div className="p-4 xl:p-0">
          <section className="latest-blog max-w-screen-xl m-auto pt-8 pb-8 mb-6">
            <div className="relative mx-auto text-gray-600 mb-10 flex justify-center">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full md:w-1/2"
                type="search"
                name="search"
                placeholder="Filter Media"
              />
            </div>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog1Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Don't Face Unbelief Alone
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog2Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    No God but One
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="rounded overflow-hidden flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white">
                  <Img className="w-full h-64 mb-4 rounded" fluid={blog3Url} />
                  <Link
                    className="text-xl font-bold block text-red-500 mb-2"
                    to="/"
                  >
                    Battling Anxiety with Thankful Prayer
                  </Link>
                  <span className="text-gray-600">Mar 7, 2020</span>
                  <p className="mt-2">
                    Unbelief can become a vicious cycle, leaving us isolated and
                    increasingly vulnerable to more and more deception.
                  </p>
                  <div className="flex mb-8">
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800 mr-4 items-center"
                    >
                      Video
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="video-camera w-4 h-4 ml-1"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-yellow-800 cursor-pointer items-center"
                    >
                      Audio
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="microphone w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center mb-3">
                    <Link to="/">
                      <Img
                        className="rounded-full w-10 mr-4"
                        fluid={avatarUrl}
                        alt="Jonathan Carson"
                      />
                    </Link>
                    <Link className="text-gray-700 font-bold" to="/">
                      Jonathan Carson
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </LayoutMain>
  )
}

export const query = graphql`
  {
    message: allImageSharp(
      filter: { fluid: { originalName: { eq: "message.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: allImageSharp(
      filter: { fluid: { originalName: { eq: "avatar.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog1: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog1.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog2: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog2.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog3: allImageSharp(
      filter: { fluid: { originalName: { eq: "blog3.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default MediaPage
