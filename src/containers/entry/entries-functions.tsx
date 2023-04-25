import moment from "moment";
import { TextEditor } from "react-data-grid";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { endpoints } from "../../constant/endpoints";
import { endroutes } from "../../constant/endroutes";
import { api } from "../../helper/api";
import { columnsKey, empty_row } from "./journal-entry-type";
import i18n from "../../helper/i18n";
import { en } from "../../helper/languages/en";

const t = i18n.t;
export const jounral_entry_columns = [
  // { key: columnsKey.id, name: columnsKey.id },
  // { key: columnsKey.account_id, name: columnsKey.account_id,},
  // { key: columnsKey.accountKey, name: columnsKey.accountKey,},
  {
    key: columnsKey.accountName,
    name: t(en.account),
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return (
        <div className="d-flex">
          <strong style={{ paddingRight: 5 }}>{t(en.rows) + " - "}</strong>
          <strong>{props.row.accountLength}</strong>
        </div>
      );
    },
  },
  {
    key: columnsKey.description,
    name: t(en.description),
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.difference}</strong>;
    },
  },
  {
    key: columnsKey.credit,
    name: t(en.credit),
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalCredit}</strong>;
    },
  },
  {
    key: columnsKey.debit,
    name: t(en.debit),
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalDebit}</strong>;
    },
  },
  // { key: columnsKey.status, name: columnsKey.status },
];

export const journal_entry_rows = (entries?: Array<any>): any => {
  if (entries?.length) {
    return entries;
  } else {
    let rows = [];
    for (let i = 0; i < 20; i++) {
      rows.push({ ...empty_row });
    }
    return rows;
  }
};

export function rowKeyGetter(row: any) {
  console.log(row);
  return row.id;
}

export const deleteRow = (rowIdx: number, setValues: any) => {
  setValues((prevValues: any) => ({
    ...prevValues,
    entries: prevValues.entries.filter(
      (entary: any, index: number) => index != rowIdx
    ),
  }));
};

export const JournalApi = (data: any, navigate: NavigateFunction) => {
  console.log(data);
  let configration = () => {
    let method = "post";
    let url = endpoints.add_journal;

    if (data.number != "new") {
      method = "post";

      url = endpoints.update_journal;
    }

    return { method, url };
  };

  let entries: Array<any> = [];
  data.entries.map((entry: any) => {
    entry.debit = parseInt(entry.debit);
    entry.credit = parseInt(entry.credit);
    if (entry.account.id && (entry.debit > 0 || entry.credit > 0)) {
      if (entry.id == null && configration().url == endpoints.add_journal) {
        delete entry.id;
      }

      delete entry.accountName;
      delete entry.account_id;
      delete entry.accountKey;
      delete entry.status;
      entries.push(entry);
    }
  });

  console.log(entries);
  api({
    ...configration(),

    data: {
      description: data.description,
      date: moment(data.date).format("yyyy-MM-DD"),
      entries: entries,
      number: data.number,
      user_id: data.user_id,
    },
  }).then((response) => {
    navigate(endroutes.journals.path);
    console.log(response);

    // alert("you had added journal");
  });
};
