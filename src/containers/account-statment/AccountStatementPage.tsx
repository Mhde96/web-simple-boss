import DataGrid, {
  Column,
  Row as GridRow,
  RowRendererProps,
} from "react-data-grid";
import {
  AccountStatementPagePropsType,
  account_table_columns,
} from "./account-statement-type";
import Select from "react-select";
import { Break } from "../../components/Break";
import { Text } from "../../components/text/Text";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const AccountStatmentPage = (props: AccountStatementPagePropsType) => {
  const {} = props;
  return (
    <div id="account-statement-page-styles">
      <Select
        options={props.accounts.map((item: any) => ({
          value: item.id,
          label: item.name,
        }))}
        onChange={(account: any) => {
          props.handleGetAccountData(account.value);
        }}
      />
      <Break />
      <Text fs="f3" bold>
        Box
      </Text>
      <Break />

      <DataGrid
      
        className={"rdg-light fill-grid "}
        // components={{ rowRenderer }}
        columns={account_table_columns}
        summaryRows={props.summaryRows}
        rows={props?.values?.entries}
        // onRowsChange={props.onRowsChange}
      />
    </div>
  );
};
