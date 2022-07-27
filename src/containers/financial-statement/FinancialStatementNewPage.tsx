import { FinancialStatementNewCard } from "../../components/cards/financial-statement/FinancialStatementNewCard";

export const FinancialStatementNewPage = (props: any) => {
  
  return (
    <div
      style={{ background: "white", height: "100%", border: "1px solid black" }}
    >
      <FinancialStatementNewCard
        name="account"
        value1="جزئي"
        value2="كللي"
        value3="كللي"
      />
      {props?.statement()?.map((account: any) => (
        <FinancialStatementNewCard
          name={account.account}
          value1={account.value1}
          value2={account.value2}
          value3={account.value3}
        />
      ))}
    </div>
  );
};
