/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';

import { Initialization } from './index';

describe('Initialization Container', () => {
  describe('Initialization', () => {
    const mount = shallow(
      <Initialization handleMount={() => {}}>
        some text to imitate a children
      </Initialization>,
    );
    it('<Initialization /> is authorized test should work', () => {
      expect(mount.find('Initialization')).toHaveLength(0);
    });
  });
});
