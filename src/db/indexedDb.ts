import Dexie from "dexie";
import { accountType } from "../containers/accounts/account-type";
import { journalType } from "../containers/journals/journal-type";

export const db = new Dexie("accountant");
db.version(1).stores({
  data: "++id, *data, name, publisher, created_at, updated_at, editor, last_sync, description, user_id",
  users: "++id, user_id, last_sync",
});

// db.version(1).stores({
//   data: "++id, data, name"
// });

type indexedDB = {
  id: number;
  data: Array<{
    accounts: Array<accountType>;
    journals: Array<journalType>;
  }>;
  name: string; // name of database
  description: string;
  publisher: string;
  created_at: Date;
  editor: string;
  updated_at: Date;
  last_sync: Date;
};
// const initializeDb = indexedDB.open('name_of_database', version)

// console.log(db.table("exampleDatabase"));
