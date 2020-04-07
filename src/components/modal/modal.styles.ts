import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = (theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalWrap: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: 8,
      padding: theme.spacing(5),
      '&:focus': {
        outline: 'none',
      }
    }
  });
