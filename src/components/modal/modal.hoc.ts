import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Modal } from './modal'
import { styles } from './modal.styles';


export default compose(withStyles(styles))(Modal)