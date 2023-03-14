import { accountType } from "../containers/accounts/account-type";
import { journalType } from "../containers/journals/journal-type";

type indexedDBType = {
  data: dataType;
  users: {
    id: number;
    user_id: number;
    last_sync: string;
  };
};

export type dataType = {
  id?: number;
  accounts: Array<accountType>;
  journals: Array<journalType>;
  name: string; // name of database
  description: string;
  publisher?: string;
  created_at?: Date;
  editor?: string;
  updated_at?: Date;
  last_sync?: Date;
  user_id?: number;
};

export let emptyDataObject: dataType = {
  id: undefined,
  accounts: [],
  journals: [],
  name: "",
  created_at: new Date(),
  description: "",
  editor: "",
  last_sync: new Date(),
  publisher: "",
  updated_at: new Date(),
  user_id: undefined,
};
