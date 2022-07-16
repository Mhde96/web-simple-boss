export const financial_statement_obg = {
  balance_sheet: {
    value: 0,
    label: "Balance Sheet",
  },
  profit_loss: {
    value: 1,
    label: "Profit And Loss Account",
  },
  trading: {
    value: 2,
    label: "trading Account",
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
