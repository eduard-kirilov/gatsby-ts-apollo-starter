/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IProduct } from 'utils/interface';

import { Edit, Delete } from '@material-ui/icons';

import {
  Tooltip,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableSortLabel,
  TablePagination,
} from '@material-ui/core';
import { TableStyled, ButtonWrapper } from './styles';

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

export const TableProducts: React.FC<IProps> = ({
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
  const { data = [], total = 0 } = products;
  return (
    <Paper>
      <TableContainer>
        <TableStyled size="small" aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={direction}
              >
                <TableSortLabel
                  active={true}
                  direction={direction}
                  onClick={toggleDirection}
                >
                  Id
                </TableSortLabel>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <ButtonWrapper>
                    <Tooltip title="Change this product">
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleOpen(item._id)}
                        color="inherit"
                        size="small"
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete this product">
                      <IconButton
                        aria-label="remove"
                        onClick={() => handleDelProduct(item._id)}
                        color="inherit"
                        size="small"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </ButtonWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
