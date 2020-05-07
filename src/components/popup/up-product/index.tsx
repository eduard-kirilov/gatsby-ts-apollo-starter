/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IAllStringProps, IProduct } from 'utils/interface';
import { selectList, selectUrl } from './url';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

import {
  ButtonStyled,
  Form,
  FormControlStyled,
  TextFieldStyled,
  Tilte,
} from './styles';

interface IProps {
  handleUpProduct: (props: IAllStringProps) => void;
  handleClose: () => void;
  product: IProduct;
}

export const PopupUpProduct: React.FC<IProps> = ({
  handleUpProduct,
  handleClose,
  product,
}) => {
  const [productData, setProductData] = React.useState({
    _id: product._id,
    price: product.price,
    subtitle: product.subtitle,
    title: product.title,
    urlKey: Object.entries(selectUrl).filter(
      ([key, item]) => item === product.url,
    )[0][0],
  });
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { urlKey, ...restProps } = productData;
    const url: string =
      urlKey in selectUrl ? selectUrl[urlKey] : selectUrl.Macbook;

    const data = {
      ...restProps,
      url,
    };
    handleUpProduct(data);
    handleClose();
  };

  return (
    <>
      <Tilte>Update the product</Tilte>
      <Form noValidate autoComplete="off">
        <TextFieldStyled
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={productData.title}
          onChange={handleChange}
          size="small"
        />
        <TextFieldStyled
          name="subtitle"
          id="outlined-multiline-static"
          label="Subtitle"
          multiline
          rows={4}
          variant="outlined"
          value={productData.subtitle}
          onChange={handleChange}
          size="small"
        />
        <FormControlStyled variant="outlined" size="small">
          <InputLabel id="add-product-url">Image url</InputLabel>
          <Select
            name="urlKey"
            labelId="add-product-url"
            id="add-product-url-outlined"
            value={productData.urlKey}
            onChange={handleChange}
            label="Image url"
          >
            {selectList.map(item => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControlStyled>
        <TextFieldStyled
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={productData.price}
          onChange={handleChange}
          size="small"
        />
        <ButtonStyled
          name="add-product"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Update
        </ButtonStyled>
      </Form>
    </>
  );
};
