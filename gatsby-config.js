/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
module.exports = {
  siteMetadata: {
    title: `Gatsby, Ts, Apollo - Starter.`,
    description: `This is a testing ground for running code and new technologies just for fun;`,
    author: `Eduard Kirilov <kev987.free@ya.ru>`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ts-apollo-starter.`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": "src/components",
          "compose": "src/compose",
          "gql": "src/gql",
          "images": "src/images",
          "pages": "src/pages",
          "styles": "src/styles",
          "utils": "src/utils",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
}
