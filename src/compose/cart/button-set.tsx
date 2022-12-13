/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';

import { resetCart } from 'stores/cart/selected/actions';

interface IProps {
  handleResetData: () => void;
}
const ButtonSetMemo: FC<IProps> = ({ handleResetData }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    handleResetData();
    dispatch(resetCart());
  };

  return (
    <Box mt={5} display="flex" justifyContent="flex-end" alignItems="center">
      <Button variant="outlined" onClick={handleCancel}>
        Clear the cart
      </Button>
    </Box>
  );
};

export const ButtonSet = memo(ButtonSetMemo);
