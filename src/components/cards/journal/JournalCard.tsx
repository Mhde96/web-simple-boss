import classNames from "classnames";
import { journalType } from "../../../containers/journals/journal-type";
import "./journal-card-styles.scss";

type JournalCardType = journalType & {
  bold?: boolean;
  pointer?: boolean;

  onClick?: any;
};
export const JournalCard = ({
  date,
  description,
  id,
  bold,
  number,
  onClick,
  pointer,
}: JournalCardType) => {
  const classes = classNames({
    bold,
    pointer,
  });

  return (
    <div onClick={onClick} id={"journal-card-styles"} className={classes}>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
      <div className="number">{number}</div>
    </div>
  );
};
