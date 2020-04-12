/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { IAllStringProps } from 'utils/interface'
import { createUserMutation } from 'shema/mutation';
import { usersQuery } from 'shema/query';
import { PopupAuth } from 'components/popup';

const createUser = graphql(createUserMutation, {
  props: ({ mutate }) => ({
    createUser: ({
      email,
      password,
    }: IAllStringProps) => mutate({
      variables: {
        email,
        password,
      },
      refetchQueries: [{ 
          query: usersQuery,
      }],
    }),
  }),
});

export const PopupAuthContainer = compose(createUser)(PopupAuth);