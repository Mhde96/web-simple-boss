import { entryType } from "../journal-entry/journal-entry-type";

export type journalType = {
  id?: number;
  description: string;
  date: any;
  journal_entries?: Array<entryType>;
  journalentries?: Array<entryType>;
  number: number | string;
};

export type JournalPagePropsType = {
  journals: Array<journalType>;

  columns: Array<any>;
  handleNavigateToEntries: any;
  DeleteJournalAsync?: any;
};
