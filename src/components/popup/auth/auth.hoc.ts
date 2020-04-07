import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { PopupAuth } from './auth'
import { styles } from './auth.styles';


export default compose(withStyles(styles))(PopupAuth)