import DataGrid, {
  Column,
  Row as GridRow,
  RowRendererProps,
} from "react-data-grid";
import { columnsKey, JournalEntryPagePropsType } from "./journal-entry-type";
import "./journal-entry-styles.scss";
import {
  deleteRow,
  jounral_entry_columns,
  rowKeyGetter,
} from "./journal-entry-functions";
import "react-contexify/dist/ReactContexify.css";

import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import { Input } from "../../components/input/Input";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";

const MENU_ID = "menu-id";

export const JournalEntaryPage = (props: JournalEntryPagePropsType) => {
  const { values, current, rowIndex, setRowIndex, setValues } = props;
  const navigate = useNavigate();

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
    <div id={"journal-entry-styles"}>
      <Breadcrumb>
        <Breadcrumb.Item onClick={props.handleNavigateJournals}>
          Journal
        </Breadcrumb.Item>
        <Breadcrumb.Item active>entry</Breadcrumb.Item>
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
        <Form.Control type="date" />
        <Button>Delete</Button>

        <Button onClick={props.handleSubmit}>
          {props.values.number == "new" ? "add" : "update"}
        </Button>
        <Button onClick={props.handleNavigateNew}>New</Button>
      </div>
      <Input
        value={values.description}
        placeholder="description"
        onChange={props.handleChange("description")}
      />
      <hr />
      <DataGrid
        className={"rdg-light fill-grid data-grid"}
        components={{ rowRenderer }}
        columns={jounral_entry_columns}
        summaryRows={props.summaryRows}
        rows={props.values.journalentries}
        onRowsChange={props.onRowsChange}
      />

      <Menu id={MENU_ID}>
        <Item onClick={() => deleteRow(rowIndex, setValues)}>delete</Item>
      </Menu>
    </div>
  );
};
