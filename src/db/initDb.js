import { exportToJson } from "../utils/exportToJson";
import { db } from "./indexedDb";
import { Cookies } from "react-cookie";

export const initDb = async () => {
  const cookies = new Cookies();
  const dbId = await cookies.get("dbId");
  console.log("dbId ", dbId);

  const dbArray = await db.data.toArray();

  if (dbArray.length == 0)
    await db.data.add({
      data: { accounts: [], journals: [] },
      name: "First DataBase",
    });
};

export const createDb = async ({ name }) => {
  await db.data.add({
    data: { accounts: [], journals: [] },
    name,
  });
};

export const exportDB = async () => {
  const JsonObject = await db.data.toArray();
  exportToJson(JsonObject);
};

export const importDB = async (e) => {
  const fileReader = new FileReader();
  fileReader.readAsText(e.target.files[0], "UTF-8");
  fileReader.onload = (e) => {
    console.log(JSON.parse(e.target.result));
  };
};

export const deleteDb = async ({ id }) => {
  await db.data.delete(id);
};
