/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div<{ theme: Theme }>`
  ${({theme}) => css`
    background-color: ${theme.palette.background.paper};
    box-shadow: ${theme.shadows[5]};
    border-radius: 8px;
    padding: ${theme.spacing(5)}px;
    &:focus {
      outline: none;
    }
  `}
`;