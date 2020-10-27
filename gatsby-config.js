module.exports = {
  siteMetadata: {
    title: `The Way Church`,
    description: `Proclaiming Jesus as the way and living as people of the way.`,
    author: `Lawson Software`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Way Church`,
        short_name: `The Way Church`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
        ],
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
          "article",
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://thewaychurch.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`media-posts`, `media-types`, `teacher`],
        singleTypes: [
          `home-page`,
          `live-page`,
          `church-page`,
          `contact-page`,
          `media-page`,
          `im-new-page`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
      },
    },
  ],
}
