import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container } from '@material-ui/core';

import { Header } from '../header';
import { PopupAuth } from '../popup';

interface IProps {
  classes: {
    [key: string]: string;
  };
};

export const Layout: React.FC<IProps> = ({ classes, children }) => {
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
