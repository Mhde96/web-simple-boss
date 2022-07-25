import { FinancialStatementNewCard } from "../../components/cards/financial-statement/FinancialStatementNewCard";

export const FinancialStatementNewPage = () => {
  return (
    <div style={{background:'white' , height:'100%' , border:'1px solid black' ,}}>
      <FinancialStatementNewCard
        name="account"
        value1="جزئي"
        value2="كللي"
        value3="كللي"
      />
      <FinancialStatementNewCard name="Box" value1="100" value2="" value3="" />
      <FinancialStatementNewCard
        name="account"
        value1=""
        value2="100"
        value3=""
      />
      <FinancialStatementNewCard
        name="account"
        value1=""
        value2=""
        value3="100"
      />
      <FinancialStatementNewCard
        name="account"
        value1=""
        value2=""
        value3="100"
      />
      <FinancialStatementNewCard
        name="account"
        value1=""
        value2=""
        value3="100"
      />
    </div>
  );
};
