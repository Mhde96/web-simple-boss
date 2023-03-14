import axios from "axios";
import moment from "moment";
import { userType } from "../../redux/app/app-type";
import { dbTableKeys } from "../dbKeys";
import { db } from "../indexedDb";
import { api } from "../../helper/api";

export const IndexedSaveUser = async (user: userType) => {
  // first we got user id
  // then we check if user has indexedDB or not
  // if he has we will not change any thing
  // if he don't we will create new data base for him
  // we will get backup from server
  // then we will compare between backup and local db
  // if last_sync in localDb news more than last_sync at server send new version to server
  // else delete local db and rescive data from server to local db

  console.log("user", user);

  let user_id: number = user.id > 0 ? user.id : 0;

  let userDb = await db
    .table(dbTableKeys.users.table)
    .where(dbTableKeys.users.user_id)
    .equals(user_id)
    .first();

  if (userDb == undefined) {
    await db.table(dbTableKeys.users.table).add({
      user_id: user?.id,
      email: user?.email,
      last_sync: new Date().toString(),
    });
  } else {
    await db.table(dbTableKeys.users.table).update(userDb.id, {
      user_id: user.id,
      email: user.email,
      // last_sync: new Date().toString(),
    });
  }

  let backup;

  if (user.last_sync != null) {
    let link = "http://localhost:8000/api/file_download/" + user_id + ".json";
    await api.get(link).then((response) => {
      backup = response.data;
    });
  }

  let localdb_latsync = moment(userDb.last_sync).valueOf();
  let backup_lastsync = moment(user.last_sync).valueOf();

  console.log("localdb_latsync", localdb_latsync);
  console.log("backup_lastsync", backup_lastsync);

  if (localdb_latsync > backup_lastsync || user.last_sync == null) {
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

   
    console.log("localdb_latsync >");
  } else if (localdb_latsync < backup_lastsync) {
    // delete data inside server
    // put copy of server to indexedDB
    console.log("localdb_latsync <");
  }
};
