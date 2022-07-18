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

export const AccountStatmentPage = (props: AccountStatementPagePropsType) => {
  const {} = props;
  return (
    <div id="account-statement-page-styles">
      <Select
        options={props.accounts.map((item: any) => ({
          value: item.key,
          label: item.name,
        }))}
        onChange={(account: any) => {
          props.handleGetAccountData(account.value);
        }}
        // inputValue={props?.account?.key}
        // value={props?.account?.key}
        // defaultValue={props?.account?.key}
        // defaultInputValue={props?.account?.key}
      />
      <Break />

      <DataGrid
        className={"rdg-light fill-grid "}
        // components={{ rowRenderer }}
        columns={account_table_columns}
        summaryRows={props.summaryRows}
        rows={props?.entries}
        // onRowsChange={props.onRowsChange}
      />
    </div>
  );
};
