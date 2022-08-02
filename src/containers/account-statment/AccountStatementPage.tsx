import DataGrid, { Column, Row, RowRendererProps } from "react-data-grid";
import {
  AccountStatementPagePropsType,
  account_table_columns,
} from "./account-statement-type";
import Select from "react-select";
import { Break } from "../../components/Break";
import { Text } from "../../components/text/Text";
import "./account-statement-page-styles.scss";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { useColorMemo } from "../../hook/useColorMemo";
export const AccountStatmentPage = (props: AccountStatementPagePropsType) => {
  const { selectedAccount } = props;
  const colorMode = useColorMemo();
  const navigate = useNavigate();
  const accounts = props.accounts.map((item: any) => ({
    value: item.key,
    label: item.name,
  }));

  return (
    <motion.div {...PageTransitionProps} id="account-statement-page-styles">
      <Select
        options={accounts}
        onChange={(account: any) => {
          props.handleGetAccountData(account.value);
        }}
        // inputValue={props?.account?.key}
        value={selectedAccount}
        defaultValue={selectedAccount}
        // defaultInputValue={props?.account?.key}
      />
      <Break />

      <DataGrid
        className={`rdg-${colorMode} fill-grid data-grid`}
        // components={{ rowRenderer }}

        onRowClick={(d: any) => {
          if (d.number) navigate(endroutes.journalentaries(d.number).go);
        }}
        columns={account_table_columns}
        summaryRows={props.summaryRows}
        rows={props?.entries}
        // onRowsChange={props.onRowsChange}
      />
    </motion.div>
  );
};
