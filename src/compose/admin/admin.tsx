import * as React from 'react';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

interface IProps {
  classes: {
    [key: string]: string;
  };
}

export const Admin: React.FC<IProps> = ({ classes }) => {
  console.log(classes);
  return (
    <Layout>
      <SEO title="Admin" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

