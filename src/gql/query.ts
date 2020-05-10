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
  query products(
    $direction: String!,
    $first_id: ID,
    $ids: [String],
    $last_id: ID,
    $page_size: Int!,
  ) {
    products(
      direction: $direction
      first_id: $first_id
      ids: $ids
      last_id: $last_id
      page_size: $page_size
    ) {
      first_id
      last_id
      total
      data {
        _id
        subtitle
        title
        price
        url
      }
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
