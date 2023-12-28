/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeLetter";

export const useFieldState = ({ refs, append }) => {
  const [freshForm, setFreshForm] = useState(true);
  const [customError, setCustomError] = useState({});
  const [fieldData, setFieldData] = useState({});

  const onChange = (data, name) => setFieldData({ ...fieldData, [name]: data });

  const setErrorMsg = (id) => `${capitalizeFirstLetter(id)} is Required`;

  const appendData = () => {
    setFreshForm(false);

    const hasEmptyInput = refs.some((ref) => !ref.current?.value);

    if (hasEmptyInput) {
      refs.forEach((ref) => {
        if (!ref.current?.value)
          setCustomError((prev) => ({
            ...prev,
            [ref.current?.id]: setErrorMsg(ref.current?.id),
          }));
      });

      return;
    }

    append(fieldData);
    setFieldData({});
    setFreshForm(true);

    refs.forEach((ref) => (ref.current.value = ""));
    setCustomError({});
  };

  const changeLog = [];
  refs.forEach((ref) => {
    if (ref.current?.value)
      changeLog.push(ref.current?.value)
    // else
      
  });

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref.current?.value && !freshForm)
        setCustomError((prev) => ({
          ...prev,
          [ref.current?.id]: setErrorMsg(ref.current?.id),
        }));
      else if (ref.current?.value)
        setCustomError((prev) => ({
          ...prev,
          [ref.current?.id]: "",
        }));
    });
  }, [...changeLog, freshForm]); // ? `refs` state causing infinity rerenders

  return { fieldData, customError, appendData, onChange };
};
