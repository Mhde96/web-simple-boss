import Dexie from "dexie";

export const db = new Dexie("exampleDatabase");
db.version(1).stores({
  data: "++id, *data, name, *categories",
});
//  created_at, updated_at, publisher, editor
// console.log(db.table("exampleDatabase"));
