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
  const handleUpOpen = (_id: string) => {
    setUpProductPopup(true);
    setCurrrentId(_id);
  }
  const handleUpClose = (_id: string) => {
    setUpProductPopup(false);
    setCurrrentId('');
  }
  return (
    <>
      <Admin 
        table={<TableProductsCompose
          handleOpen={handleUpOpen}
        />}
        hadleOpenPopupAddProduct={() => setAddProductPopup(true)}
      />
      <PopupAddProductCompose
        open={addProductPopup}
        handleClose={() => setAddProductPopup(false)}
      />
      <PopupUpProductCompose
        open={upProductPopup}
        currrentId={currrentId}
        handleClose={handleUpClose}
      />
    </>
  );
};
