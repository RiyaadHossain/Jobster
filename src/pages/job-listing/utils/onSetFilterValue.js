export const onSetFilterValue = ({ values, setValues, newValue }) => {
  let existingLevels = values.split(",").filter((item) => item !== "");

  const isExist = existingLevels.find((item) => item === newValue);

  if (isExist)
    existingLevels = existingLevels.filter((item) => item !== newValue);
  else existingLevels.push(newValue);

  const levelString = existingLevels.join(",");
  setValues(levelString);
};
