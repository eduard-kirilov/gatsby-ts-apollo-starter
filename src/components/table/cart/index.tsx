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
import { LinearStatus } from 'components/status';
import { TableStyled, TbleFooter, Text, Amount } from './styles';

interface IProps {
  loading?: boolean;
  products: {
    total?: number;
    page?: number;
    data?: IProduct[];
  };
}

const TableCartMemo: React.FC<IProps> = ({
  loading = false,
  products,
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
          {loading
            ? <LinearStatus />
            : data.map(item => (
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

export const TableCart = React.memo(TableCartMemo);