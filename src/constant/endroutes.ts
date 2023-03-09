import { en } from "../helper/languages/en";

export const endroutes = {
  home: { title: en.home, path: "/" },
  login: "/login",
  register: "/register",
  forgetpassword: "/forgetpassword",
  changeforgetpassword: "/changeforgetpassword",
  otp: "/otp",
  thankyou: "/thankyou",
  db: "db",
  about: { path: "/about-us", title: en.about },
  blog: { path: "/blog", title: en.blog },
  contact: { path: "/contact-us", title: en.contact },
  journals: { path: "/journals", title: en.journals },
  accounts: { path: "/accounts", title: en.accounts },
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
    const title = en.account_statement;
    return { path, go, title, null_path };
  },

  trial_balance: { path: "/trial_balance", title: en.trial_balance },
  trading_account: { path: "/tradingaccount", title: en.trading },
  profit_and_loss_account: {
    path: "/profitandlossaccount",
    title: en.profit_and_loss,
  },
  balancesheet: { path: "/balancesheet", title: en.balance_sheet },
  income_statement: { path: "/income_statement", title: en.income_statement },
};
