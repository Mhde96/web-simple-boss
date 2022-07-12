import { FinancialStatementCard } from "../../components/cards/financial-statement/FinancialStatementCard";
import "./financial-statement-page-styles.scss";

export const FinancialStatementPage = (props: any) => {
  return (
    <div id="financial-statement-page-styles">
      <div
        className="header-footer"
        style={{
          display: "flex",

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
          {props?.state?.credits?.map((item: any, index: number) => (
            <div
              key={index}
              className="account-row"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <FinancialStatementCard
                name={item.name}
                value={item.credit}
              />
            </div>
          ))}
        </div>

        <div className="column-section">
          {props?.state?.debits?.map((item: any, index: number) => (
            <div
              key={index}
              className="account-row"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <FinancialStatementCard
                name={item.name}
                value={item.debit}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border header-footer footer">
        <FinancialStatementCard name="total" value={props?.state?.total} />
        <FinancialStatementCard name="total" value={props?.state?.total} />
      </div>
    </div>
  );
};
