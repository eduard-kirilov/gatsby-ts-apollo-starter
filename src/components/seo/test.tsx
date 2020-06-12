/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';

import { SEO } from './index';

describe('SEO Container', () => {
  describe('SEO container is open', () => {
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
    it('<SEO /> test should work', () => {
      expect(mount.find('SEO')).toHaveLength(0);
    });
  });
});
