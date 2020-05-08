/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { v4 } from 'uuid'; 
import { IProducts } from 'utils/interface';

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Title, TableStyled } from './styles';

export const TableCart: React.FC<IProducts> = ({ products = [] }) => {
  const head = ['Id', 'Name', 'Quantity', 'Price', 'Amount'];
  return (
    <>
    <Title weight="bold">My cart</Title>
    <TableContainer component={Paper}>
      <TableStyled aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map(item => (
              <TableCell key={v4()}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{1}</TableCell>
              <TableCell>{item.price * 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainer>
    </>
  );
};

