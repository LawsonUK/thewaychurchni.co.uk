module.exports = {
  siteMetadata: {
    title: `The Way Church`,
    description: `Proclaiming Jesus as the way and living as people of the way.`,
    author: `@theWayChurchNI`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Way Church`,
        short_name: `the-way-church`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,700", "sans-serif"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: [
          "bg-gray-700",
          "bg-blue-700",
          "bg-indigo-700",
          "bg-green-700",
          "bg-orange-700",
          "bg-purple-700",
          "bg-red-700",
          "bg-pink-700",
          "bg-teal-700",
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://thewaychurch.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blog-posts`, `media-posts`],
        singleTypes: [`home-page`, `live-page`, `church-page`, `contact-page`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
