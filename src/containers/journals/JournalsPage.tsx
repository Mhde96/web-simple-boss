import { JournalPagePropsType } from "./journal-type";

import { JournalCard } from "../../components/cards/journal/JournalCard";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import "./journals-page-styles.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delayChildren: 0.5,
      // staggerDirection: 1,
      // when: "afterChildren"
    },
  },
};

export const JournalsPage = (props: JournalPagePropsType) => {
  const navigate = useNavigate();
  return (
    <div id="journals-page-styles">
      {" "}
      <LayoutGroup>
        <motion.div
          className="journals-body"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <JournalCard
            description="description"
            date="date"
            bold
            number={"Number"}
            isHeader
          />
          <AnimatePresence>
            {props?.journals?.map((item, index: number) => (
              <JournalCard
                index={index}
                pointer
                key={index}
                entries={item.journal_entries}
                onEdit={() => props.handleNavigateToEntries(item.number)}
                handleTrash={() => props.DeleteJournalAsync(item)}
                {...item}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
      <div style={{}}>
        <hr />
        <div
          style={{
            margin: "10px 0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Count {props.journals.length}</div>
          <Button
            onClick={() => navigate(endroutes.journalentaries().newJournal)}
          >
            New Journal
          </Button>
        </div>
      </div>
    </div>
  );
};
