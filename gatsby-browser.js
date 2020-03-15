/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: process.env.GATSBY_API_URL,
  fetch,
})

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
)