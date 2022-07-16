import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import {
  deleteJournalAsync,
  fetchJournalsAsync,
} from "../../redux/data/dataAsync";
import { selectJournals } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { journalType } from "./journal-type";
import { JournalsPage } from "./JournalsPage";

const columns = [
  { id: "description", name: "description" },
  { id: "date", name: "date" },
];

export const JournalsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const journals = useSelector(selectJournals);

  const DeleteJournalAsync = (journal: journalType) =>
    dispatch(deleteJournalAsync(journal));
  const handleNavigateToEntries = (number: number) =>
    navigate(endroutes.journalentaries(number).go);

  useEffect(() => {
    dispatch(fetchJournalsAsync());
  }, []);
  const props = {
    journals,
    columns,
    handleNavigateToEntries,
    DeleteJournalAsync,
  };
  return <JournalsPage {...props} />;
};
