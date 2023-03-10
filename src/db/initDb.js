import { exportToJson } from "../utils/exportToJson";
import { db } from "./indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../constant/cookiesKey";
import { dbKeys } from "./dbKeys";

export const initDb = async () => {
  const cookies = new Cookies();
  const dbId = await cookies.get(cookiesKey.dbId);

  const dbArray = await db.data.toArray();

  if (dbArray.length == 0)
    await db.data.add({
      data: { accounts: [], journals: [] },
      name: "First DataBase",
    });
};

export const createDb = async ({ name, description, user }) => {
  await db.data.add({
    data: { accounts: [], journals: [] },
    name,
    description,

    created_at: new Date(),
    publisher: user.name,

    updated_at: new Date(),
    editor: user.name,
  });
};

export const saveDb = async ({ id, name, description, user }) => {
  if (id) {
    await db.data
      .where(dbKeys.id)
      .equals(id)
      .modify((data) => {
        console.log(data);
        data = { ...data, name, description };
        console.log(data);
        return data;
      });
  } else {
    await db.data.add({
      data: { accounts: [], journals: [] },
      name,
      description,

      created_at: new Date(),
      publisher: user.name,

      updated_at: new Date(),
      editor: user.name,
    });
  }
};

export const exportDB = async ({ id }) => {
  let data = await db.data.toArray();
  let JsonObject = data.find((item) => item.id == id);
  exportToJson(JsonObject);
};

export const importDB = async (e) => {
  const fileReader = new FileReader();
  await fileReader.readAsText(e.target.files[0], "UTF-8");
  let importedData = [];
  fileReader.onload = async (e) => {
    importedData = await JSON.parse(e.target.result);
    delete importedData.id;
    await db.data.add(importedData);
  };
  // db.data.add(importedData)
};

export const deleteDb = async ({ id }) => {
  await db.data.delete(id);
};
