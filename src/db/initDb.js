import { exportToJson } from "../utils/exportToJson";
import { db } from "./indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../constant/cookiesKey";
import { dbKeys } from "./dbKeys";
import { changeDbAsync } from "../redux/app/appAsync";

export const selectDb = async () => {
  const cookies = new Cookies();
  let id = cookies.get(cookiesKey.dbId);
  let data = [];

  if (id > 0) {
    data = await db
      .table("data")
      .where(dbKeys.id)
      .equals(parseInt(id))
      .toArray();
  } else if (id != undefined) {
    data = await db.data.toArray();
  }

  data = data[0];
  // console.log(data)
  // const { id, name } = data[0];
  // console.log(data[0]);
  // return { id, name };

  return data;
};

export const saveDb = async ({ id, name, description, user }) => {
  if (id) {
    db.data.where(dbKeys.id).equals(parseInt(id)).modify({ name, description });
  } else {
    db.data.add({
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

export const deleteDb = async (despatch, { id }) => {
  await db.data.delete(id);
  const table = await db.table("data").toArray();
  if (table.length > 0) despatch(changeDbAsync(table[0]));
};
