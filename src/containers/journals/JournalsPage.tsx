import { JournalPagePropsType } from "./journal-type";

import { JournalCard } from "../../components/cards/journal/JournalCard";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import "./journals-page-styles.scss";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";

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
  const { t } = useTranslation();
  return (
    <div id="journals-page-styles">
      <LayoutGroup>
        <motion.div
          className="journals-body"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <JournalCard
            description={t(en.description)}
            date={t(en.date)}
            bold
            number={t(en.number)}
            isHeader
          />
          <AnimatePresence>
            {props?.journals?.map((item, index: number) => (
              <JournalCard
                index={index}
                pointer
                key={index}
                entries={item.journalentries}
                onEdit={() => props.handleNavigateToEntries(item.number)}
                handleTrash={() => props.DeleteJournalAsync(item)}
                {...item}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
      <hr />

      <div
        style={{
          margin: "0px 0px 10px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="f4 d-flex">
          <div className="px-1">{t(en.count) + " ( "}</div>
          <div>{props.journals.length + " )"}</div>
        </div>
        <Button
          onClick={() => navigate(endroutes.journalentaries().newJournal)}
        >
          {t(en.add_journal)}
        </Button>
      </div>
    </div>
  );
};
