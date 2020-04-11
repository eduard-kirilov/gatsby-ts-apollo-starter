/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IClasses } from 'utils/interface';
import { Container } from '@material-ui/core';

import { Header } from 'components/header';
import { PopupAuth } from 'components/popup';


export const Layout: React.FC<IClasses> = ({ classes, children }) => {
  const [modalOpen, setModalOpen] = React.useState<Boolean>(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

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
      <Header handleOpen={handleOpen} />
      <Container maxWidth="lg">
        {children}
      </Container>
      <PopupAuth
        handleClose={handleClose}
        open={modalOpen}
      />
    </>
  );
};
