/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { v4 } from 'uuid';
import { IProducts } from 'utils/interface';

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
  TablePagination,
} from '@material-ui/core';
import { TableStyled, ButtonWrapper } from './styles';

interface IProps {
  handleOpen: (id: string) => void;
  handleDelProduct: (id: string) => void;
}
export const TableProducts: React.FC<IProps & IProducts> = ({
  products = [],
  handleOpen,
  handleDelProduct,
}) => {
  const head = ['Id', 'Name', 'Price', 'Actions'];
  return (
    <Paper>
      <TableContainer>
        <TableStyled size="small" aria-label="products table">
          <TableHead>
            <TableRow>
              {head.map(item =>
                item !== 'Actions' ? (
                  <TableCell key={v4()}>{item}</TableCell>
                ) : (
                  <TableCell key={v4()} align="right">
                    {item}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(item => (
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
        count={products.length}
        rowsPerPage={0}
        page={0}
        onChangePage={(event: unknown, newPage: number) =>
          console.log('change page', newPage)
        }
        onChangeRowsPerPage={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log('per page', event.target.value)
        }
      />
    </Paper>
  );
};
