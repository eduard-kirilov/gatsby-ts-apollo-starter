/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { Admin } from 'components/admin';
import {
  PopupAddProductCompose,
  PopupUpProductCompose,
} from 'compose/popup';
import { TableProductsCompose } from 'compose/admin/table';

export const AdminCompose = () => {
  const [addProductPopup, setAddProductPopup] = React.useState(false);
  const [upProductPopup, setUpProductPopup] = React.useState(false);
  const [currrentId, setCurrrentId] = React.useState('');
  const [currentSortId, setCurrrentSortId] = React.useState({});
  const [page, setPage] = React.useState(0);
  const [direction, setDirection] = React.useState('ASC');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleUpOpen = (_id: string) => {
    setUpProductPopup(true);
    setCurrrentId(_id);
  }
  const handleUpClose = () => {
    setUpProductPopup(false);
    setCurrrentId('');
  }
  const handleResetPage = () => {
    setPage(0);
    setCurrrentSortId({});
  }
  return (
    <>
      <Admin 
        table={<TableProductsCompose
          direction={direction}
          handleOpen={handleUpOpen}
          page={page}
          rowsPerPage={rowsPerPage}
          setCurrrentSortId={setCurrrentSortId}
          setDirection={setDirection}
          setPage={setPage}
          handleResetPage={handleResetPage}
          setRowsPerPage={setRowsPerPage}
        />}
        hadleOpenPopupAddProduct={() => setAddProductPopup(true)}
      />
      <PopupAddProductCompose
        handleResetPage={handleResetPage}
        direction={direction}
        handleClose={() => setAddProductPopup(false)}
        open={addProductPopup}
        rowsPerPage={rowsPerPage}
      />
      <PopupUpProductCompose
        currentSortId={currentSortId}
        currrentId={currrentId}
        direction={direction}
        handleClose={handleUpClose}
        open={upProductPopup}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
};
