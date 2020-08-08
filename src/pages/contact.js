import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-main"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Church" />
      <section className="banner text-center mt-24 mb-8 md:mb-16 flex flex-col">
        <div className="w-full">
          <h3 className="mb-3">Contact</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-12">
            Feel free to get in touch
          </h1>
        </div>
      </section>
      <section className="contact-details">
        <div>
          <h3>Details</h3>
        </div>
        <div>
          <h3>Visit Us</h3>
        </div>
        <div>
          <h3>Connect with us</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
