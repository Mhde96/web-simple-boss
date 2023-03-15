import Dexie from "dexie";
import {
  importDB,
  exportDB,
  importInto,
  peakImportFile,
  DexieExportJsonMeta,
} from "dexie-export-import";

let array = [];

const dbTest = new Dexie("test");

export const initIndexedDb = async (json) => {
  await [...json].map(async (item) => {
    await array.push(new Dexie(item.dbName));
  });

  await array.map(async (db, index) => {
    await db.version(1).stores({
      friends: "++id, name", // Primary key and indexed props
    });

    // db.table("friends").add({ name: "ahmad1" });
  });

  console.log(array);

  //   const blob = await exportDB(db);
  //     saveFile(blob, "filename.json");
};

export const addToDatabase = () => {
  array[0].table("friends").add({ name: "ssss" });
};

export const exportAllDatabase = async () => {
  let json = await [];
  let counter = 0;
  await array.map(async (db) => {
    counter++;
    const blob = await exportDB(db);
    const _json = await JSON.parse(await blob.text());

    await json.push(_json);
    console.log(json);
  });
};
function saveFile(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
}
