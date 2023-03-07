import Dexie from "dexie";

export const db = new Dexie("accountant");
db.version(1).stores({
  data: "++id, *data, name",
});
//, created_at, updated_at, publisher, editor
// const initializeDb = indexedDB.open('name_of_database', version)

// console.log(db.table("exampleDatabase"));
