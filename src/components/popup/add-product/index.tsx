/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, ChangeEvent, useState, memo } from 'react';

import { IAllStringProps } from 'utils/interface';
import { selectList, selectUrl } from 'utils/helpers';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import {
  ButtonStyled,
  Form,
  FormControlStyled,
  TextFieldStyled,
  Tilte,
} from './styles';


interface IProps {
  handleAddProduct: (props: IAllStringProps) => void;
  handleClose: () => void;
}

const PopupAddProductMemo: FC<IProps> = ({ handleAddProduct, handleClose }) => {
  const [productData, setProductData] = useState({
    price: '',
    subtitle: '',
    title: '',
    urlKey: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };


  const handleSubmit = () => {
    const { urlKey, ...restProps } = productData;
    const url: string = urlKey in selectUrl
      ? selectUrl[urlKey]
      : selectUrl.Macbook
    
    const data = {
      ...restProps,
      url,
    }
    handleAddProduct(data);
    handleClose();
  };

  return (
    <>
      <Tilte>Add product</Tilte>
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
            {selectList.map((item) => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
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
          Add
        </ButtonStyled>
      </Form>
    </>
  );
};

export const PopupAddProduct = memo(PopupAddProductMemo);
