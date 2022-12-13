/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { IProduct } from 'utils/interface';

import { Edit, Delete } from '@mui/icons-material';

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
} from '@mui/material';
import { LinearStatus } from 'components/status';
import { TableStyled, ButtonWrapper } from './styles';

interface IProps {
  direction: any;
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (e: any) => void;
  handleDelProduct: (_id: string) => void;
  handleOpen: (id: string) => void;
  loading?: boolean;
  page?: number;
  products: {
    total?: number;
    page?: number;
    data?: IProduct[];
  };
  perPage: number;
  toggleDirection: () => void;
}

const TableProductsMemo: FC<IProps> = ({
  direction,
  handleChangePage,
  handleChangeRowsPerPage,
  handleDelProduct,
  handleOpen,
  loading = false,
  page,
  perPage = 5,
  products,
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
            {loading
              ? <LinearStatus />
              : data.map((item) => (
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
        rowsPerPage={perPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export const TableProducts = memo(TableProductsMemo);
