import numeral from "numeral";

const numberFormat = (value: number): string => {
  return numeral(value).format("0,0");
};
const decimalFormat = (value: number): string => {
  return numeral(value).format("0,0.00");
};
const intFormat = (value: number): string => {
  return numeral(value).format("0,0");
};
const pad = (num: number, size: number) => {
  const s = "000000000" + num;
  return s.substring(s.length - size);
};

export default {
  numberFormat,
  decimalFormat,
  intFormat,
  pad,
};
