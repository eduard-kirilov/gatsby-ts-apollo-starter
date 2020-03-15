import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withStyles } from '@material-ui/styles';

import { styles } from './shop.styles';
import { productsQuery } from '../../shema/query';
import { Shop } from './shop';

interface ISearchProduct {
  title: string;
}

const searchProduct = graphql(productsQuery, {
  options: ({
    title = '',
  }: ISearchProduct) => ({
    variables: { title },
  }),
});

export default compose(searchProduct, withStyles(styles))(Shop);