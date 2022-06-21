import { FinancialStatementCard } from "../../components/cards/financial-statement/FinancialStatementCard";
import "./financial-statement-page-styles.scss";

export const FinancialStatementPage = () => {
  return (
    <div id="financial-statement-page-styles">
      <div
        className="header-footer"
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <FinancialStatementCard name="account" value={"value"} />
        <FinancialStatementCard name="account" value={"value"} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "white",
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <div className="column-section">
          {[1, 2, 5].map((item, index: number) => (
            <div
              key={index}
              className="account-row"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <FinancialStatementCard name="account" value={"2000"} />
            </div>
          ))}
        </div>

        <div className="column-section">
          {[
            1, 2, 3, 4, 5, 2, 1, 2, 3, 4, 5, 6, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8,
            9,
          ].map((item, index: number) => (
            <div
              key={index}
              className="account-row"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <FinancialStatementCard name="account" value={"2000"} />
            </div>
          ))}
        </div>
      </div>

      <div className="border header-footer footer">
        <FinancialStatementCard name="total" value={"10000"} />
        <FinancialStatementCard name="total" value={"10000"} />
      </div>
    </div>
  );
};
