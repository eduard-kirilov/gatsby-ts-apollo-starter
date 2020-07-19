/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React from 'react';
import { shallow } from 'enzyme';

import { Init } from './index';

describe('Init Container', () => {
  describe('Init', () => {
    const mount = shallow(
      <Init handleMount={() => {}}>
        some text to imitate a children
      </Init>,
    );
    it('<Init /> is authorized test should work', () => {
      expect(mount.find('Init')).toHaveLength(0);
    });
  });
});
