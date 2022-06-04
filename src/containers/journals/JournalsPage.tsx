import { JournalPagePropsType } from "./journal-type";
import { Table } from "../../components/table/Table";
export const JournalsPage = (props: JournalPagePropsType) => {
  return (
    <>
      <Table data={props.journals} columns={props.columns} />
    </>
  );
};
