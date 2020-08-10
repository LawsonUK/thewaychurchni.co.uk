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
    <Layout absolute="true">
      <SEO title="Church" />
      <section className="banner text-center mt-24 mb-8 md:mb-16 flex flex-col max-w-screen-xl m-auto">
        <div className="w-full">
          <h3 className="mb-3 ">Church</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-wayblue">
            The Way Church
          </h1>
        </div>

        <ul className="grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-2 w-full p-4 shadow-lg">
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

      <section className="max-w-screen-xl m-auto grid md:grid-cols-2 md:gap-12 items-center mb-12 md:mb-12 p-4 xl:p-0">
        <div>
          <h2 className="mb-4 text-wayblue">Our Story</h2>
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
        <div className=" p-4 shadow-lg">
          <Img className="rounded" fluid={church4Url} alt="Johnny Carson" />
        </div>
      </section>

      <section className="max-w-screen-xl m-auto flex flex-col mb-4 md:mb-16">
        <div className="flex flex-row mb-8 lg:mb-16  p-4 shadow-lg">
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

        <h2 className="mt-4 p-4 xl:pb-16 text-wayblue lg:max-w-4xl lg:m-auto">
          What We Believe
        </h2>
        <div className="lg:m-auto p-4 xl:p-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="text-xl mb-4">Statement of Faith</h3>
            <p>
              This statement of faith reflects an evangelical, reformed and
              charismatic theology. It is evangelical because the gospel is of
              first importance; it is reformed because we believe God is
              sovereign to save; and it is charismatic because we believe in the
              continuation of all spiritual gifts listed in the New Testament.
            </p>
            <h3 className="text-xl mb-4">The Scriptures</h3>
            <p>
              We accept the Bible (39 books of the Old Testament and the 27
              books of the New Testament) as the written Word of God. We believe
              the entire scriptures to be infallible (without mistakes) and
              inerrant (without error) meaning it is fully trustworthy. The
              Scriptures are the authoritative and normative rule and guide of
              all Christian life, practice and doctrine. They are totally
              sufficient and must not be added to, superseded or changed by
              later tradition, extra-biblical revelation or worldly wisdom.
              Every doctrinal formulation, whether of creed, confession or
              claims of personal revelation and prophecy, must be put to the
              test with the full counsel of God in Holy Scripture. Each book is
              to be interpreted according to its context and purpose and in
              reverent obedience to the Lord who speaks through it in living
              power. All believers are exhorted to study the Scriptures and
              diligently apply them to their lives.
            </p>
            <h3 className="text-xl mb-4">God</h3>
            <p>
              We believe there is one God; infinite and eternal, almighty and
              perfect in holiness, truth and love. In the unity of the godhead,
              there are three Persons, Father, Son and Holy Spirit, co-existent,
              co-equal, and co-eternal. God the Father is the Creator of heaven
              and earth. By His word and for His glory, He freely and
              supernaturally created the world out of nothing. Through the same
              word He daily sustains all His creatures. He rules overall and,
              together with the Son and the Spirit, is the only true God. His
              plans and purposes cannot be thwarted. He is faithful to every
              promise, works all things together for good to those who love Him
              and in His unfathomable grace gave His Son Jesus Christ for
              mankind's redemption. He made all things for the praise of His
              glory and intends for humanity in particular, to live in
              fellowship with Himself.
            </p>
            <h3 className="text-xl mb-4">Jesus Christ</h3>

            <p>
              We believe that Jesus Christ is the only begotten Son of God who
              is the eternal Word made flesh. He was supernaturally conceived by
              the Holy Spirit, born of the virgin Mary and in his being He is
              both fully God and fully man. He was always with God and is God.
              By him and through Him and for him were all things created. He was
              before all things and in Him all things hold together by the word
              of His power. He is the image of the invisible God, the first-born
              over all creation and in Him dwells the fullness of the Godhead
              bodily. He is the only Saviour for the sins of the world having
              shed His blood and subsequently died on the cross. By His death in
              our place, He revealed the divine love and upheld divine justice,
              removing our guilt and reconciling us to God. Having redeemed us
              from sin, the third day He rose bodily from the grave for our
              justification, victorious over death and the powers of darkness
              and for a period of 40 days appeared to over 500 witnesses
              performing many convincing proofs of His resurrection. He ascended
              into heaven where, at God's right hand he fulfils the roles of
              Prophet (as he speaks through his word), Priest (as he intercedes
              for his people) and King (as he rules overall). He is the Head of
              His body, the church, and should be adored, loved, served and
              obeyed by all as his inevitable return is waited for.
            </p>
            <h3 className="text-xl mb-4">The Holy Spirit</h3>

            <p>
              We believe that the Holy Spirit is the third person of the trinity
              and is the Lord and Giver of life who convicts the world of sin,
              righteousness and judgment. His ministry is crucial for the work
              of the gospel in the lives of both unbelievers and believers.
              Through the proclamation of the gospel He persuades individuals to
              repent of their sins and confess Jesus as Lord. The Holy Spirit
              unites believers to Jesus Christ in faith, brings about the new
              birth and dwells within the regenerate. He further is involved in
              sanctifying the believer as they become increasingly conformed to
              the image of Christ. He does this by using the means of grace
              provided for the believer in Bible study, prayer, fellowship & The
              Lord’s Supper. He has come to glorify the Son who in turn came to
              glorify the Father. He will lead the church into a right
              understanding and rich application of the truth of God's Word.
            </p>
            <p>
              The Holy Spirit also empowers believers for Christian witness and
              service. The promise of the Father is freely available to all who
              believe in Jesus Christ, thereby enabling them to exercise
              spiritual power in ministry and mission. The Holy Spirit desires
              to continually fill each believer with power to witness and
              imparts Spiritual gifts for the edification of the Body and the
              work of ministry in the world. All the gifts of the Holy Spirit at
              work in the church of the first century are available today and
              are to be earnestly desired and practiced in an orderly manner in
              accordance with the scriptures. The gifts are essential for the
              mission of the Church in the world today.
            </p>

            <h3 className="text-xl mb-4">The Devil</h3>

            <p>
              We believe in a real, literal, personal Devil who is the archenemy
              of God and of God’s people. He is completely opposed to everything
              that is godly and true. He is called many names in the scriptures
              including “the destroyer”, “Accuser”, “adversary”, “Liar”,
              “murderer”, “deceiver”, “evil one” and “enemy”. He is a creature,
              originally created in perfect goodness and beauty but who
              subsequently fell and is accountable for his actions as every
              created being is for their rebellion against God. He is not equal
              with God in any of his attributes and even as he plans his wicked
              schemes, is used in sovereign ways by God to execute his wise,
              good and holy purposes for His glory and the believer’s joy. He
              attacks God’s people through lies, temptations and spiritual
              warfare but his time is short. When Christ returns he shall banish
              Satan forever along with the whole evil realm and the unrepentant
              in the bottomless pit where he will be locked and sealed for all
              eternity.{" "}
            </p>

            <h3 className="text-xl mb-4">Humanity</h3>

            <p>
              We believe that God made humanity — male and female in His own
              image as the crown of creation that they might glorify Him through
              enjoying fellowship with Him. In doing this he also made the
              blueprint for heterosexual union as the biblical design for
              marriage. Tempted by the Devil, mankind rebelled against God.
              Being estranged from their Maker, yet responsible to Him, they
              became subject to divine wrath, inwardly depraved and apart from a
              special work of grace, utterly incapable of returning to God. This
              depravity is radical and pervasive. It extends to the mind, will
              and affections. Unregenerate men and women live under the dominion
              of sin and Satan, being described in the scriptures as “dead”.
              They are at enmity with God, hostile toward God, and hateful of
              God. Fallen, sinful people, whatever their character or
              attainments, are lost and without hope apart from salvation in
              Christ alone.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-4">The Gospel</h3>

            <p>
              We believe that the gospel is the good news of Jesus Christ who
              has lived the life that we could not have lived and died the death
              that we should have died and who rose again victoriously. Christ's
              crucifixion is the heart of the gospel; His resurrection is the
              power of the gospel and His ascension is the glory of the gospel.
              Christ's death is a substitutionary and propitiatory (wrath
              absorbing) sacrifice to God for our sins. It satisfies the demands
              of God's holy justice and appeases His holy wrath. It also
              demonstrates His mysterious love and reveals His amazing grace.
              Jesus Christ is the only mediator between God and man. There is no
              other name by which we must be saved.
            </p>

            <p>
              The proper response to the gospel therefore is faith alone in the
              person and work of Jesus Christ, a faith that is naturally
              accompanied by repentance from sin. This is how sinful humanity
              can be “justified” (declared right in the courtroom of heaven
              before a Holy God) whereby the action of double imputation (credit
              to another’s account) takes place; our sin on Christ and his
              perfect righteousness on us.{" "}
            </p>

            <p>
              This response to the gospel is rooted and grounded in the free and
              unconditional election of God for His own pleasure and glory.
              Since we do not know God’s wise and sovereign decrees regarding
              the salvation of his people we are not called to speculate and
              pontificate but in obedience to the great commission preach this
              gospel of grace to all people in all nations.
            </p>
            <h3 className="text-xl mb-4">The Church</h3>

            <p>
              We believe that God by His Word and Spirit creates the Church,
              calling sinful people out of the whole human race into the
              fellowship of Christ's Body. By the same Word and Spirit, He
              guides and preserves that new redeemed humanity. The church is not
              a religious institution or denomination. Rather, the Church
              universal is made up of those who have become genuine followers of
              Jesus Christ and have personally appropriated the gospel. The
              Church exists to worship and glorify God as Father, Son and Holy
              Spirit. It also exists to serve Him by faithfully doing His will
              in the earth. The ultimate mission of the Church is worship and
              the means by which this is accomplished is the making of disciples
              through the preaching and embracing of the gospel. Upon
              conversion, newly redeemed men and women are added to a local
              church in which they devote themselves to teaching, fellowship,
              the breaking of bread and prayer.{" "}
            </p>

            <p>
              All members of the Church universal are to be a vital and
              committed part of a local church. In this context, they are called
              to walk out the New Covenant as the people of God and demonstrate
              the reality of the kingdom of God. The ascended Christ has given
              gift ministries to the church including apostles, prophets,
              evangelists, pastors and teachers for the equipping of Christ's
              body that it might mature and grow. The gifts of apostle and
              prophet must be distinguished from the offices of apostle and
              prophet who spoke with infallibility as God’s progressive
              revelation in the formation of the scriptures was still in
              progress. The gift of apostle is seen in church planting and
              pioneer work and the gift of prophet is seen in those who by God’s
              grace speak words in season to build up individuals or the whole
              body via means of revelation/insight or appropriate application of
              scripture. All prophetic utterances are to be tested in accordance
              with the scriptures. Through the gift ministries, all members of
              the church are to be nurtured and equipped for the work of the
              ministry.
            </p>

            <p>
              In the context of the local church, God's people receive pastoral
              care and leadership and the opportunity to employ their God-given
              gifts in His service in relation to one another and to the world.
              We therefore believe in the priesthood of all believers in
              understanding that every believer in the church has the gifts and
              ability to serve one another and lead one another in worship.
              Furthermore, the local church is to be free from outside
              interference and is autonomous and self-governing, free to make
              decisions from within, including the appointment/affirmation of
              its leaders.
            </p>

            <p>
              The only recognized offices in the New Testament are elders and
              deacons. Elders (sometimes referred to as Bishops and pastors) are
              God’s under-shepherds responsible for the oversight, rule and
              spiritual direction of the church. They are gifted and set aside
              by the Holy Spirit, in recognition by the church to carry out
              their tasks. Deacons are those recognised by the church who lead
              and assist in the practical welfare and mercy ministry of both the
              church and the local community.
            </p>

            <p>
              The two ordinances given to the church are baptism and the Lord’s
              Supper. Baptism is to be administered only to those who profess
              Jesus Christ as Lord and saviour and is an expression of their
              spiritual baptism into the body of Christ and union with him. The
              Lord’s Supper is a privilege for all believers to remember the
              Lord’s work on the cross and be refreshed in their walk with him
              as they live their lives in a fallen world waiting for his return.
              Although the emblems used do not change in any shape or form or
              have any saving merit in them, the Lord’s Supper is a privileged
              means of grace for believers who partake of it.
            </p>

            <h3 className="text-xl mb-4">The Future State</h3>

            <p>
              We believe that the consummation of all things includes the
              future, physical, visible, personal and glorious return of Jesus
              Christ, the resurrection of the dead of both the just and the
              unjust and the translation of those alive in Christ at his coming.
              When Christ returns he will consummate his kingdom and usher in
              the new heavens and the new earth where his people will serve and
              enjoy him forever and those unrepentant will suffer eternal
              conscious punishment for their sins against a Holy God.
            </p>

            <p>
              These are the fundamentals of “eschatology” (study of last
              things). We promote people to have conviction and share their
              views regarding other issues such as Millennialism (the
              understanding of the “thousand years” in Revelation 20) and
              prophetic/apocalyptic passages in the scripture but discourage
              divisiveness over such issues; desiring to keep the bonds of peace
              and glory in what is clear - namely Christ is returning.
            </p>

            <h3 className="text-xl mb-4">Christian Behaviour</h3>

            <p>
              We believe every believer is to live as salt and light in the
              world that others may see our good deeds and glorify our father in
              heaven. It is expected that Christians are to live
              counter-cultural lives as an expression of how the Gospel has
              changed them.
            </p>

            <p>
              Acknowledging the difference of opinion between Christians when it
              comes to views such as alcohol, Lords day activities and worship
              style (among others), we believe in the liberty of conscience of
              each believer as well as the command to not put a stumbling block
              in front of others.
            </p>

            <p>
              When Christian behaviour is compromising to the gospel and/or to
              the local church the necessary form of church discipline will be
              carried out.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:max-w-4xl lg:m-auto p-4 xl:pt-16">
          <h2 className="mb-4 text-wayblue xl:text-center xl:pb-8">
            What to Expect
          </h2>
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
      <section className="bg-light p-4 pt-16 pb-16 md:pt-8 md:pb-16">
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-3xl font-bold text-wayblue mt-0 md:mt-6 md:text-center mb-8">
            Team
          </h2>
          <ul className="grid gap-4 xl:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <li className="flex flex-col md:col-span-2 xl:col-span-1">
              <div className="rounded flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white pt-8 pb-8 md:pl-8 md:pr-8">
                <div className="flex items-center mb-6 md:pl-20 md:pr-20 xl:pl-0 xl:pr-0">
                  <Img
                    className="rounded-full w-20 mr-6"
                    fluid={avatarUrl}
                    alt="Johnny Carson"
                  />
                  <h3 className="text-2xl">Jonathan Carson</h3>
                </div>
                <div className="md:pl-20 md:pr-20 xl:pl-0 xl:pr-0">
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellendus quae maiores reprehenderit eum modi
                    exercitationem. Excepturi deleniti quisquam nam quidem
                    necessitatibus veritatis sit, consequatur reprehenderit,
                    temporibus consectetur amet eius modi?
                  </p>
                  <p className="mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, porro, minus dolores ut ab, magnam autem
                    optio numquam totam suscipit atque? Debitis consequuntur eos
                    beatae porro magnam eaque cumque quos?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white pt-8 pb-8 md:pl-8 md:pr-8">
                <div className="flex items-center mb-6">
                  <Img
                    className="rounded-full w-20 mr-6"
                    fluid={avatarUrl}
                    alt="Johnny Carson"
                  />
                  <h3 className="text-2xl">Stuart Elliott</h3>
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus quae maiores reprehenderit eum modi
                  exercitationem. Excepturi deleniti quisquam nam quidem
                  necessitatibus veritatis sit, consequatur reprehenderit,
                  temporibus consectetur amet eius modi?
                </p>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, porro, minus dolores ut ab, magnam autem optio
                  numquam totam suscipit atque? Debitis consequuntur eos beatae
                  porro magnam eaque cumque quos?
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="rounded flex flex-col flex-grow shadow-lg border-solid border border-gray-300 p-4 bg-white pt-8 pb-8 md:pl-8 md:pr-8">
                <div className="flex items-center mb-6">
                  <Img
                    className="rounded-full w-20 mr-6"
                    fluid={avatarUrl}
                    alt="Johnny Carson"
                  />
                  <h3 className="text-2xl">Chris McKinven</h3>
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus quae maiores reprehenderit eum modi
                  exercitationem. Excepturi deleniti quisquam nam quidem
                  necessitatibus veritatis sit, consequatur reprehenderit,
                  temporibus consectetur amet eius modi?
                </p>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, porro, minus dolores ut ab, magnam autem optio
                  numquam totam suscipit atque? Debitis consequuntur eos beatae
                  porro magnam eaque cumque quos?
                </p>
              </div>
            </li>
          </ul>
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
