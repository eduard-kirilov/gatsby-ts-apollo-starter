/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';

import { SEO } from './index';

describe('AlertUser Container', () => {
  describe('AlertUser container is open', () => {
    const mount = shallow(
      <SEO
        title="title"
        description="description"
        lang="ru"
        meta={[
          {
            name: 'name',
            content: 'content',
          }
        ]}
      />
    );
    it('<AlertUser /> test should work', () => {
      expect(mount.find('AlertUser')).toHaveLength(0);
    });
  });
});
