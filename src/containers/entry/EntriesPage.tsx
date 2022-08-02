import DataGrid, { Row as GridRow } from "react-data-grid";
import { JournalEntryPagePropsType } from "./journal-entry-type";
import "./entries-styles.scss";
import { deleteRow, jounral_entry_columns } from "./entries-functions";
import "react-contexify/dist/ReactContexify.css";

import { Menu, Item, useContextMenu } from "react-contexify";
import { Input } from "../../components/input/Input";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { navigateAccountStatement } from "../account-statment/account-statement-type";
import { useColorMemo } from "../../hook/useColorMemo";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";
import moment from "moment";
import { dateFormatUi } from "../../utils/date-format";
import { ReactDatePicker } from "react-datepicker";

const MENU_ID = "menu-id";

export const EntriesPage = (props: JournalEntryPagePropsType) => {
  const { values, current, rowIndex, setRowIndex, setValues } = props;
  const colorMode = useColorMemo();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // ==========================================
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  // ==============================================================================F
  const displayMenu =
    ({ rowIdx }: any) =>
    (e: any) => {
      setRowIndex(rowIdx);
      show(e);
    };

  const rowRenderer = (props: any): any => {
    const { rowIdx } = props;

    return <GridRow onContextMenu={displayMenu({ rowIdx })} {...props} />;
  };

  return (
    <motion.div {...PageTransitionProps} id={"entries-styles"}>
      <Breadcrumb>
        <Breadcrumb.Item onClick={props.handleNavigateJournals}>
          {t(en.journals)}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{t(en.entries)}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="operation-container">
        {/* <Button style={{ color: "white" }}>
          <img
            src={"/assets/icons/angles-left-solid.svg"}
            style={{ height: 24, width: "auto" }}
          />
        </Button> */}
        <Button onClick={props.getPreviousJournal}>
          <img
            src={"/assets/icons/angle-left-solid.svg"}
            style={{ height: 24, width: "auto" }}
          />
        </Button>

        <Form.Control disabled value={values.number} type="input" />
        <Button onClick={props.getNextJournal}>
          <img
            src={"/assets/icons/angle-right-solid.svg"}
            style={{ height: 24, width: "auto" }}
          />
        </Button>
        {/* <Button>
          <img
            src={"/assets/icons/angles-right-solid.svg"}
            style={{ height: 24, width: "auto" }}
          />
        </Button> */}

        <Input
          placeholder="date"
          value={props?.values?.date}
          onChange={(date: string) => {
            props.setValues({ ...values, date: dateFormatUi(date) });
          }}
          type="date"
        />

        <Button disabled>{t(en.delete)}</Button>

        <Button onClick={props.handleSubmit}>
          {props.values.number == "new" ? t(en.add) : t(en.update)}
        </Button>
        <Button onClick={props.handleNavigateNew}>{t(en.new)}</Button>
      </div>
      <Input
        value={values.description}
        placeholder={t(en.description)}
        onChange={props.handleChange("description")}
      />
      <hr />
      <DataGrid
        className={`rdg-${colorMode} fill-grid data-grid`}
        components={{ rowRenderer }}
        columns={jounral_entry_columns}
        summaryRows={props.summaryRows}
        rows={props.values.journalentries}
        onRowsChange={props.onRowsChange}
      />

      <Menu id={MENU_ID}>
        {values.journalentries[rowIndex]?.accountKey && (
          <Item
            onClick={() => {
              navigateAccountStatement({
                key: values.journalentries[rowIndex].accountKey,
                navigate,
              });
            }}
          >
            {t(en.account_statement)}
          </Item>
        )}
        <Item onClick={() => deleteRow(rowIndex, setValues)}>
          {t(en.delete)}
        </Item>
      </Menu>
    </motion.div>
  );
};
