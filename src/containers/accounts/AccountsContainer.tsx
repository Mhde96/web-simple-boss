import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { DbDeleteAccount, useDbFetchAccounts } from "../../db/data/accountsDb";
import { en } from "../../helper/languages/en";
import appSlice from "../../redux/app/appSlice";
import {
  deleteAccountAsync,
  fetchAccountsAsync,
} from "../../redux/data/dataAsync";
import { useAppDispatch } from "../../redux/hooks";
import { accountType } from "./account-type";
import { AccountDialog } from "./AccountDialog";
import { AccountsPage } from "./AccountsPage";

const columns: any = [
  { id: "id", name: "id" },
  { id: "name", name: "name" },
];

export const AccountsContainer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const accounts = useSelector(selectAccounts);
  const  accounts  = useDbFetchAccounts();
  const DeleteAccountAsync = (account: accountType, isDelete: boolean) => {
    dispatch(
      appSlice.actions.openConfirmBox({
        title: account.name,
        message: t(en.delete_message),
        handleSubmit: () => {
          DbDeleteAccount(account);
          dispatch(deleteAccountAsync(account));
        },
      })
    );
    // if (isDelete && account.id) {x
    //   dispatch(deleteAccountAsync(account));
    // } else
    //   setShowConfirmationDialog({
    //     show: true,
    //     data: account,
    //     title: account.name,
    //     body: "are you sure you want to delete " + account.name,
    //   });
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
      {/* <ConfirmationDeleteDialog
        data={showConfirmationDialog}
        setData={setShowConfirmationDialog}
        handleSubmit={() =>
          DeleteAccountAsync(showConfirmationDialog.data, true)
        }
      /> */}
      <AccountDialog />
      <AccountsPage {...props} />
    </>
  );
};
