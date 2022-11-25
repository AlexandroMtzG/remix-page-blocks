const toCamelCase = (value: string) => {
  return value
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default {
  toCamelCase,
  capitalize,
};
