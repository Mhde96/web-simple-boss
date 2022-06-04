import DataGrid from "react-data-grid";

export const JournalEntaryPage = () => {
  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ];

  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];

  return (
    <>
      <DataGrid columns={columns} rows={rows} />;
    </>
  );
};
