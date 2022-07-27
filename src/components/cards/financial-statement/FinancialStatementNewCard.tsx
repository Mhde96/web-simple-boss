import classNames from "classnames";
import "./financial-statement-card-styles.scss";

export const FinancialStatementNewCard = ({
  name,
  value1,
  value2,
  value3,
}: any) => {
  const classes = classNames(
    {
      bold: value2 ? true : false,
      value3: value2 ? true : false,
    },
    ["border-right-style"]
  );

  const classesValue3 = classNames({
    bold: value2 ? true : false,
    value3: value2 ? true : false,
  });
  return (
    <div id="financial-statement-card-new-styles">
      <div className={classes}>{name}</div>
      <div className={classes}>{value1}</div>
      <div className={classesValue3}>{value2}</div>
    </div>
  );
};
