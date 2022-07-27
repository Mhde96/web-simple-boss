import _ from "lodash";
import { useEffect } from "react";
import { useFinancialStatement } from "./financial-statement-functions";
import { FinancialStatementNewPage } from "./FinancialStatementNewPage";

export const IncomeStatementContainer = () => {
  const trading_account = useFinancialStatement().trading_account;
  const profit_account = useFinancialStatement().profit_account;

  const statement = () => {
    let data: Array<any> = [];
    let obg = ({ account, value1, value2, value3 }: any) => ({
      account,
      value1,
      value2,
      value3,
    });

    trading_account.credits
      .filter((account: any) => account.id)
      .map((account: any) => {
        data.push(
          obg({
            account: account.name,
            value1: account.credit,
            value2: "",
          })
        );
      });

    data.push(
      obg({
        account: "اجمالي المبيعات",
        value1: "",
        value2: _.sumBy(data, (item: any) => Number(item.value1)),
      })
    );

    trading_account.debits
      .filter((account: any) => account.id)
      .map((account: any) => {
        data.push(
          obg({
            account: account.name,
            value1: account.debit,
            value2: "",
          })
        );
      });

    data.push(
      obg({
        account: "اجمالي المشتريات",
        value1: "",
        value2: _.sumBy(
          trading_account.debits.filter((account: any) => account.id),
          (item: any) => Number(item.debit)
        ),
      })
    );

    data.push(
      obg({
        account: "الربح المجمل",
        value1: "",

        value2: trading_account.result.debit,
      })
    );

    profit_account.credits
      .filter((item: any) => item.id)
      .map((account: any) => {
        data.push(
          obg({
            account: account.name,
            value1: account.credit,
            value2: "",
          })
        );
      });

    data.push(
      obg({
        account: "ايرادات اخرى",
        value1: "",

        value2: _.sumBy(
          profit_account.credits.filter((account: any) => account.id),
          (item: any) => Number(item.debit)
        ),
      })
    );

    profit_account.debits
      .filter((item: any) => item.id)
      .map((account: any) => {
        data.push(
          obg({
            account: account.name,
            value1: account.debit,
            value2: "",
          })
        );
      });

    data.push(
      obg({
        account: "اجمالي المصاريف",
        value1: "",

        value2: _.sumBy(
          profit_account.debits.filter((account: any) => account.id),
          (item: any) => Number(item.debit)
        ),
      })
    );
    data.push(
      obg({
        account: "صافي الربح",
        value1: "",

        value2: profit_account.result.debit,
      })
    );

    return data;
  };

  useEffect(() => {
    statement();
  }, []);

  const props = { statement };
  return <FinancialStatementNewPage {...props} />;
};
