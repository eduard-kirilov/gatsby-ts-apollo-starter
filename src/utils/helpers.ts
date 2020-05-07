import { ICropText } from 'utils/interface';

export const cropText = ({ text, size }: ICropText) => {
  return (text.length > size) ? `${text.slice(0, size)} ...` : text;
}