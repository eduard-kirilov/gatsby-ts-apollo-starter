import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Text1 } from 'components/typography';

interface IBox {
  theme: Theme;
  justifyContent: string;
}

export const Wrapper = styled.div<{ theme: Theme }>`
  padding-top: 90px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Text = styled(Text1)<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
export const Box = styled.div<IBox>`
  height: 100%;
  display: flex;
  align-items: center;
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    justify-content: center;
  }
`;
