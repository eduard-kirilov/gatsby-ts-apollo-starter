/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

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
  handleSignup?: (props: IAllStringProps) => void;
}

interface IShow {
  [key: string]: boolean,
};

export const Signup: React.FC<IProps> = ({
  handleClose,
  handleSignup,
  setTabName,
}) => {
  const [show, setShow] = React.useState<IShow>({
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
      <Tilte>Регистрация</Tilte>
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
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            name="password"
            id="password"
            type={show.password ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange}
            labelWidth={73}
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
        </FormControlStyled>
        <FormControlStyled
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="confirm-password">
            Confirm your password
          </InputLabel>
          <OutlinedInput
            name="confirmPassword"
            id="confirm-password"
            type={show.confirmPassword ? 'text' : 'password'}
            value={userData.confirmPassword}
            onChange={handleChange}
            labelWidth={170}
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
        </FormControlStyled>
        <ButtonStyled
          name="login"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Signup
        </ButtonStyled>
        <SignupSet>
          <Typography variant="caption">Do you have an account?</Typography>
          <ButtonClear
            type="button"
            name="signup"
            onClick={() => setTabName(0)}
          >
            Login
          </ButtonClear>
        </SignupSet>
      </Form>
    </>
  );
};
