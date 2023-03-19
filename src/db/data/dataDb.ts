import { api } from "../../helper/api";
import { userType } from "../../redux/app/app-type";
import { changeDbAsync } from "../../redux/app/appAsync";
import { dataType, emptyDataObject } from "../../types/indexedDbType";
import { exportToJson } from "../../utils/exportToJson";
import {  dbTableKeys } from "../dbKeys";
import { db } from "../indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";

export const registerNewUserIndexedDb = () => {
  const data: dataType = {

  };
  createDataIndexedDb(data);
};

export const selectSpecificDataIndexedDb = async () => {
  const cookies = new Cookies();
  let id = cookies.get(cookiesKey.dbId);
  let data;

  if (id > 0) {
    data = await db
      .table(dbTableKeys.data.table)
      .where(dbTableKeys.data.id)
      .equals(parseInt(id))
      .first();
  } else if (id != undefined) {
    data = await db.table(dbTableKeys.data.table).toArray();
    data = data[0];
  }

  return data;
};

export const createDataIndexedDb = async (data: dataType) => {
  db.table(dbTableKeys.data.table).add({
    ...emptyDataObject,
    name: data.name,
    description: data.description,
    user_id: data.user_id,
  });
};

export const updateDataIndexedDb = async (data: dataType) => {
  db.table(dbTableKeys.data.table).update(data.id, {
    name: data.name,
    description: data.description,
  });
};

export const deleteDataIndexedDb = async (despatch: any, { id }: any) => {
  await db.table(dbTableKeys.data.table).delete(id);
  const table = await db.table(dbTableKeys.data.table).toArray();
  if (table.length > 0) despatch(changeDbAsync(table[0]));
};

export const exportSpecificDataIndexedDb = async ({ id }: any) => {
  let data = await db.table(dbTableKeys.data.table).toArray();
  let JsonObject = data.find((item) => item.id == id);
  exportToJson(JsonObject);
};

export const sendBackupToServer = async (user_id: number) => {
  console.log("send backup");
  let data = await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.user_id)
    .equals(user_id)
    .toArray();

  const json = JSON.stringify(data);
  const blob = new Blob([json], {
    type: "application/json",
  });
  const jsonData = new FormData();
  jsonData.append("file", blob);

  await api({
    method: "post",
    url: "/file_upload",
    data: jsonData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => console.log("response ====> ", response));
};

export const resciveBackupFromServer = async (user: userType) => {
  console.log("rescive backup");
  let userDb = await db
    .table(dbTableKeys.users.table)
    .where(dbTableKeys.users.user_id)
    .equals(user.id)
    .first();

  let backup: dataType;
  if (user.last_sync != null) {
    let link = "http://localhost:8000/api/file_download/" + user.id + ".json";
    await api.get(link).then((response) => {
      backup = response.data;
    });
  }

  await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.user_id)
    .equals(user.id)
    .delete();
  await db.table(dbTableKeys.data.table).bulkAdd(backup);
  await db
    .table(dbTableKeys.users.table)
    .update(userDb.id, { [dbTableKeys.users.last_sync]: new Date() });
};

export const importDataFromDeviceIndexedDb = async (e: any) => {
  const fileReader = new FileReader();
  await fileReader.readAsText(e.target.files[0], "UTF-8");
  let importedData = [];
  fileReader.onload = async (e: any) => {
    importedData = await JSON.parse(e.target.result);
    delete importedData.id;
    await db.table(dbTableKeys.data.table).add(importedData);
  };
  // db.data.add(importedData)
};
