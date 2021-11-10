export const normalizePhoneNumber = (telephoneNumber: string) => {
  const PATTERN = /\D/g;
  let formattedInputValue = "";
  const inputNumbersValue = telephoneNumber.replace(PATTERN, "");
  const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
  formattedInputValue = firstSymbols;
  if (firstSymbols === "8") {
    formattedInputValue = inputNumbersValue;
  }
  if (firstSymbols === "+7") {
    formattedInputValue = "+" + inputNumbersValue;
  }

  return formattedInputValue;
};
