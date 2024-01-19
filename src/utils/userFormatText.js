import { capitalizeFirstLetter } from "./capitalizeLetter";

export const userFormatText = (text) => {
  const hasSpace = text?.includes("_");

  if (!hasSpace) return capitalizeFirstLetter(text);

  let formattedText = "";
  const words = text?.split("_");
  words?.forEach((word) => {
    formattedText += capitalizeFirstLetter(word) + " ";
  });

  return formattedText;
};
