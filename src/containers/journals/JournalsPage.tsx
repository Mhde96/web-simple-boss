import { JournalPagePropsType } from "./journal-type";

import { JournalCard } from "../../components/cards/journal/JournalCard";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { Button } from "react-bootstrap";
import "./journals-page-styles.scss";
export const JournalsPage = (props: JournalPagePropsType) => {
  const navigate = useNavigate();
  return (
    <div id="journals-page-styles">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div>Filter</div>
          <Button>Date</Button>
          <Button>Number</Button>
        </div>
        <hr />
      </div>

      <div className="journals-body">
        <JournalCard
          description="description"
          date="date"
          bold
          number={"Number"}
        />
        {props.journals.map((item, index: number) => (
          <JournalCard
            pointer
            key={index}
            onClick={() => props.handleNavigateToEntries(item.number)}
            {...item}
          />
        ))}
      </div>

      <div style={{  }}>
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
          <div>Count 3</div>
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
