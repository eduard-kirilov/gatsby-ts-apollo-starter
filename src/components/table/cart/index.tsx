/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { v4 } from 'uuid'; 
import { IProduct } from 'utils/interface';

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { TableStyled } from './styles';

interface IProps {
  direction: any;
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (e: any) => void;
  handleDelProduct: (_id: string) => void;
  page?: number;
  products: {
    total?: number;
    first_id?: string;
    last_id?: string;
    data?: IProduct[];
  };
  rowsPerPage: number;
  toggleDirection: () => void;
}

export const TableCart: React.FC<IProps> = ({
  direction,
  handleChangePage,
  handleChangeRowsPerPage,
  handleDelProduct,
  page,
  products,
  rowsPerPage,
  toggleDirection,
}) => {
  const head = ['Id', 'Name', 'Price', 'Quantity', 'Amount'];
  const { data = [], total = 0 } = products;
  const sum = (price: string, qty: number) => {
    const re1 = /(\$)?( )/ig;
    const re2 = /(\d)(?=(\d{3})+(?!\d))/g;
    const re3 = /(\d{1})/;
    const ammount = String(Number(price.replace(re1, '')) * qty);
    return ammount.replace(re2, '$1 ').replace(re3, '$ $1');
  }
  return (
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
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{1}</TableCell>
              <TableCell>{sum(item.price, 1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};
