/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from "apollo-boost";

export const productsQuery = gql`
  query products($title: String) {
    products(title: $title) {
      title
      subtitle
      url
    }
  }
`;
export const usersQuery = gql`
  query users {
    users {
      _id
      email
      createdAt
      updatedAt
    }
  }
`;
export const userQuery = gql`
  query user {
    users {
      _id
      email
      createdAt
      updatedAt
    }
  }
`;
