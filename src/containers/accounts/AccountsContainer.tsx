import { useSelector } from "react-redux";
import { selectAccounts } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { AccountDialog } from "./AccountDialog";
import { AccountsPage } from "./AccountsPage";

export const AccountsContainer = () => {
  const dispatch = useAppDispatch();
  const accounts = useSelector(selectAccounts);
  const columns: any = [
    { id: "id", name: "id" },
    { id: "name", name: "name" },
  ];

  const props = { accounts, columns };
  return (
    <>
      <AccountDialog />
      <AccountsPage {...props} />;
    </>
  );
};
