import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";
import { dbTableKeys } from "../dbKeys";
import { accountType } from "../../containers/accounts/account-type";
import { dataType } from "../../types/indexedDbType";

const cookies = new Cookies();
export const currentDataId = () => parseInt(cookies.get(cookiesKey.dbId));

export const useDbFetchAccounts = () => {
  let data = useLiveQuery(() =>
    db
      .table(dbTableKeys.data.table)
      .where(dbTableKeys.data.id)
      .equals(currentDataId())
      .first()
  );

  let accounts = data?.accounts?.length ? data?.accounts : [];
  // if (data?.length) {
  //   accounts = data[0].accounts;
  // }

  return accounts;
};

export const saveAccountIndexedDb = async (account: accountType) => {
  let generateId = 0;

  if (account.id == undefined) {
    let data = await db
      .table(dbTableKeys.data.table)
      .where(dbTableKeys.data.id)
      .equals(currentDataId())
      .first();
    let count = data.accounts.length;
    if (count > 0) generateId = data.accounts[count - 1].id + 1;
    else generateId == 1;
  }

  db.table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id)
    .equals(currentDataId())
    .modify((data: dataType) => {
      if (account.id) {
        for (let i = 0; i < data.accounts.length; i++) {
          let item = data.accounts[i];
          if (account.id == item.id) {
            data.accounts[i] = { ...item, ...account };
            break;
          }
        }
      } else {
        data.accounts.push({
          ...account,
          id: generateId,
        });
      }
      return data;
    });
};

export const DbDeleteAccount = (account: accountType) => {
  db.table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id)
    .equals(currentDataId())
    .modify((data: dataType) => {
      for (let i = 0; i < data.accounts.length; i++) {
        if (account.id == data.accounts[i].id) {
          data.accounts.splice(i, 1);
          console.log(data);
          return data;
        }
      }
    });
};
