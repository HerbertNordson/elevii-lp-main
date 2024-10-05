export const normalizePhoneNumber = (value: string) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};

export const normalizeFormatCurrency = (value: string) => {
  if (!value) return "";

  const cleanValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));

  if (isNaN(cleanValue)) return "R$ 0,00";

  const formattedValue = cleanValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
};
