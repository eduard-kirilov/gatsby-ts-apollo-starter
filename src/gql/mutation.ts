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
    $subtitle: String!
    $title: String!
    $price: String!
    $url: String!
  ) {
    addProduct(
      subtitle: $subtitle
      title: $title
      price: $price
      url: $url
    ) {
      _id
    }
  }
`;
export const UP_PRODUCT_MUTATION = gql`
  mutation upProduct(
    $_id: String!
    $price: String
    $subtitle: String
    $title: String
    $url: String
  ) {
    upProduct(
      _id: $_id
      price: $price
      subtitle: $subtitle
      title: $title
      url: $url
    ) {
      _id
    }
  }
`;
export const DEL_PRODUCT_MUTATION = gql`
  mutation delProduct($_id: String!) {
    delProduct(_id: $_id) {
      _id
    }
  }
`;
