/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby, Ts, Apollo - Starter.`,
    description: `This is a testing ground for running code and new technologies just for fun;`,
    author: `Eduard Kirilov <ph0en1x.free@ya.ru>`,
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ts-apollo-starter.`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
       resolve: 'gatsby-plugin-offline',
       options: {
          workboxConfig: {
             globPatterns: ['**/*'],
          }
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
          "stores": "src/stores",
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
