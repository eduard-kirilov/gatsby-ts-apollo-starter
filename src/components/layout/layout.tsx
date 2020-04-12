/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { IClasses } from 'utils/interface';
import { Container } from '@material-ui/core';

import { Header } from 'components/header';
import { PopupAuth } from 'components/popup';
import { Modal } from 'components/modal';

interface IProps {
  auth?: React.ReactNode;
};

export const Layout: React.FC<IProps & IClasses> = ({ auth, children }) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <Header handleOpen={() => setModalOpen(true)} />
      <Container maxWidth="lg">
        {children}
      </Container>
      <Modal
        handleClose={() => setModalOpen(false)}
        open={modalOpen}
      >
        {auth}
      </Modal>
    </>
  );
};
