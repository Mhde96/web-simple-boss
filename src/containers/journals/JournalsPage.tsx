import { JournalPagePropsType } from "./journal-type";
import { JournalTable } from "../../components/table/journal/JournalTable";
export const JournalsPage = (props: JournalPagePropsType) => {
  return (
    <>
      <JournalTable data={props.journals} columns={props.columns} />
    </>
  );
};
