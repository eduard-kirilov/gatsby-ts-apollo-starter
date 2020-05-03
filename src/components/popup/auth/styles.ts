/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { ButtonLinkStyles } from 'components/button';

import {
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';

export const Tilte = styled.h2<{ theme: Theme }>`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px !important;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const TextFieldStyled = styled(TextField)`
  width: 250px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px !important;
`;
export const FormControlStyled = styled(FormControl)`
  width: 250px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px !important;
  &:last-child {
    margin-bottom: 32px !important;
  }
`;
export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px !important;
`;
export const ButtonClear = styled(ButtonLinkStyles)`
  margin-left: 8px;
`;
export const SignupSet = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
