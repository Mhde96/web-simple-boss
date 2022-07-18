import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ConfirmationDeleteDialog } from "../../components/dialogs/ConfirmationDeleteDialog";
import { endroutes } from "../../constant/endroutes";
import {
  deleteAccountAsync,
  fetchAccountsAsync,
  SaveAccountAsync,
} from "../../redux/data/dataAsync";
import { selectAccounts } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { accountType } from "./account-type";
import { AccountDialog } from "./AccountDialog";
import { AccountsPage } from "./AccountsPage";

const columns: any = [
  { id: "id", name: "id" },
  { id: "name", name: "name" },
];

export const AccountsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accounts = useSelector(selectAccounts);

  // Redux Async Functions
  const DeleteAccountAsync = (account: accountType, isDelete: boolean) => {
    if (isDelete && account.id) {
      dispatch(deleteAccountAsync(account));
    } else
      setShowConfirmationDialog({
        show: true,
        data: account,
        title: account.name,
        body: "are you sure you want to delete " + account.name,
      });
  };

  const handleNavigateAccount = (key: string) =>
    navigate(endroutes.account_statment(key).go);

  useEffect(() => {
    dispatch(fetchAccountsAsync());
  }, []);

  const [showConfirmationDialog, setShowConfirmationDialog] = useState<any>({
    show: false,
    data: {},
    title: "",
    body: "",
  });

  const props = {
    accounts,
    columns,
    DeleteAccountAsync,
    handleNavigateAccount,
  };
  return (
    <>
      <ConfirmationDeleteDialog
        data={showConfirmationDialog}
        setData={setShowConfirmationDialog}
        handleSubmit={() =>
          DeleteAccountAsync(showConfirmationDialog.data, true)
        }
      />
      <AccountDialog />
      <AccountsPage {...props} />
    </>
  );
};
