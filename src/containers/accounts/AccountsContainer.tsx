import { useSelector } from "react-redux";
import { selectAccounts } from "../../redux/data/dataSlice";
import { AccountsPage } from "./AccountsPage";

export const AccountsContainer = () => {
  const accounts = useSelector(selectAccounts);
  const columns: any = [
    { id: "id", name: "id" },
    { id: "name", name: "name" },
  ];
  const props = { accounts, columns };
  return <AccountsPage {...props} />;
};
