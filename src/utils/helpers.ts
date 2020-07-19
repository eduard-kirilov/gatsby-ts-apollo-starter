import { ICropText, IAllStringProps } from 'utils/interface';

export function cropText({ text, size }: ICropText) {
  return (text.length > size) ? `${text.slice(0, size)} ...` : text;
}

export function priceToStr(price: number) {
  const re = /(\d)(?=(\d{3})+(?!\d))/g;
  const re1 = /(\d{1})/;
  const newPrice = String(price);
  return newPrice.replace(re, '$1 ').replace(re1, '$ $1')
}

export function priceToNum(price: string) {
  const re = /(\$)?( )/gi;
  return Number(price.replace(re, ''))
}

export function priceSumArr(items: any) {
  if (!items || items.length === 0) return '$ 0';
  const allSum = items.reduce((acc: any, item: string) => acc + item);
  return priceToStr(allSum);
}

export const selectList: string[] = ['Macbook', 'Acer', 'Hp', 'Asus'];

export const selectUrl: IAllStringProps = {
  Macbook: '/api/v1/media/1-macbook.jpg?w=285&h=160',
  Acer: '/api/v1/media/2-acer.jpg?w=285&h=160',
  Hp: '/api/v1/media/3-hp.jpg?w=285&h=160',
  Asus: '/api/v1/media/4-asus.jpg?w=285&h=160',
};
