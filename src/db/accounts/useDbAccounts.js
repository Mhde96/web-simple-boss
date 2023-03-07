import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../indexedDb";

const useDbFetchAccounts = () => {
  const accounts = useLiveQuery(() => db.data.where("id").equales(1).toArray());
  console.log(accounts);
  return { accounts };
};
const DbSaveAccount = () => {};
const DbDeleteAccount = () => {};
