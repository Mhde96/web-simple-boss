import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmptyData } from "../../components/data/EmptyData";
import { ConfirmationDeleteDialog } from "../../components/dialogs/ConfirmationDeleteDialog";
import { endroutes } from "../../constant/endroutes";
import { deleteJournalIndexedDb, useFetchJournalsIndexedDb } from "../../db/data/journalsDb";
import {
  deleteJournalAsync,
  fetchJournalsAsync,
} from "../../redux/data/dataAsync";
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
  const journals = useFetchJournalsIndexedDb();

  const DeleteJournalAsync = (journal: journalType, isDelete: boolean) => {
  
    if (isDelete && journal.id) {
      deleteJournalIndexedDb(journal)
      // dispatch(deleteJournalAsync(journal));
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

  // return <EmptyData />;
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
