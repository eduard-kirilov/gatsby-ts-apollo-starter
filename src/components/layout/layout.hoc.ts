import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Layout } from './layout'
import { styles } from './layout.styles';


export default compose(withStyles(styles))(Layout)