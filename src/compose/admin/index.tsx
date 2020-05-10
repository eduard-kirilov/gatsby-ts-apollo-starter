/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import {
  PopupAddProductCompose,
  PopupUpProductCompose,
} from 'compose/popup';
import { AdminWrapper } from './admin';
import { TableProductsCompose } from './table';

export const AdminCompose = () => {
  const [currentSortId, setCurrrentSortId] = React.useState({});
  const [page, setPage] = React.useState(0);
  const [direction, setDirection] = React.useState('ASC');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleResetPage = () => {
    setPage(0);
    setCurrrentSortId({});
  }

  return (
    <>
      <AdminWrapper 
        table={<TableProductsCompose
          direction={direction}
          page={page}
          rowsPerPage={rowsPerPage}
          setCurrrentSortId={setCurrrentSortId}
          setDirection={setDirection}
          setPage={setPage}
          handleResetPage={handleResetPage}
          setRowsPerPage={setRowsPerPage}
        />}
      />
      <PopupAddProductCompose
        handleResetPage={handleResetPage}
        direction={direction}
        rowsPerPage={rowsPerPage}
      />
      <PopupUpProductCompose
        currentSortId={currentSortId}
        direction={direction}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
};
