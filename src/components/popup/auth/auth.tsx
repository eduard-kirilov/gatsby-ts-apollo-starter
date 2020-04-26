/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { IClasses, IAllStringProps } from 'utils/interface';
import { Login } from './login';
import { Signup } from './signup';

interface IProps {
  handleClose: () => void;
  handleLogin: (props: IAllStringProps) => void;
  handleSignup: (props: IAllStringProps) => void;
}

export const PopupAuth: React.FC<IProps & IClasses> = ({
  handleClose,
  classes,
  handleSignup,
  handleLogin,
}) => {
  const [tabName, setTabName] = React.useState(0);

  const tabSwitcher: any = {
    '0': (
      <Login
        classes={classes}
        handleClose={handleClose}
        handleLogin={handleLogin}
        setTabName={setTabName}
      />
    ),
    '1': (
      <Signup
        classes={classes}
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
