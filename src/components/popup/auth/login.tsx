/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IClasses, IAllStringProps } from 'utils/interface';

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';


interface IProps {
  handleClose?: () => void;
  setTabName: (tabIndex: number) => void;
  handleLogin?: (props: IAllStringProps) => void;
}

export const Login: React.FC<IProps & IClasses> = ({
  classes,
  handleClose,
  handleLogin,
  setTabName,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    handleLogin(userData);
    handleClose();
  };

  return (
    <>
      <h2 className={classes.title}>Вход</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={userData.email}
          className={classes.input}
          onChange={handleChange}
          size="small"
        />
        <FormControl
          className={classes.confirmPassword}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange}
            labelWidth={58}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          name="login"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Войти
        </Button>
        <div className={classes.signupSet}>
          <Typography variant="caption">Нет аккаунта?</Typography>
          <button
            type="button"
            name="signup"
            color="primary"
            className={classes.buttonClear}
            onClick={() => setTabName(1)}
          >
            Зарегистрируйтесь
          </button>
        </div>
      </form>
    </>
  );
};
