/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import
  React, {
  FC,
  MouseEvent,
  ChangeEvent,
  useState,
  memo,
} from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IAllStringProps } from 'utils/interface';

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

const LoginMemo: FC<IProps> = ({
  handleClose,
  handleLogin,
  setTabName,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <Tilte>Login</Tilte>
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
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange}
            labelWidth={73}
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
          Login
        </ButtonStyled>
        <SignupSet>
          <Typography variant="caption">You don't have an account?</Typography>
          <ButtonClear
            type="button"
            name="signup"
            onClick={() => setTabName(1)}
          >
            Signup
          </ButtonClear>
        </SignupSet>
      </Form>
    </>
  );
};

export const Login = memo(LoginMemo);
