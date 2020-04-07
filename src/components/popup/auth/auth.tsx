import * as React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Modal } from '../../modal';

interface IProps {
  classes: {
    [key: string]: string;
  };
  handleClose?: () => {};
  open?: boolean;
}

export const PopupAuth: React.FC<IProps> = ({
  classes,
  handleClose,
  open = false,
}) => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  console.log(state.email);
  return (
    <Modal handleClose={handleClose} open={open}>
      <h2 className={classes.title}>Авторизация</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={state.email}
          className={classes.input}
          onChange={handleChange}
          size="small"
        />
        <FormControl
          className={classes.textField}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange}
            labelWidth={70}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {state.showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.buttonSet}>
          <Button variant="contained" color="primary" className={classes.button}>
            Войти
          </Button>
          <span className={classes.text}>Если у вас нет аккаунта создайте его:</span>
          <Button variant="outlined" color="primary" className={classes.button}>
            Создать аккаунт
          </Button>
        </div>
      </form>
    </Modal>
  );
};
