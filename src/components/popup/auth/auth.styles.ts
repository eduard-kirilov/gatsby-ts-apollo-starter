import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { start } from 'repl';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      marginTop: 0,
      marginBottom: 16,
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    input: {
      width: '250px',
      marginBottom: 16,
    },
    textField: {
      width: '250px',
      marginBottom: 32,
    },
    buttonSet: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    button: {
      width: '100%',
      '&:first-child': {
        marginBottom: 16,
      }
    },
    text: {
      marginBottom: 16,
    }
  });
