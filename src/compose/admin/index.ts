import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withStyles } from '@material-ui/styles';

import { styles } from './admin.styles';
import { productsQuery } from '../../shema/query';
import { Admin } from './admin';

interface ISearchProduct {
  name: string;
  payType: string;
  isFavorite: boolean;
}

const searchProduct = graphql(productsQuery, {
  options: ({
    name = '',
    payType = '',
    isFavorite = false,
  }: ISearchProduct) => ({
    variables: { name, payType, isFavorite },
  }),
});

export default compose(searchProduct, withStyles(styles))(Admin);