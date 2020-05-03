/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IClasses, IAllStringProps } from 'utils/interface';

import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@material-ui/core';

import {
  ButtonClear,
  ButtonStyled,
  Form,
  FormControlStyled,
  SignupSet,
  TextFieldStyled,
  Tilte,
} from './styles';

interface IProps {
  handleClose?: () => void;
  setTabName: (tabIndex: number) => void;
  handleLogin?: (props: IAllStringProps) => void;
}

export const Login: React.FC<IProps & IClasses> = ({
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
      <Tilte>Вход</Tilte>
      <Form noValidate autoComplete="off">
        <TextFieldStyled
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={userData.email}
          onChange={handleChange}
          size="small"
        />
        <FormControlStyled
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
        </FormControlStyled>
        <ButtonStyled
          name="login"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Войти
        </ButtonStyled>
        <SignupSet>
          <Typography variant="caption">Нет аккаунта?</Typography>
          <ButtonClear
            type="button"
            name="signup"
            onClick={() => setTabName(1)}
          >
            Зарегистрируйтесь
          </ButtonClear>
        </SignupSet>
      </Form>
    </>
  );
};
