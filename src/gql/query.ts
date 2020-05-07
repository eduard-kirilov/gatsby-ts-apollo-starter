/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
  query product($_id: String!) {
    product(_id: $_id) {
      _id
      subtitle
      title
      price
      url
    }
  }
`;
export const PRODUCTS_QUERY = gql`
  query products($ids: [String]) {
    products(ids: $ids) {
      _id
      subtitle
      title
      price
      url
    }
  }
`;
export const USERS_QUERY = gql`
  query users {
    users {
      _id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      _id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
