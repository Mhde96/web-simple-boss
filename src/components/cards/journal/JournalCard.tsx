import classNames from "classnames";
import { journalType } from "../../../containers/journals/journal-type";
import "./journal-card-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";

type JournalCardType = journalType & {
  bold?: boolean;
  pointer?: boolean;

  onClick?: any;
  handleTrash?: any;
};
export const JournalCard = ({
  date,
  description,
  id,
  bold,
  number,
  onClick,
  pointer,
  handleTrash,
}: JournalCardType) => {
  const classes = classNames({
    bold,
    pointer,
  });

  return (
    <div id={"journal-card-styles"} className={classes}>
      <div onClick={onClick} className="date">
        {date}
      </div>
      <div onClick={onClick} className="description">
        {description}
      </div>
      <div onClick={onClick} className="number">
        {number}
      </div>

      <FontAwesomeIcon onClick={handleTrash} className="icons" icon={faTrash} />
    </div>
  );
};
