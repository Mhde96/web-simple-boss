export type AccountsPropsType = {
  accounts: Array<accountType>;
  columns: Array<any>;
  handleNavigateAccount: any;
  DeleteAccountAsync: any;
};

export type accountType = {
  id?: number;
  name: string;
  key?: string ;
  financial_statement: "0" | "1" | "2" | string;
  isDelete?: boolean; // this just if you want to delete account in redux async function
  debit?: any;
  credit?: any;
};
