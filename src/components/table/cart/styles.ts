/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Table } from '@mui/material';

export const TableStyled = styled(Table)`
  min-width: 750px;
`;
export const TbleFooter = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.palette.common.balck};
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;
export const Amount = styled.div`
  margin-left: 16px;
  color: ${({ theme }) => theme.palette.common.balck};
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;