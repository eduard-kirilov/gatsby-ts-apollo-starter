import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withStyles } from '@material-ui/styles';

import { styles } from './home.styles';
import { productsQuery } from '../../shema/query';
import { Home } from './home';

// interface ISearchProduct {
//   name: string;
//   payType: string;
//   isFavorite: boolean;
// }

// const searchProduct = graphql(productsQuery, {
//   options: ({
//     name = '',
//     payType = '',
//     isFavorite = false,
//   }: ISearchProduct) => ({
//     variables: { name, payType, isFavorite },
//   }),
// });

export default compose(withStyles(styles))(Home);