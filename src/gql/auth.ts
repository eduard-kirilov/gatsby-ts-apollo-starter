/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { graphql } from 'react-apollo';
import { IAllStringProps } from 'utils/interface'
import { signUpMutation, loginMutation } from 'shema/mutation';

export const signUpQL = graphql(signUpMutation, {
  props: ({ mutate }) => ({
    signUp: ({
      email,
      password,
    }: IAllStringProps) => mutate({
      variables: {
        email,
        password,
      },
    }),
  }),
});

export const loginQL = graphql(loginMutation, {
  props: ({ mutate }) => ({
    login: ({
      email,
      password,
    }: IAllStringProps) => mutate({
      variables: {
        email,
        password,
      },
    }),
  }),
});