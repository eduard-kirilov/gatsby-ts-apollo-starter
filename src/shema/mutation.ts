/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from "apollo-boost";

export const addProductMutation = gql`
  mutation addProduct(
    $num: Int!
    $isbn: String!
    $name: String!
    $vote: Int!
    $year: Int!
    $price: Int!
    $rating: Int!
    $imgUrl: String!
    $imgName: String!
    $lastName: String!
    $firstName: String!
  ) {
    addProduct(
      num: $num
      isbn: $isbn
      name: $name
      vote: $vote
      year: $year
      price: $price
      rating: $rating
      imgUrl: $imgUrl
      imgName: $imgName
      lastName: $lastName
      firstName: $firstName
    ) {
      id
    }
  }
`;
export const upProductMutation = gql`
  mutation upProduct(
    $id: ID!
    $num: Int!
    $isbn: String!
    $name: String!
    $vote: Int!
    $year: Int!
    $price: Int!
    $rating: Int!
    $imgUrl: String!
    $imgName: String!
    $lastName: String!
    $firstName: String!
  ) {
    upProduct(
      id: $id
      num: $num
      isbn: $isbn
      name: $name
      vote: $vote
      year: $year
      price: $price
      rating: $rating
      imgUrl: $imgUrl
      imgName: $imgName
      lastName: $lastName
      firstName: $firstName
    ) {
      id
    }
  }
`;
export const delProductMutation = gql`
  mutation delProduct($id: ID) {
    delProduct(id: $id) {
      id
    }
  }
`;
