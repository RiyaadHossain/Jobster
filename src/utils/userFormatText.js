import { capitalizeFirstLetter } from "./capitalizeLetter";

export const userFormatText = (text, options) => {
  const hasSpace = text?.includes("_");

  if (!hasSpace) return capitalizeFirstLetter(text);

  let formattedText = "";

  let joinBy = " ";
  if (options?.hiphens) joinBy = "-";

  const words = text?.split("_");
  words?.forEach((word, i) => {
    if (i === words.length - 1) joinBy = "";
    formattedText += capitalizeFirstLetter(word) + joinBy;
  });

  return formattedText;
};
