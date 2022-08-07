import { en } from "../helper/languages/en";

export const financial_statement_obg = {
  balance_sheet: {
    value: "0",
    label: en.balance_sheet,
  },
  profit_loss: {
    value: "1",
    label: en.profit_and_loss,
  },
  trading: {
    value: "2",
    label: en.trading,
  },
};

export const financial_statement_array = [
  {
    value: financial_statement_obg.balance_sheet.value,
    label: financial_statement_obg.balance_sheet.label,
  },
  {
    value: financial_statement_obg.profit_loss.value,
    label: financial_statement_obg.profit_loss.label,
  },
  {
    value: financial_statement_obg.trading.value,
    label: financial_statement_obg.trading.label,
  },
];
