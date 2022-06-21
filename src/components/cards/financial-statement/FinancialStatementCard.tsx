import "./financial-statement-card-styles.scss";
type CardProps = {
  name?: string;
  value: string | number;
};
export const FinancialStatementCard = (props: CardProps) => {
  const { value, name } = props;
  return (
    <div id="financial-statement-card-styles">
      <div className="account bold">{name}</div>
      <div className="value bold">{value}</div>
    </div>
  );
};
