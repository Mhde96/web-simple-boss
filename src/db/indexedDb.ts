import Dexie from "dexie";

export const db = new Dexie("BossAccounting");
db.version(1).stores({
  data: "++id, *accounts, *journals, name, publisher, created_at, updated_at, editor, last_sync, description, user_id",
  users: "++id, user_id, last_sync, financial_statement",
});

// const dbArray = [new Dexie("test1"), new Dexie("test2")];

// dbArray.map((db) => {
//   db.version(1).stores({
//     accounts: "++id, name ",
//     journals: "++id, name",
//   });

//   db.table("accounts").add({ name: "ahmad" });
//   db.table("journals").add({ name: "ahmad" });
// });

// dbArray[0].table("accounts").add({ name: "mahmoud" });
