/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: String!,
    $password: String!
  ) {
    signup(
      email: $email,
      password: $password
    ) {
      _id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const LOGIN_MUTATION = gql`
  mutation login(
    $email: String!,
    $password: String!
    ) {
      login(
        email: $email,
        password: $password
      ) {
        _id
        email
        password
        createdAt
        updatedAt
      }
  }
`;
export const LOGOUT_MUTATION = gql`
  mutation logout{
    logout
  }
`;
export const ADD_PRODUCT_MUTATION = gql`
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
export const UP_PRODUCT_MUTATION = gql`
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
export const DEK_PRODUCT_MUTATION = gql`
  mutation delProduct($id: ID) {
    delProduct(id: $id) {
      id
    }
  }
`;
