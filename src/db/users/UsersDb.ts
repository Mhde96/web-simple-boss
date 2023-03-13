import axios from "axios";
import moment from "moment";
import { userType } from "../../redux/app/app-type";
import { dbTableKeys } from "../dbKeys";
import { db } from "../indexedDb";

export const IndexedSaveUser = async (user: userType) => {
  // first we got user id
  // then we check if user has indexedDB or not
  // if he has we will not change any thing
  // if he don't we will create new data base for him
  // we will get backup from server
  // then we will compare between backup and local db
  // if last_sync in localDb news more than last_sync at server send new version to server
  // else delete local db and rescive data from server to local db

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
  await axios
    .get("http://localhost:8000/api/file_download/export.json")
    .then((response) => {
      backup = response.data;
    });

  // let data = await db
  //   .table(dbTableKeys.data.table)
  //   .where(dbTableKeys.data.user_id)
  //   .equals(user_id)
  //   .toArray();

  let localdb_latsync = moment(userDb.last_sync).valueOf();
  let backup_lastsync = moment(user.last_sync).valueOf();

  console.log("localdb_latsync", localdb_latsync);
  console.log("backup_lastsync", backup_lastsync);

  if (localdb_latsync > backup_lastsync) {
    // get json file
    // send to server
    console.log("localdb_latsync >");
  } else if (localdb_latsync < backup_lastsync) {
    // delete data inside server
    // put copy of server to indexedDB
    console.log("localdb_latsync <");
  }
};
