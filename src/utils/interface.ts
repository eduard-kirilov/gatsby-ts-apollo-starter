/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
export interface IAllStringProps {
  [key: string]: string;
}
export interface IClasses {
  classes?: IAllStringProps;
}
export interface IChildren {
  children: React.ReactNode;
}
export interface ICardProductProps {
  url: string;
  title: string;
  subtitle: string;
}
export interface IProductsProps {
  products?: ICardProductProps[];
}
export interface IAutorize {
  authorized: boolean;
  loading: boolean;
  error?: string;
  currentUser?: any;
}
export interface IHeaderProps {
  authorized: boolean;
  currentUser: IAllStringProps;
  handleOpen?: () => void;
  logout?: () => void;
}