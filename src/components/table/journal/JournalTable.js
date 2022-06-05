import "../table-style.scss";

import { useTranslation } from "react-i18next";
import {
  createTable,
  getCoreRowModel,
  useTableInstance,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../../constant/endroutes";
import { Table as TableBootstrap } from "react-bootstrap";

const table = createTable();

export const JournalTable = ({ data, columns }) => {
  const navigate = useNavigate();

  const displayColumns = [
    ...columns.map((column) =>
      table.createDataColumn(column?.id, {
        cell: (props) => <span> {props.getValue()}</span>,
      })
    ),
  ];

  const instance = useTableInstance(table, {
    data,
    columns: displayColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // return (
  //   <div id={"table-style"}>
  //     <TableBootstrap striped bordered hover>
  //       <thead>
  //         <tr>
  //           {columns.map((item) => (
  //             <th>{item.name}</th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((item) => (
  //           <td>{item.id}</td>
  //         ))}
  //       </tbody>
  //     </TableBootstrap>
  //   </div>
  // );
  return (
    <div id={"table-style"}>
      <TableBootstrap striped bordered hover>
        <thead>
          {instance.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {columns[header.index].name}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {instance.getRowModel().rows.map((row) => (
            <tr
              className="tr"
              key={row.id}
              onClick={() =>
                navigate(endroutes.journalentaries(row.original.id).go)
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{cell.renderCell()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableBootstrap>
    </div>
  );
};
