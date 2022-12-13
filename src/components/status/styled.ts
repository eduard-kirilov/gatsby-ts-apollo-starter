/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme, LinearProgress } from '@mui/material';

export const LinearProgressStyled = styled(LinearProgress)<{ theme: Theme }>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 3};
`;
