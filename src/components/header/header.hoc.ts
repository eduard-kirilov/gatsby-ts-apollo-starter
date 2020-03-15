import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Header } from './header'
import { styles } from './header.styles';


export default compose(withStyles(styles))(Header)