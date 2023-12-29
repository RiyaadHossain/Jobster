/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeLetter";

export const useFieldState = ({ refs, append }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [freshForm, setFreshForm] = useState(true);
  const [customError, setCustomError] = useState({});
  const [fieldData, setFieldData] = useState({});

  // Form Open-Close
  const openForm = () => setIsFormOpen(true);

  const closeForm = () => {
    setCustomError({});
    setIsFormOpen(false);
  };

  // On change
  const onChange = (data, name) => setFieldData({ ...fieldData, [name]: data });

  const setErrorMsg = (id) => `${capitalizeFirstLetter(id)} is Required`;

  // Append Data
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

  // Update Custom error while typing
  let changeLog = 0;
  refs.forEach((ref) => {
    if (ref.current?.value) changeLog++;
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
  }, [changeLog, freshForm]);

  return {
    isFormOpen,
    openForm,
    closeForm,
    onChange,
    appendData,
    fieldData,
    customError,
  };
};
