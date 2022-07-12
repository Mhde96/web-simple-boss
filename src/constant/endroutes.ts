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
  account_statment: (id?: number) => {
    const name = "account_statment";
    const path = `/${name}/:id`;
    const null_path = `/${name}`;
    const go = `/${name}/${id}`;
    const title = "Account statment";
    return { path, go, title, null_path };
  },

  trading_account: { path: "/tradingaccount", title: "Trading Account" },
  profit_and_loss_account: {
    path: "/profitandlossaccount",
    title: "Profit And Loss Account",
  },
  balancesheet: { path: "/balancesheet", title: "Balance Sheet" },
};
