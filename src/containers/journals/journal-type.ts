export type journalType = {
  id?: number;
  description: string;
  date: any;
  number?: number | string;
};

export type JournalPagePropsType = {
  journals: Array<journalType>;
  columns: Array<any>;
};
