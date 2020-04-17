/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { PopupAuthCompose } from './auth';
import { ModalCompose } from './modal';

export const PopupAuth: React.FC = () => (
  <ModalCompose>
    <PopupAuthCompose />
  </ModalCompose>
)