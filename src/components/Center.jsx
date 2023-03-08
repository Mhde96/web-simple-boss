export const Center = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        width: "100%",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
};
