import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../indexedDb";

export const useDbFetchAccounts = () => {
  let accounts = useLiveQuery(() => db.data.where("id").equals(1).toArray());
  accounts = accounts[0].data.accounts;
  // let accounts = await  db.data.where("id").equals(1).first()
  // accounts = accounts.data.accounts

  return { accounts };
};

export const DbAddAccount = ({ name }) => {
  db.data
    .where("id")
    .equals(1)
    .modify((data) => {
      console.log(data);
      data.data.accounts.push({
        id: 1,
        name,
      });
      console.log(data);
      return data;
    });
};
const DbSaveAccount = () => {};
const DbDeleteAccount = () => {};
