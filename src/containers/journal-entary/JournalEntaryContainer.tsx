import { useParams } from "react-router-dom";
import { JournalEntaryPage } from "./JournalEntaryPage";

export const JournalEntaryContainer = () => {
  const { journal_id } = useParams();
  console.log(journal_id);
  return <JournalEntaryPage />;
};
