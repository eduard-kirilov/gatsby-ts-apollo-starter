import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container } from '@material-ui/core';

import { Header } from '../header';

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        // siteTitle={data.site.siteMetadata.title}
      />
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  );
};
