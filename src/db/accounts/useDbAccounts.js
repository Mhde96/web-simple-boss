import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../indexedDb";

export const useDbFetchAccounts = () => {
  let data = useLiveQuery(() => db.data.where("id").equals(1).toArray());
  let accounts = [];
  if (data?.length) {
    accounts = data[0].data.accounts;
  }

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

      return data;
    });
};
export const DbSaveAccount = (account) => {
  console.log(account);
  db.data
    .where("id")
    .equals(1)
    .modify((data) => {
      if (account.id) {
        for (let i = 0; i < data.data.accounts.length; i++) {
          let item = data.data.accounts[i];
          if (account.id == item.id) {
            data.data.accounts[i] = { ...item, name: account.name };
            break;
          }
        }
      }
      return data;
    });
};
const DbDeleteAccount = () => {};
