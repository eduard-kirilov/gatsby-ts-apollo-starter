/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from "apollo-boost";

export const productsQuery = gql`
  query productsQuery($title: String) {
    products(title: $title) {
      title
      subtitle
      url
    }
  }
`;

// export const productsQuery = gql`
//   query courses($name: String, $payType: String, $isFavorite: Boolean) {
//     products(name: $name, payType: $payType, isFavorite: $isFavorite) {
//       id
//       chakras
//       bgUrl
//       payType
//       customType
//       isFavorite
//       name
//     }
//   }
// `;
