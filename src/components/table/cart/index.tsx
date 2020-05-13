/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IProduct, IAllStringProps } from 'utils/interface';
import { priceToStr, priceToNum, priceSumArr } from 'utils/helpers';

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { TableStyled, TbleFooter, Text, Amount } from './styles';

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

  function sum(price: string, qty: number) {
    const amount = priceToNum(price) * qty;
    return priceToStr(amount);
  };

  const amount = priceSumArr(data.map(({ price }) => price));

  return (
    <TableContainer component={Paper}>
      <TableStyled aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map(item => item !== 'Amount' ? (
              <TableCell key={item}>{item}</TableCell>
            ) : (
              <TableCell key={item} align="right">{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{1}</TableCell>
              <TableCell align="right">{sum(item.price, 1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
      <TbleFooter>
        <Text>Final amount:</Text>
          <Amount>{amount}</Amount>
      </TbleFooter>
    </TableContainer>
  );
};
