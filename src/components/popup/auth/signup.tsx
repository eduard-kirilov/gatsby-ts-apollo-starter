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
  handleSignup?: (props: IAllStringProps) => void;
}

export const Signup: React.FC<IProps & IClasses> = ({
  classes,
  handleClose,
  handleSignup,
  setTabName,
}) => {
  const [show, setShow] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleShow = (key: string) => {
    setShow({
      ...show,
      [key]: !show[key]
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    handleSignup({
      email: userData.email,
      password: userData.password,
    });
    handleClose();
  };

  return (
    <>
      <h2 className={classes.title}>Регистрация</h2>
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
          className={classes.password}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="password">Пароль</InputLabel>
          <OutlinedInput
            name="password"
            id="password"
            type={show.password ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange}
            labelWidth={58}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleShow('password')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {show.password ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          className={classes.confirmPassword}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="confirm-password">
            Подтвердите пароль
          </InputLabel>
          <OutlinedInput
            name="confirmPassword"
            id="confirm-password"
            type={show.confirmPassword ? 'text' : 'password'}
            value={userData.confirmPassword}
            onChange={handleChange}
            labelWidth={163}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleShow('confirmPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {show.confirmPassword ? (
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
          <Typography variant="caption">Есть аккаунт?</Typography>
          <button
            type="button"
            name="signup"
            color="primary"
            className={classes.buttonClear}
            onClick={() => setTabName(0)}
          >
            Войдите
          </button>
        </div>
      </form>
    </>
  );
};
