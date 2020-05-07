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
export interface IProduct {
  _id?: string;
  url: string;
  title: string;
  subtitle: string;
  price: string;
}
export interface IProducts {
  products?: IProduct[];
}
export interface IAutorize {
  authorized: boolean;
  loading: boolean;
  error?: string;
  currentUser?: any;
}
export interface ICropText {
  text: string;
  size: number;
}