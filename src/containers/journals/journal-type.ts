export type journalType = {
  id: number;
  description: string;
  date: any;
};

export type JournalPagePropsType = {
  journals: Array<journalType>;
  columns: Array<any>;
};
