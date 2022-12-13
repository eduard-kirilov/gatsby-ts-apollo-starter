/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import styled from 'styled-components';
import {
  Theme,
  Button,
  FormControl,
  TextField,
} from '@mui/material';

export const Tilte = styled.h2<{ theme: Theme }>`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const TextFieldStyled = styled(TextField)`
  width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
`;
export const FormControlStyled = styled(FormControl)`
  width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
`;
export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
`;
