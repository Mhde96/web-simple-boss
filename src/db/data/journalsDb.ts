import { useLiveQuery } from "dexie-react-hooks";
import { entryType } from "../../containers/entry/journal-entry-type";
import { journalType } from "../../containers/journals/journal-type";
import { dataType } from "../../types/indexedDbType";
import { dbTableKeys } from "../dbKeys";
import { db } from "../indexedDb";
import { currentDataId } from "./accountsDb";

export const useFetchJournalsIndexedDb = (): Array<journalType> => {
  let data: any = useLiveQuery(() =>
    db
      .table(dbTableKeys.data.table)
      .where(dbTableKeys.data.id)
      .equals(currentDataId())
      .first()
  );

  let journals: Array<journalType> = data?.journals?.length
    ? data?.journals
    : [];

  return journals;
};

export const saveJournalsIndexedDb = async (journal: journalType) => {
  let isUpdate = false;
  let data: dataType = await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id)
    .equals(currentDataId())
    .first();

  let journals = data.journals;

  if (journal.id == undefined)
    if (journals.length == 0) journal.id = 1;
    else journal.id = journals[journals.length - 1].id + 1;
  else {
    isUpdate = true;
  }


  journal.number = journal.id

  let journalentries: Array<entryType> = [];
  journal.journalentries?.map((entry, index) => {
    if (entry?.debit > 0 || entry?.credit > 0) {
      journalentries.push({ ...entry, id: index + 1 });
    }
  });

  journal.journalentries = journalentries;

  await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id)
    .equals(currentDataId())
    .modify((obg: dataType) => {
      if (isUpdate) {
        for (let i = 0; i < data.journals.length; i++)
          if (journal.id == obg.journals[i].id) obg.journals[i] = journal;
      } else obg.journals.push(journal);
      return obg;
    });
};

export const deleteJournalIndexedDb = async (journal: journalType) => {
  await db
    .table(dbTableKeys.data.table)
    .where(dbTableKeys.data.id)
    .equals(currentDataId())
    .modify((data: dataType) => {
      for (let i = 0; i < data.journals.length; i++)
        if (journal.id == data.journals[i].id) {
          data.journals.splice(i, 1);
          return data;
        }
    });
};
