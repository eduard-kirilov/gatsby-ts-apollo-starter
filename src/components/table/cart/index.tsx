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
  handleOpen: (id: string) => void;
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
  handleOpen,
  page,
  products,
  rowsPerPage,
  toggleDirection,
}) => {
  const head = ['Id', 'Name', 'Quantity', 'Price', 'Amount'];
  const { data = [], total = 0 } = products;
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
              <TableCell>{item.price * 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};
