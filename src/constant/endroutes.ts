export const endroutes = {
  login: "/login",
  register: "/register",
  forgetpassword: "/forgetpassword",
  changeforgetpassword: "/changeforgetpassword",
  otp: "/otp",
  journals: { path: "/journals", title: "Journal" },
  accounts: { path: "/accounts", title: "Account" },
  journalentaries: (id?: number | string) => {
    const name = "journalentaries";
    const path = `/${name}/:number`;
    const go = `/${name}/${id}`;
    const newJournal = `/${name}/new`;
    const title = "Journal";
    return { path, go, title, newJournal };
  },
  account_statment: (key?: string) => {
    const name = "account_statment";
    const path = `/${name}/:key`;
    const null_path = `/${name}`;
    const go = `/${name}/${key}`;
    const title = "Account statment";
    return { path, go, title, null_path };
  },

  trial_balance: { path: "/trial_balance", title: "Trial Balance" },
  trading_account: { path: "/tradingaccount", title: "Trading Account" },
  profit_and_loss_account: {
    path: "/profitandlossaccount",
    title: "Profit And Loss Account",
  },
  balancesheet: { path: "/balancesheet", title: "Balance Sheet" },
};
