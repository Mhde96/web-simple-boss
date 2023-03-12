import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";
import { dbKeys } from "../dbKeys";

const cookies = new Cookies();
const dbId = () => parseInt(cookies.get(cookiesKey.dbId));

export const useDbFetchAccounts = () => {
  let data = useLiveQuery(() =>
    db.data.where(dbKeys.id).equals(dbId()).toArray()
  );

  let accounts = [];
  if (data?.length) {
    accounts = data[0].data.accounts;
  }

  return { accounts };
};

export const DbSaveAccount = async (account) => {
  let generateId = 0;

  if (account.id == undefined) {
    let data = await db.data.where(dbKeys.id).equals(dbId()).first();
    let count = data.data.accounts.length;
    if (count > 0) generateId = data.data.accounts[count - 1].id + 1;
    else generateId == 1
  }

  db.data
    .where(dbKeys.id)
    .equals(dbId())
    .modify((data) => {
      if (account.id) {
        for (let i = 0; i < data.data.accounts.length; i++) {
          let item = data.data.accounts[i];
          if (account.id == item.id) {
            data.data.accounts[i] = { ...item, name: account.name };
            break;
          }
        }
      } else {
        data.data.accounts.push({
          id: generateId,
          name: account.name,
        });
      }
      return data;
    });
};

export const DbDeleteAccount = (account) => {
  db.data
    .where(dbKeys.id)
    .equals(dbId())
    .modify((data) => {
      for (let i = 0; i < data.data.accounts.length; i++) {
        if (account.id == data.data.accounts[i].id) {
          data.data.accounts.splice(i, 1);
          console.log(data);
          return data;
        }
      }
    });
};
