export const endroutes = {
  login: "login",
  register: 'register',
  forgetpassword: 'forgetpassword',
  changeforgetpassword:'changeforgetpassword',
  otp: 'otp',
  journals: { path: "journals", title: "Journal" },
  accounts: { path: "accounts", title: "Account" },
  journalentaries: (id?: number) => {
    const name = "journalentaries";
    const path = `${name}/:journal_id`;
    const go = `/${name}/${id}`;
    const title = "Journal";
    return { path, go, title };
  },
};
