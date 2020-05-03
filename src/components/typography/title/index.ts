/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core/styles';

interface IPropsWeight {
  [key: string]: number;
}
interface IPropsTypography {
  [key: string]: any;
}
interface IProps {
  theme: Theme;
  weight: string;
}

const switchWeight = (type: IPropsTypography): IPropsWeight => ({
  light: type.fontWeightLight,
  regular: type.fontWeightRegular,
  medium: type.fontWeightMedium,
  bold: type.fontWeightBold,
});

export const Title1 = styled.h1<IProps>`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  margin: 0;
`;
export const Title2 = styled.h2<IProps>`
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  margin: 0;
`;
export const Title3 = styled.h3<IProps>`
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  margin: 0;
`;
export const Title4 = styled.h4<IProps>`
  font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  margin: 0;
`;
export const Title5 = styled.h5<IProps>`
  font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  margin: 0;
`;