/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { ButtonClearStyles } from 'components/button';

export const ButtonLinkStyles = styled(ButtonClearStyles)`
  color: ${({ theme }) => theme.palette.primary.dark};
  text-decoration: underline;
  &:hover, &:focus {
    color: ${({ theme }) => theme.palette.primary.light};
    text-decoration: underline;
  }
`;
