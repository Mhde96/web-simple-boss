import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ConfirmationDeleteDialog } from "../../components/dialogs/ConfirmationDeleteDialog";
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

  const DeleteJournalAsync = (journal: journalType, isDelete: boolean) => {
    if (isDelete && journal.id) {
      dispatch(deleteJournalAsync(journal));
    } else {
      setShowConfirmationDialog({
        show: true,
        data: journal,
        title: "Delete Journal",
        body: "are you sure you want to delete " + journal.number,
      });
    }
  };
  const handleNavigateToEntries = (number: number) =>
    navigate(endroutes.journalentaries(number).go);

  useEffect(() => {
    dispatch(fetchJournalsAsync());
  }, []);

  const [showConfirmationDialog, setShowConfirmationDialog] = useState<any>({
    show: false,
    data: {},
    title: "",
    body: "",
  });

  const props = {
    journals,
    columns,
    handleNavigateToEntries,
    DeleteJournalAsync,
  };
  return (
    <>
      <ConfirmationDeleteDialog
        data={showConfirmationDialog}
        setData={setShowConfirmationDialog}
        handleSubmit={() =>
          DeleteJournalAsync(showConfirmationDialog.data, true)
        }
      />
      <JournalsPage {...props} />
    </>
  );
};
