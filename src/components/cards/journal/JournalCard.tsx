import classNames from "classnames";
import { journalType } from "../../../containers/journals/journal-type";
import "./journal-card-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CardAnimationProps, EntriesAnimationProps } from "../CardAnimation";

import { AnimatePresence, motion } from "framer-motion";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts } from "../../../redux/data/dataSlice";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { colors } from "../../../styles/variables-styles";

type JournalCardType = journalType & {
  bold?: boolean;
  pointer?: boolean;

  onEdit?: any;
  handleTrash?: any;
  isHeader?: boolean;
  index?: number;
};
export const JournalCard = ({
  date,
  description,
  id,
  bold,
  number,
  onEdit,
  pointer,
  handleTrash,
  isHeader,
  index,
  entries,
}: JournalCardType) => {
  const [active, setActive] = useState(false);
  const accounts = useSelector(selectAccounts);

  const classes = classNames(
    {
      bold,
      pointer,
    },
    "journal-card"
  );

  const handleOpen = () => {
    if (isHeader) return;
    else {
      setActive(!active);
    }
  };
  return (
    <div id="journal-card-styles">
      <motion.div
        {...CardAnimationProps({ index, active })}
        className={classes}
        onClick={handleOpen}
      >
        <div  className="date">
          {date}
        </div>
        <div className="description">
          {description}
        </div>
        <div  className="number">
          {number}
        </div>
      </motion.div>
      <AnimatePresence>
        {entries && active && (
          <motion.div {...EntriesAnimationProps()} id="journal-card-entries">
            <div className="entries-container">
              {entries.map((entry, index) => (
                <div className="entry" key={index}>
                  <div>
                    {
                      accounts.find((account) => account.id == entry.account_id)
                        .name
                    }
                  </div>

                  <div>{entry.credit}</div>
                  <div>{entry.debit}</div>
                </div>
              ))}
            </div>
            <div className="edit">
              <EditIcon  onClick={onEdit} fill={colors.link} />

              <TrashIcon
                onClick={handleTrash}
                fill={colors.onSurface}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
