/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
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

import { IClasses, IAllStringProps } from 'utils/interface';

interface IProps {
  signUp?: (props: IAllStringProps) => void;
  handleLogin?: (props: IAllStringProps) => void;
  data: any;
}

export const PopupAuth: React.FC<IProps & IClasses> = ({
  classes,
  handleLogin,
  data,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className={classes.title}>Вход или Регистрация</h2>
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
          className={classes.textField}
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
            labelWidth={70}
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
        <div className={classes.buttonSet}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleLogin(userData)}
          >
            Войти
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Регистрация
          </Button>
        </div>
      </form>
    </>
  );
};
