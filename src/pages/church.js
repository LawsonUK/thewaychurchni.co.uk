import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ChurchPage = ({ data }) => {
  const church1Url = data.church1.nodes[0].fluid
  const church2Url = data.church2.nodes[0].fluid
  const church3Url = data.church3.nodes[0].fluid
  const church4Url = data.church4.nodes[0].fluid
  const church5Url = data.church5.nodes[0].fluid
  const avatarUrl = data.avatar.nodes[0].fluid

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
      <section className="team bg-dark rounded max-w-screen-xl m-auto p-6 md:p-6 pt-12">
        <div className="flex justify-center font-bold items-center mb-12">
          <h2 className="text-gray-400 text-xl font-light mt-0 md:mt-6">
            Team
          </h2>
        </div>
        <ul className="grid gap-4 xl:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pb-0 md:pb-8">
          <li className="flex flex-col md:col-span-2 xl:col-span-1">
            <div className="flex flex-col flex-grow xl:items-start bg-darker p-6 rounded">
              <div className="flex items-center mb-6 md:pl-20 md:pr-20 xl:pl-0 xl:pr-0">
                <Img
                  className="rounded-full w-24 mr-6"
                  fluid={avatarUrl}
                  alt="Johnny Carson"
                />
                <h3 className="text-2xl text-gray-100">Johnny Carson</h3>
              </div>
              <div className="md:pl-20 md:pr-20 xl:pl-0 xl:pr-0">
                <p className="text-gray-500 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus quae maiores reprehenderit eum modi
                  exercitationem. Excepturi deleniti quisquam nam quidem
                  necessitatibus veritatis sit, consequatur reprehenderit,
                  temporibus consectetur amet eius modi?
                </p>
                <p className="text-gray-500 mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, porro, minus dolores ut ab, magnam autem optio
                  numquam totam suscipit atque? Debitis consequuntur eos beatae
                  porro magnam eaque cumque quos?
                </p>
              </div>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col flex-grow bg-darker p-6 rounded">
              <div className="flex items-center mb-6">
                <Img
                  className="rounded-full w-24 mr-6"
                  fluid={avatarUrl}
                  alt="Johnny Carson"
                />
                <h3 className="text-2xl text-gray-100">Stuart Elliott</h3>
              </div>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus quae maiores reprehenderit eum modi exercitationem.
                Excepturi deleniti quisquam nam quidem necessitatibus veritatis
                sit, consequatur reprehenderit, temporibus consectetur amet eius
                modi?
              </p>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, porro, minus dolores ut ab, magnam autem optio
                numquam totam suscipit atque? Debitis consequuntur eos beatae
                porro magnam eaque cumque quos?
              </p>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col flex-grow bg-darker p-6 rounded">
              <div className="flex items-center mb-6">
                <Img
                  className="rounded-full w-24 mr-6"
                  fluid={avatarUrl}
                  alt="Johnny Carson"
                />
                <h3 className="text-2xl text-gray-100">Chris McKinven</h3>
              </div>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus quae maiores reprehenderit eum modi exercitationem.
                Excepturi deleniti quisquam nam quidem necessitatibus veritatis
                sit, consequatur reprehenderit, temporibus consectetur amet eius
                modi?
              </p>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, porro, minus dolores ut ab, magnam autem optio
                numquam totam suscipit atque? Debitis consequuntur eos beatae
                porro magnam eaque cumque quos?
              </p>
            </div>
          </li>
        </ul>
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
    avatar: allImageSharp(
      filter: { fluid: { originalName: { eq: "avatar.jpg" } } }
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
