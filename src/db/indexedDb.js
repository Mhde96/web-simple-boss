import Dexie from "dexie";

const db = new Dexie("exampleDatabase");
db.version(1).stores({
  name_of_object_store: "++id, name, price",
  name_of_another_object_store: "++id, title",
});
// const initializeDb = indexedDB.open('name_of_database', version)
