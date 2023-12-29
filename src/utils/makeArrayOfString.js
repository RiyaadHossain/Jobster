export const makeArrayOfString = (array, property) => {
  const result = [];
  if (!array.length) return result;
  
  array.forEach((item) => result.push(item[property]));

  return result;
};
