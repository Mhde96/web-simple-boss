import { exportToJson } from "../utils/exportToJson";
import { db } from "./indexedDb";
import { dbTableKeys } from "./dbKeys";
import moment from "moment";
import { userType } from "../redux/app/app-type";
import { resciveBackupFromServer, sendBackupToServer } from "./data/dataDb";
import { api } from "../helper/api";
import { endpoints } from "../constant/endpoints";
import { dataType } from "../types/indexedDbType";

export const syncUserDb = async (user: userType) => {
  console.log('syncUserDb')
  console.log(user)
  // first we got user id
  // then we check if user has indexedDB or not
  // if he has we will not change any thing
  // if he don't we will create new data base for him
  // we will get backup from server
  // then we will compare between backup and local db
  // if last_sync in localDb news more than last_sync at server send new version to server
  // else delete local db and rescive data from server to local db
  let backup: dataType;
  let currentTimeFromServer = (await api.get(endpoints.getTimeFromServer)).data.data
  let user_id: number = user.id > 0 ? user.id : 0;

  await api.get(endpoints.backup_download).then((response) => {
    if (response.status == 200) {
      backup = response.data
    }
  })


  let userDb = await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.user_id)
    .equals(user_id)
    .first();

  if (userDb == undefined && backup != undefined) {
    resciveBackupFromServer(user, backup, userDb);
    return
  }

  let localdb_lastsync = parseInt(userDb.last_sync)
  let backup_lastsync = parseInt(backup.last_sync)

  console.log('localdb_lastsync : ', localdb_lastsync)
  console.log('backup_lastsync : ', backup_lastsync)

  if (localdb_lastsync === backup_lastsync) return




  if (localdb_lastsync > backup_lastsync || user.last_sync == null)
    sendBackupToServer(user_id, currentTimeFromServer);
  else if (localdb_lastsync < backup_lastsync) resciveBackupFromServer(user, backup, userDb);
};
