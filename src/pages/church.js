import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ChurchPage = ({ data }) => {
  const church1Url = data.church1.nodes[0].fluid
  const church2Url = data.church2.nodes[0].fluid
  const church3Url = data.church3.nodes[0].fluid
  const church4Url = data.church4.nodes[0].fluid
  const church5Url = data.church5.nodes[0].fluid
  return (
    <Layout>
      <SEO title="Church" />
      <section className="banner text-center mt-24 mb-8 md:mb-16 flex flex-col">
        <div className="w-full">
          <h3 className="mb-3 ">Church</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-12">
            The Way Church
          </h1>
        </div>

        <ul className="grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 w-full">
          <li className="bg-red-800 col-span-2 row-span-2 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={church1Url}
              alt="Johnny Carson"
            />
          </li>
          <li className="bg-red-600 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={church2Url}
              alt="Johnny Carson"
            />
          </li>
          <li className="bg-red-400 rounded overflow-hidden flex flex-col md:row-span-2 lg:row-span-1">
            <Img
              className="flex flex-grow"
              fluid={church3Url}
              alt="Johnny Carson"
            />
          </li>
          <li className="bg-red-200 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={church4Url}
              alt="Johnny Carson"
            />
          </li>
          <li className="bg-red-100 rounded overflow-hidden flex flex-col">
            <Img
              className="flex flex-grow"
              fluid={church5Url}
              alt="Johnny Carson"
            />
          </li>
        </ul>
      </section>

      <section className="grid md:grid-cols-2 md:gap-12 items-center mb-12 md:mb-12">
        <div>
          <h2 className="mb-4 text-black">Our Story</h2>
          <p>
            It has been said that God’s way is like Hebrew – it can only be read
            backwards! In some respects that is like our own story.
          </p>
          <p>
            In 2014 Johnny Carson and Stuart Elliott met through a mutual
            friend. Johnny was happily pastoring in a church and Stuart was
            seeking a home church to be rooted in with his family. Both men were
            convinced of the need for local churches to be ruthlessly committed
            to both serious attention to the word of God and serious pursuit of
            all the gifts of the Holy Spirit – arriving at this position from
            two different ends of the spectrum.
          </p>
          <p>
            In early 2017, Johnny began to feel stirred and unsettled in
            ministry and after a season of seeking the Lord, he and his wife
            Sandra were convinced the Lord was calling them to step out in faith
            and plant a church. Johnny announced his notice and left his church
            at the end of 2017.
          </p>
          <p>
            Ballyclare seemed to be the right fit – not because there was no
            gospel witness at all, but because it was – and is, a fast-growing
            area strategically sitting in the heart of the wider Newtownabbey
            area.
          </p>
        </div>
        <div>
          <Img className="rounded" fluid={church4Url} alt="Johnny Carson" />
        </div>
      </section>

      <section className="flex flex-col mb-16">
        <div className="flex flex-row mb-8 lg:mb-16">
          <Img
            className="rounded flex flex-grow w-1/2 mr-4"
            fluid={church2Url}
            alt="Johnny Carson"
          />
          <Img
            className="rounded flex flex-grow w-1/2"
            fluid={church3Url}
            alt="Johnny Carson"
          />
        </div>
        <div className="flex flex-col lg:max-w-4xl lg:m-auto">
          <h2 className="mb-4 text-black">What to Expect</h2>
          <p>
            We meet in Ballyclare town hall on a Sunday morning, but if you find
            the car park full, the square car park beside it is free. When you
            arrive, someone will greet you at the door and direct you upstairs
            where we have our service. A lift is available for those with
            mobility issues!
          </p>
          <p>
            We are relaxed but intentional. There is no dress code so please
            just wear what is comfortable. We try to begin at 11am and our
            service in total usually lasts for around 1hr and 45mins. The
            service contains all elements of typical Christian worship – we sing
            songs, read scripture, pray and hear it expounded. Children of
            primary school age can leave just before the sermon to be taught
            downstairs on their level by trained, competent teachers.
          </p>
          <p>
            We also take communion. The order of service may vary from time to
            time so that we don’t become too mechanical and worship doesn’t
            become too predictable. Two things about the elements of our worship
            are worth commenting on.
          </p>
          <p>
            Firstly, our prayer time is congregational. It is usually led by one
            of our elders in opening and closing it – but everyone – men and
            women, are encouraged to participate. One reason for this is that we
            also want to create an environment for the Lord to speak to us in
            other ways such as spiritual gifts and spontaneous worship. We pray
            for our community, the other gospel churches around us and any needs
            which people want us to know about. The elders are always available
            after the service for private prayer and can anoint with oil if you
            so desire.
          </p>
          <p>
            Secondly, we take communion during a time of singing. People usually
            form a queue and walk up to take it as families and couples. We feel
            this reflects the joy of being welcomed to Christ’s table and gets
            rid of the awkward silence which often accompanies the table, that
            often goes under the name of “reverence”.
          </p>
          <p>
            We also have tea and coffee after the service every Sunday for folk
            to catch up with one another. Please do stay if you can!
          </p>
        </div>
      </section>
      <section className="team mb-24">
        <div class="py-12 bg-white">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                The Team
              </h3>
            </div>

            <div class="mt-10">
              <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                <li className="col-span-2">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Johnny Carson
                      </h4>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10 md:mt-0">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Stuart Elliott
                      </h4>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10 md:mt-0">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Transfers are instant
                      </h4>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    church1: allImageSharp(
      filter: { fluid: { originalName: { eq: "church1.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 640, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church2: allImageSharp(
      filter: { fluid: { originalName: { eq: "church2.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church3: allImageSharp(
      filter: { fluid: { originalName: { eq: "church3.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church4: allImageSharp(
      filter: { fluid: { originalName: { eq: "church4.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    church5: allImageSharp(
      filter: { fluid: { originalName: { eq: "church5.jpg" } } }
    ) {
      nodes {
        fluid(maxWidth: 620, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ChurchPage
