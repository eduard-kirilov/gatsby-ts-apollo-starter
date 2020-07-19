/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { Button } from '@material-ui/core';

import LogoLeft from 'images/logo-white.inline.svg';
import LogoRight from 'images/logo-right.inline.svg';

import {
  LinkLogo,
  LogoLeftStyled,
  LogoRightStyled,
  LogoWrapper,
} from './styles';

export const LogoMemo: FC = () => {
  return (
    <LinkLogo to="/">
      <Button color="inherit">
        <LogoWrapper>
          <LogoLeftStyled>
            <LogoLeft />
          </LogoLeftStyled>
          <LogoRightStyled>
            <LogoRight />
          </LogoRightStyled>
        </LogoWrapper>
      </Button>
    </LinkLogo>
  );
};

export const Logo = memo(LogoMemo);