/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { IAllStringProps } from 'utils/interface';
import { Login } from './login';
import { Signup } from './signup';

interface IProps {
  handleClose: () => void;
  handleLogin: (props: IAllStringProps) => void;
  handleSignup: (props: IAllStringProps) => void;
}

const PopupAuthMemo: React.FC<IProps> = ({
  handleClose,
  handleSignup,
  handleLogin,
}) => {
  const [tabName, setTabName] = React.useState(0);

  const tabSwitcher: any = {
    '0': (
      <Login
        handleClose={handleClose}
        handleLogin={handleLogin}
        setTabName={setTabName}
      />
    ),
    '1': (
      <Signup
        handleClose={handleClose}
        handleSignup={handleSignup}
        setTabName={setTabName}
      />
    ),
  };

  return (
    <SwipeableViews index={tabName} onChangeIndex={setTabName}>
      <>{tabName === 0 && tabSwitcher[0]}</>
      <>{tabName === 1 && tabSwitcher[1]}</>
    </SwipeableViews>
  );
};

export const PopupAuth = React.memo(PopupAuthMemo);