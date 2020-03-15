import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from '@material-ui/styles';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
    },
    control: {
      padding: spacing(2),
    },
    objects: {
      width: '100%',
      height: '250px',
      backgroundColor: 'red',
    },
  });