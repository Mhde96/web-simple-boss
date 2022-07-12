import { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const dispatch = useAppDispatch();
  const accounts = useSelector(selectAccounts);

  const DeleteAccountAsync = (account: accountType) =>
    dispatch(deleteAccountAsync(account));

  useEffect(() => {
    dispatch(fetchAccountsAsync());
  }, []);

  const props = { accounts, columns, DeleteAccountAsync };
  return (
    <>
      <AccountDialog />
      <AccountsPage {...props} />
    </>
  );
};
