import { api } from "../../helper/api";
import { userType } from "../../redux/app/app-type";
import { changeDbAsync } from "../../redux/app/appAsync";
import { dataType, emptyDataObject } from "../../types/indexedDbType";
import { exportToJson } from "../../utils/exportToJson";
import { dbTableKeys } from "../dbKeys";
import { db } from "../indexedDb";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";
import { useLiveQuery } from "dexie-react-hooks";
import { endpoints } from "../../constant/endpoints";
import { currentDataId } from "./accountsDb";

export const registerNewUserIndexedDb = () => {
  const data: dataType = {};
  createDataIndexedDb(data);
};

// export const getCurrentDataINdexedDb = (dbid: string) => {

//   const data = useLiveQuery(() =>
//     db
//       .table(dbTableKeys.data.table)
//       .where(dbTableKeys.data.id)
//       .equals(parseInt(dbid))
//       .first()
//   );

//   console.log(data);
//   return data;
// };

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

export const sendBackupToServer = async (user_id: number, currentTimeFromServer: number) => {

  console.log("send backup");

  await db.table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id).equals(currentDataId())
    .modify((data: dataType): dataType => {

      return { ...data, last_sync: currentTimeFromServer }
    })

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
    url: endpoints.backup_upload,
    data: jsonData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => console.log("response ====> ", response));

};

export const resciveBackupFromServer = async (user: userType, backup: dataType) => {
  console.log("rescive backup");
  let userDb = await db
    .table(dbTableKeys.users.table)
    .where(dbTableKeys.users.user_id)
    .equals(user.id)
    .first();

  console.log(user.last_sync)
  console.log("backup ==> ", backup);
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
